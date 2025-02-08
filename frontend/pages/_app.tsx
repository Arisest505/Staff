import "@/styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppLayout from "@/components/layout/AppLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="646719794516-st0nok6vjm8k6en4bdk8p03rlfn8ig41.apps.googleusercontent.com">
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </GoogleOAuthProvider>
  );
}
