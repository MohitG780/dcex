
import GoogleProvider from "next-auth/providers/google";
import db from "@/app/db";
import { Keypair } from "@solana/web3.js";
import { Session } from "next-auth";

export interface session extends Session{
    user:{
         id:string;
        email:string;
        name:string;
        image:string;
        uid:string;


    };
}
export const authConfig={
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
      ],
      callbacks:{
        session:({session,token}:any):session=>{
            const newSession:session=session as session
            if(newSession.user&&token.uid){
                newSession.user.uid=token.uid??"";
            }
            return newSession!;
        },
        async jwt({token,account,profile}:any){
            const user= await db.user.findFirst({
                where:{
                    sub:account?.providerAccountId??""
                }
            })
            if(user){
                token.uid=user.id
            }
            return token
        },
        
          async signIn({ user, account, profile, email, credentials }:any) {
            if(account?.provider==="google"){
              const email=user.email;
              if(!email){
                return false;
              }
              console.log({ user, account, profile, email, credentials });
              const userDb= await db.user.findFirst({
                where:{
                  username:email
                }
              })
              if(userDb){
                return true;
              }
              const keypair =Keypair.generate();
              const publicKey=keypair.publicKey.toBase58();
              const privateKey=keypair.secretKey;
              console.log(privateKey);
              console.log(publicKey);

              await db.user.create({
                data: {
                  username:email,
                  name: profile?.name,
                  profilepicture:profile?.picture,
                  provider:"google",
                  sub:account.providerAccountId,
                  solWallet:{
                    create:{
                       publicKey:publicKey,
                       privateKey:privateKey.toString()
                    }
                  } ,
                  inrWallet:{
                    create:{
                      balance:0
                    }
                  } 

                }
              })
              return true;
        }return false;
          }
      }

}