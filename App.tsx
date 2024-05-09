import Home from "./app/home";
import ThemeProvider from "./app/shared/layout/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
