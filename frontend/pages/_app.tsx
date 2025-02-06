import "@/styles/global.css"; // Solo importa estilos globales
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
