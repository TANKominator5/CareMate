// pages/_app.tsx
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { AuthProvider } from '../context/AuthContext'; // Path relative to pages/
import "../styles/globals.css"; // Correct path to your global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;