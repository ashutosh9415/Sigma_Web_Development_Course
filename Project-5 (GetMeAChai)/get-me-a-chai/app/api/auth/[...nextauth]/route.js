import NextAuth from "next-auth"
// import AppleProvider from "next-auth/providers/apple"
// import FacebookProvider from "next-auth/providers/facebook"
// import GoogleProvider from "next-auth/providers/google"
// import TwitterProvider from "next-auth/providers/twitter"
// import EmailProvider from "next-auth/providers/email"
import GithubProvider from "next-auth/providers/github"

import User from "@/models/User"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"

const githubProvider =
  process.env.GITHUB_ID && process.env.GITHUB_SECRET
    ? GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
    : null

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
  console.warn(
    "NextAuth warning: Missing GITHUB_ID and/or GITHUB_SECRET. GitHub sign-in will not be available."
  )
}

export const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: githubProvider ? [githubProvider] : [],
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        await connectDB();

        const emailAddress = user?.email ?? profile?.email ?? email?.email;
        if (!emailAddress) {
          return false;
        }

        const currentUser = await User.findOne({ email: emailAddress });
        if (!currentUser) {
          // Create new user
          const newUser = new User({
            email: emailAddress,
            username: emailAddress.split("@")[0],
          });
          await newUser.save();
          user.name = newUser.username;
        } else {
          user.name = currentUser.username;
        }
        return true;
      }

      return true;
    },
    async session({ session, user, token }) {
      const dbUser = await User.findOne({ email: session.user.email })
      session.user.name = dbUser.username;
      return session
    },
  }

})


export { authOptions as GET, authOptions as POST }