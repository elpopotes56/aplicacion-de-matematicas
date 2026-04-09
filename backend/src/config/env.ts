import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  DIRECT_URL: z.string().min(1).optional(),
  PORT: z.coerce.number().default(4000), // Note: Railway EXPOSE takes precedence for Edge routing
  SUPABASE_URL: z.string().url(),
  SUPABASE_ANON_KEY: z.string().min(1),
  DEMO_EMAIL: z.string().email().optional()
});

const cleanEnv = Object.fromEntries(
  Object.entries(process.env).map(([k, v]) => [k, typeof v === "string" ? v.trim() : v])
);

export const env = envSchema.parse(cleanEnv);
