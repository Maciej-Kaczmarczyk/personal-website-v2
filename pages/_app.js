import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";



export default function App({ Component, pageProps }) {


  return (

      <Component {...pageProps} />
  );
}
