import { z } from "zod";

const envSchema = z.object({
  EXPO_PUBLIC_API_URL: z.string().url(),
});

const Env = envSchema.parse(process.env);

export default Env;
