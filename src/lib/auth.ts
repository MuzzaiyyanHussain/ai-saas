import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            profile: async (profile) => {
                await common({
                    email: profile?.email!,
                    name: profile.name!,
                    avator: profile.picture!,
                    plan: "free",
                    usageCount: 0,
                    usageLimit: 3,
                });

                return {
                    id: profile.sub,
                    email: profile.email,
                    name: profile.name,
                    image: profile.picture
                };
            }

        })
    ],
    secret:process.env.NEXTAUTH_SECRET!,
    session:{
        strategy:"jwt",
    },
    callbacks:{
        async jwt({token, user}:{token:string, user:any}) {
            if (user) {
                token.email = user.email,
                
            }
        }
    }
}