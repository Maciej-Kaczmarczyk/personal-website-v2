import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className=" overflow-x-clip" lang="en">
      <Head />
      <body className="overflow-x-clip overflow-y-hidden">
        <Main />
        <NextScript />
        <div className="noise top-0 z-20"></div>
      </body>
    </Html>
  );
}
