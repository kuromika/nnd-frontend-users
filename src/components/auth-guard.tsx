import { AuthContext } from "@/contexts/auth-context";
import { useRouter } from "next/router";
import { PropsWithChildren, useContext, useEffect } from "react";

export function AuthGuard({ children }: PropsWithChildren) {
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (auth.isAuth() && !router.query.from) {
      console.log("a");
      router.push("/");
    }
  }, [router, auth]);

  if (!auth.isAuth()) {
    console.log("b");
    return <>{children}</>;
  }
  return null;
}
