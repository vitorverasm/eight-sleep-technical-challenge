## Eight Sleep - Technical Challenge (Family Mode)

This project provides a "Family mode" view of users sleep sessions.

**Requirements:**

- Users should be able to view each individual sleep data
- Users should see sleep metrics around each sleep session
- The project must compile in Android and iOS without errors
- No static mock data

**Bonus points:**

- Animate data visualization
- Unit and/or E2E testing
- Documentation

### Installing

```bash
npm install
```

### Running

```bash
npm run android
```

or

```bash
npm run ios
```

### Scripts

| Script          | Description                                         |
| --------------- | --------------------------------------------------- |
| `yarn android`  | Run project on android simulator                    |
| `yarn ios`      | Run project on iOS simulator                        |
| `yarn start`    | Start metro bundler                                 |
| `yarn lint`     | Run ESlint checks                                   |
| `yarn lint:fix` | Run ESlint and fix all auto-fixable errors/warnings |
| `yarn test`     | Runs all unit tests                                 |
| `yarn prepare`  | Enable git hooks (Husky integration)                |

### Libraries (Relevant choices)

| Feature                    | Library                                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Global state management    | [Zustand](https://github.com/pmndrs/zustand)                                                                                               |
| UI/Components              | [gluestack](https://gluestack.io/)                                                                                                         |
| Navigation                 | [React Navigation](https://reactnavigation.org/)                                                                                           |
| Charts & circular progress | [react-native-skia](https://github.com/Shopify/react-native-skia#readme), and [react-native-gifted-charts](https://gifted-charts.web.app/) |
| Animations                 | [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated#readme)                                              |
| Network layer & caching    | [swr](https://swr.vercel.app)                                                                                                              |
| Runtime type validation    | [zod](https://zod.dev)                                                                                                                     |

### Development tooling

| Feature             | Tool                                                                                                                                           |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit tests          | [Jest](https://jestjs.io/) + [@testing-library/react-native](https://callstack.github.io/react-native-testing-library)                         |
| Request mocking     | [msw](https://mswjs.io)                                                                                                                        |
| Mock data           | [@faker-js/faker](https://github.com/faker-js/faker#readme)                                                                                    |
| Git hooks + linting | [ESlint](https://eslint.org) + [Husky](https://github.com/typicode/husky#readme) + [lint-staged](https://github.com/okonet/lint-staged#readme) |
| Code formatting     | [Prettier](https://prettier.io)                                                                                                                |
