import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const handler = NextAuth({

    secret : process.env.NEXT_PUBLIC_AUTH_SECRET,
    session : {
        strategy : 'jwt',
        maxAge : 30 * 24 * 60 * 60,
        rolling : false
    },
    providers : [
        CredentialsProvider({
            credentials : {
                email : {},
                password : {}
            },
            async authorize(credentials) {
                const {email, password} = credentials;
                if(!email || !password) {
                    return null
                }
                const db = await connectDB();
                const currentUser = await db.collection('users').findOne({email});
                if(!connectDB){
                    return null
                }
                const passwordMatch = bcrypt.compareSync(password, currentUser.password)
                if(!passwordMatch){
                    return null
                }
                return currentUser
            },
        }),
        GoogleProvider({
            clientId : process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret : process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRECT
        })
    ],
    pages : {
        signIn : '/login',
    },
    callbacks : {
        async signIn({user, account}){
            if(account.provider === 'google'){
                const {name, email, image} = user;
                const usercreateDate = new Date();
                const uesrRole = 'generale-user'
                const userLavel = 'basic'
                const userInfo = {name, email, image, usercreateDate, uesrRole, userLavel}
                try {
                    const db = await connectDB();
                    const userCollection = db.collection('users');
                    const userExist = await userCollection.findOne({email});
                    if(!userExist){
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
    }
})

export { handler as GET, handler as POST };

