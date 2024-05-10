import { HttpHandler } from "msw";
import { setupServer } from "msw/native";
import Env from "../../config/env";

export const createHttpServerMock = (handlers: HttpHandler[]) => {
  return setupServer(...handlers);
};

export const getMockServerUrl = (relativePath: string) => {
  return `${Env.EXPO_PUBLIC_API_URL}${relativePath}`;
};
