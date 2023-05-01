import { AuthGuard } from "@/components/auth-guard";
import { AuthProvider } from "@/contexts/auth-context";
import { Layout } from "@/layouts/layout";
import "@/styles/globals.css";
import { NextComponentType } from "next";
import type { AppProps } from "next/app";

export type CustomAppProps = AppProps & {
  Component: NextComponentType & { blockAuth?: boolean };
};

export default function App({ Component, pageProps }: CustomAppProps) {
  return (
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
  );
}
