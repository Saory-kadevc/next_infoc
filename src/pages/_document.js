import { Html, Head, Main, NextScript } from "next/document";
import Menu from "./componentes/menu";
import Footer from "./componentes/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Menu />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
