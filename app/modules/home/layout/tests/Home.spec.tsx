import {
  render,
  screen,
  userEvent,
  waitFor,
} from "@testing-library/react-native";
import { HttpResponse, http } from "msw";
import { TestWrapper } from "../../../../shared/tests/mocks/TestWrapper";
import {
  createHttpServerMock,
  getMockServerUrl,
} from "../../../../shared/tests/mocks/http-server-mock";
import { useProfileSwitcherStore } from "../../../profile-switcher/state/useProfileSwitcherStore";
import { sleepSessionMock } from "../../../sessions/tests/mocks/session-mock";
import { SleepSession } from "../../../sessions/types/sleep-session.type";
import { createPerson } from "../../../user/tests/mocks/user-mock";
import Home from "../Home";

jest.mock("../../../sessions/layout/components/Metrics/SleepFitness", () => {
  const { View, Text } = jest.requireActual("react-native");
  return {
    SleepFitness: ({ score }: { score: SleepSession["score"] }) => (
      <View>
        <Text>{score}%</Text>
        <Text>Sleep Fitness</Text>
      </View>
    ),
  };
});

const user1 = createPerson();
const user2 = createPerson();

const handlers = [
  http.get(getMockServerUrl("/users.json"), () => {
    return HttpResponse.json({
      users: [user1, user2],
    });
  }),
  http.get(getMockServerUrl(`/${user1.id}.json`), () => {
    return HttpResponse.json(sleepSessionMock);
  }),
];

const httpServer = createHttpServerMock(handlers);

const todayMock = new Date(sleepSessionMock.intervals[0].ts);

jest.useFakeTimers();
jest.setSystemTime(todayMock.getTime());

beforeAll(() => httpServer.listen());
beforeEach(() => useProfileSwitcherStore.getState().signInUser(user1));
afterEach(() => httpServer.resetHandlers());
afterAll(() => httpServer.close());

describe("Home", () => {
  it("should render properly", async () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>,
    );

    await waitFor(() => {
      expect(screen.getByText(`Hello ${user1?.name},`)).toBeOnTheScreen();
    });
    expect(screen.getByText("Sleep report")).toBeOnTheScreen();
    expect(
      screen.getByText(
        todayMock.toLocaleDateString("en-us", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      ),
    ).toBeOnTheScreen();
  });

  it("should render correct metrics on sleep tab", async () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>,
    );

    await waitFor(() => {
      expect(screen.getByText(`Hello ${user1?.name},`)).toBeOnTheScreen();
    });
    expect(screen.getByText("Sleep Fitness")).toBeOnTheScreen();
    expect(screen.getByText("Time Slept")).toBeOnTheScreen();
    expect(screen.getByText("Timeline")).toBeOnTheScreen();
  });

  it("should render correct metrics on health tab", async () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>,
    );
    const user = userEvent.setup();

    await waitFor(() => {
      expect(screen.getByText(`Hello ${user1?.name},`)).toBeOnTheScreen();
    });
    user.press(screen.getByTestId("session-tab-health"));
    await waitFor(() => {
      expect(screen.getByText("Sleeping heart rate")).toBeOnTheScreen();
    });
    expect(screen.getByText("Sleeping respiratory rate")).toBeOnTheScreen();
  });

  it("should render correct metrics on climate tab", async () => {
    render(
      <TestWrapper>
        <Home />
      </TestWrapper>,
    );
    const user = userEvent.setup();

    await waitFor(() => {
      expect(screen.getByText(`Hello ${user1?.name},`)).toBeOnTheScreen();
    });
    user.press(screen.getByTestId("session-tab-temperature"));
    await waitFor(() => {
      expect(screen.getByText("Temperature in room")).toBeOnTheScreen();
    });
    expect(screen.getByText("Temperature in bed")).toBeOnTheScreen();
  });
});
