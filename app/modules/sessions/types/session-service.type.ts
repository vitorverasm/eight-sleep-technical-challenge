import { z } from "zod";
import { SleepSessionSchema } from "./sleep-session.type";

export const GetSessionsByUserIdParamsSchema = z.object({
  userId: z.string({}).optional(),
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
