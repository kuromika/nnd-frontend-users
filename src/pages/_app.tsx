import { AuthGuard } from "@/components/auth-guard";
import { Loading } from "@/components/loading";
import { AuthProvider } from "@/contexts/auth-context";
import { Layout } from "@/layouts/layout";
import "@/styles/globals.css";
import { NextComponentType } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type CustomAppProps = AppProps & {
  Component: NextComponentType & { blockAuth?: boolean };
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router]);
  return (
    <>
      {!loading ? (
        <AuthProvider>
          {Component.blockAuth ? (
            <AuthGuard>
              <Layout>
                <Component {...pageProps}></Component>
              </Layout>
            </AuthGuard>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </AuthProvider>
      ) : (
        <Layout>
          <Loading></Loading>
        </Layout>
      )}
    </>
  );
}
