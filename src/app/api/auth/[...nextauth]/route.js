import {
    connectDB
} from "@/lib/connectDB";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {
    NextResponse
} from "next/server";

export const handler = NextAuth({

    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        rolling: false
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const {
                    email,
                    password
                } = credentials;
                if (!email || !password) {
                    return NextResponse.json({
                        message: 'Please check your email or password',
                        status: 401,
                        success: false
                    })
                }
                const db = await connectDB();
                if (!connectDB) {
                    return null
                }
                const userCollection = db.collection('users')
                const user = await userCollection.findOne({email: email});
                const passwordMatch = bcrypt.compareSync(password, user.password)
                if (!passwordMatch) {
                    return null
                }
                return user
            },
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRECT
        })
    ], 
    pages: {
        signIn: '/login',
    },
    callbacks: {
        // add user in database
        async signIn({user, account}) {
            if (account.provider === 'google') {
                const {name, email, image} = user;
                const createAt= new Date();
                const generateUserName = email.split('@')
                const username = generateUserName[0]
                const password = '';
                const role = 'general-user';
                const level = 'basic';
                const createdQuizes = [];
                const results = [];
                const participatedQuizes = [];
                const userInfo = {
                    createAt,
                    name,
                    username,
                    email,
                    password,
                    role,
                    level,
                    createdQuizes,
                    results,
                    participatedQuizes,
                    image
                }
                try {
                    const db = await connectDB();
                    const userCollection = db.collection('users');
                    const existingUser = await userCollection.findOne({email : email});
                    if (!existingUser) {
                       const user = await userCollection.insertOne(userInfo)
                        return user;
                    } else {
                        return existingUser;
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                return user;
            }
        },
        // add user data in token
        async jwt({token, user}) {
            if(user){
                const db = await connectDB();
                const userCollection = db.collection('users');
                const existingUser = await userCollection.findOne({email : user.email});
                if(existingUser){
                    token.name = existingUser.name;
                    token.email = existingUser.email;
                    token.username = existingUser.username;
                    token.role = existingUser.role;
                    token.image = existingUser.image
                }
            }
            return token
        },
        // add user data in session
        async session({session, token}) {
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.username = token.username;
            session.user.role = token.role;
            session.user.image = token.image;
            return session
        }
    }
})

export {
    handler as GET, handler as POST
};

