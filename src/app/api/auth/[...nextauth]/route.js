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
                const user = await db.collection('users').findOne({
                    userEmail: email
                });
                console.log(user);
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
                const userAccountOpeningDate = new Date();
                const uesrRole = 'generale-user'
                const userLavel = 'basic'
                const generateUserName = email.split('@')
                const userName = generateUserName[0]
                const userInfo = {
                    userName,
                    userFullName : name,
                    userEmail : email,
                    userProfileImage : image,
                    userAccountOpeningDate,
                    uesrRole,
                    userLavel,
                }
                try {
                    const db = await connectDB();
                    const userCollection = db.collection('users');
                    const user = await userCollection.findOne({userEmail : email});
                    if (!user) {
                        await userCollection.insertOne(userInfo)
                        return user;
                    } else {
                        return user;
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
            console.log(user);
            if(user){
                token.name = user.name;
                token.email = user.email;
                token.image = user.image || null;
                token.userRole = 'general-user';
                token.userLevel = 'basic';
            }
            return token
        },
        // add user data in session
        async session({session, token}) {
            session.user.username = token.username;
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.picture = token.picture;
            session.user.userLavel = token.userLavel;
            session.user.uesrRole = token.uesrRole;
            return session
        }
    }
})

export {
    handler as GET, handler as POST
};

