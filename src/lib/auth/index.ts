import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "@/db/schema/index";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.users,
      session: schema.sessions,
      account: schema.accounts,
      verification: schema.verifications,
    },
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  socialProviders: {},
  sessions: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7
    }
  },
  cookies: {
    sessionToken: {
      name: "auth_session",
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      }
    }
  },
  advanced: {
    database: {
      generateId: () => crypto.randomUUID(),
    }
  },
  plugins: [nextCookies()]
});