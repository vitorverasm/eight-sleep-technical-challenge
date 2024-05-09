import { z } from "zod";
import { SleepSessionSchema } from "./sleep-session";

export const GetSessionsByUserIdParamsSchema = z.object({
  userId: z.string({
    required_error: "userId is required",
  }),
});

export const GetSessionsByUserIdResponseSchema = z.object({
  intervals: SleepSessionSchema.array(),
});

export type GetSessionsByUserIdParams = z.infer<
  typeof GetSessionsByUserIdParamsSchema
>;

export type GetSessionsByUserIdResponse = z.infer<
  typeof GetSessionsByUserIdResponseSchema
>;
