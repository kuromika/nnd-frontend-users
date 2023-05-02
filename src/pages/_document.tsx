import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="description"
          content="Natsu no Daisankaku, Kuromika's blog"
        />
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
