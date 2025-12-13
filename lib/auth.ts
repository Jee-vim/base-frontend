import NextAuth, { getServerSession, NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { ENDP } from "@/services/endpoint";

export async function getSession() {
  const session: any = await getServerSession(authOptions);
  return session;
}
const resolveAuth = <T extends object>(
  target: T,
  source: Record<string, unknown>,
) => {
  for (const key of Object.keys(source) as (keyof TAuth)[]) {
    const value = (source as any)[key];
    if (value !== undefined) {
      (target as any)[key] = value;
    }
  }
};
const authOptions = {
  providers: [
    Credentials({
      name: "Send OTP",
      id: "send-otp",
      credentials: {},
      async authorize(
        credentials: Record<string, string> | undefined,
      ): Promise<any> {
        if (!credentials || !credentials.email) return null;
        try {
          const { data }: any = await ENDP.auth.send_otp({
            email: credentials.email,
          });

          const v = data?.user;
          return {
            token_otp: v.token,
          };
        } catch (error: any) {
          throw new Error(error?.response?.data?.message);
        }
      },
    }),
    Credentials({
      name: "Verify OTP",
      id: "verify-otp",
      credentials: {},
      async authorize(
        credentials: Record<string, string> | undefined,
      ): Promise<any> {
        const session: any = await getServerSession(authOptions);
        try {
          const { data }: any = await ENDP.auth.verify_otp({
            otp: credentials?.otp as string,
            token: session?.token,
          });
          return {
            token: data?.token,
            name: data?.name,
            email: data?.email,
            id: data?.id,
            avatar: data?.avatar,
          };
        } catch (error: any) {
          throw new Error(error?.response?.data?.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) resolveAuth(token, user as unknown as Record<string, unknown>);
      return token;
    },
    async session({ session, token }) {
      resolveAuth(session, token);
      return session;
    },
  },
} satisfies NextAuthOptions;

export default NextAuth(authOptions);
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}
