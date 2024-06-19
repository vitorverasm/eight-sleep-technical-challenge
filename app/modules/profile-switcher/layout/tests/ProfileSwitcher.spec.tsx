import {
  render,
  screen,
  userEvent,
  waitFor,
} from "@testing-library/react-native";
import { HttpResponse, http } from "msw";
import Router from "../../../../shared/navigation/Router";
import { TestWrapper } from "../../../../shared/tests/mocks/TestWrapper";
import {
  createHttpServerMock,
  getMockServerUrl,
} from "../../../../shared/tests/mocks/http-server-mock";
import { sleepSessionMock } from "../../../sessions/tests/mocks/session-mock";
import { createPerson } from "../../../user/tests/mocks/user-mock";
import ProfileSwitcher from "../ProfileSwitcher";

const user1 = createPerson();
const user2 = createPerson();

const handlers = [
  http.get(getMockServerUrl("/users"), () => {
    return HttpResponse.json({
      users: [user1, user2],
    });
  }),
  http.get(getMockServerUrl(`/${user1.id}/sessions`), () => {
    return HttpResponse.json(sleepSessionMock);
  }),
];

const httpServer = createHttpServerMock(handlers);

beforeAll(() => httpServer.listen());
afterEach(() => httpServer.resetHandlers());
afterAll(() => httpServer.close());

describe("ProfileSwitcher", () => {
  jest.useFakeTimers();

  it("should render properly", async () => {
    render(
      <TestWrapper>
        <ProfileSwitcher />
      </TestWrapper>,
    );

    await waitFor(() => {
      expect(screen.getByText("Choose your profile")).toBeOnTheScreen();
    });
  });

  it("should display users", async () => {
    render(
      <TestWrapper>
        <ProfileSwitcher />
      </TestWrapper>,
    );

    await waitFor(() => {
      expect(screen.getByText(user1.name)).toBeOnTheScreen();
    });
    expect(screen.getByText(user1.email)).toBeOnTheScreen();
    expect(screen.getByText(user2.name)).toBeOnTheScreen();
    expect(screen.getByText(user2.email)).toBeOnTheScreen();
  });

  it("should signIn with user on tap", async () => {
    const user = userEvent.setup();
    render(
      <TestWrapper>
        <Router />
      </TestWrapper>,
    );

    await waitFor(() => {
      const userCard = screen.getByText(user1.name);
      user.press(userCard);
    });

    await waitFor(() => {
      expect(screen.getByTestId("home-greetings")).toBeOnTheScreen();
    });
  });
});
