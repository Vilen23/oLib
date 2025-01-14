import CredentialsProvider from "next-auth/providers/credentials";
export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(
        credentials: Record<"username" | "password", string> | undefined
      ) {
        try {
          if (!credentials) {
            throw new Error("Invalid credentials");
          }
          console.log(credentials);
          return {
            id: "1",
            name: credentials.username,
            email: null,
            image: null,
          };
        } catch (err) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  secret: "Hello",
  pages: {
    signIn: "/",
  },
  callbacsk: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user = token;
      return session;
    },
  },
};
