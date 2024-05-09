import Request from "../../../shared/services/request";
import {
  GetSessionsByUserIdParams,
  GetSessionsByUserIdParamsSchema,
  GetSessionsByUserIdResponse,
  GetSessionsByUserIdResponseSchema,
} from "../types/session-service";

export async function getSessionsByUserId(params: GetSessionsByUserIdParams) {
  const paramsParse = GetSessionsByUserIdParamsSchema.safeParse(params);
  if (paramsParse.success) {
    const { userId } = paramsParse.data;

    const { data } = await Request.get<GetSessionsByUserIdResponse>(
      `/${userId}.json`,
    );

    return GetSessionsByUserIdResponseSchema.parse(data).intervals;
  }
}
