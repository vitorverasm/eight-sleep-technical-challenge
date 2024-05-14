import { faker } from "@faker-js/faker";
import { User } from "../../types/user.type";

export const createPerson = (): User => ({
  email: faker.internet.email(),
  id: faker.string.uuid(),
  name: faker.person.fullName(),
});
