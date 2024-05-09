import Request from "../../../shared/services/request";
import {
  GetSessionsByUserIdParams,
  GetSessionsByUserIdParamsSchema,
  GetSessionsByUserIdResponse,
  GetSessionsByUserIdResponseSchema,
} from "../types/session-service";

export async function getSessionsByUserId(params: GetSessionsByUserIdParams) {
  const { userId } = GetSessionsByUserIdParamsSchema.parse(params);

  const { data } = await Request.get<GetSessionsByUserIdResponse>(
    `/${userId}.json`,
  );

  return GetSessionsByUserIdResponseSchema.parse(data);
}
