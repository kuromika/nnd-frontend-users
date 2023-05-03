import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/icon.ico" rel="shortcut icon"></link>
        <meta property="description" content="Kuromika's blog and delusions" />
        <meta property="og:locale" content="en_US"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@kuromika__"></meta>
        <meta name="twitter:creator" content="@kuromika__"></meta>

        <meta property="og:title" content="Natsu no Daisankaku"></meta>
        <meta
          property="og:url"
          content={`https://natsu-no-daisankaku.vercel.app/`}
        ></meta>
        <meta
          property="og:image"
          content="https://natsu-no-daisankaku.vercel.app/default.png"
        ></meta>
        <meta name="og:image:alt" content="Nadeko from Monogatari"></meta>
        <meta property="og:type" content="article"></meta>
        <meta
          property="og:description"
          content="Kuromika's blog and delusions"
        ></meta>

        <meta name="twitter:title" content="Natsu no Daisankaku"></meta>
        <meta
          name="twitter:description"
          content="Kuromika's blog and delusions"
        ></meta>
        <meta
          name="twitter:image"
          content="https://natsu-no-daisankaku.vercel.app/default.png"
        ></meta>
        <meta name="twitter:image:alt" content="Nadeko from Monogatari"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
