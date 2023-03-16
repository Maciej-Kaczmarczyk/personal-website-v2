import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";



export default function App({ Component, pageProps }) {

  const {systemTheme , theme, setTheme} = useTheme ();
  setTheme('light');

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
