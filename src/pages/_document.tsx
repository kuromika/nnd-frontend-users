import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/icon.ico" rel="shortcut icon"></link>
        <meta property="og:locale" content="en_US"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@kuromika__"></meta>
        <meta name="twitter:creator" content="@kuromika__"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
