import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'



export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),

      GoogleProvider({
        clientId : process.env.GOOGLE_CLIENT_ID,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET
      }),
      // ...add more providers here

      CredentialsProvider({
         name  : "Credentials",

         credentials : {
          email : {label : "email", type : "text", placeholder : "enter a valid email"},
          password : {label : "password", type : "password", placeholder : "enter a valid password"}
        
         },
         
         async authorize(credentials, req){
          const {email,password} = credentials
          const user  = {id : "1" , email : "obichris202@gmail.com", password: "1234"} || {id : "2" , email : "KingJames@gmail.com", password: "5678"}

          if(user){
             return user
          }

          else{
            return null
          }
         }
      })
    ],

    pages : {
      signIn : '/login/page'
      
    }
   

    // callbacks : {
    //   async signIn({profile}) {
        
    //   }
    // }

  
  }
  