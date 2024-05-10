import { HttpHandler } from "msw";
import { setupServer } from "msw/native";

export const createHttpServerMock = (handlers: HttpHandler[]) => {
  return setupServer(...handlers);
};
