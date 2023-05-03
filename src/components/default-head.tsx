import Head from "next/head";
import { PropsWithChildren } from "react";

export const DefaultHead = ({ children }: PropsWithChildren) => {
  return (
    <Head>
      <meta
        property="og:url"
        content={`https://natsu-no-daisankaku.vercel.app/`}
      ></meta>
      <meta property="description" content="Kuromika's blog and delusions" />
      <meta
        property="og:image"
        content="https://natsu-no-daisankaku.vercel.app/default.png"
      ></meta>
      <meta property="og:title" content="Natsu no Daisankaku"></meta>
      <meta name="og:image:alt" content="Nadeko from Monogatari"></meta>
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
      {children}
    </Head>
  );
};
