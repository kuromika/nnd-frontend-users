import { AuthContext } from "@/contexts/auth-context";
import { useRouter } from "next/router";
import { PropsWithChildren, useContext, useEffect } from "react";

export function AuthGuard({ children }: PropsWithChildren) {
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (auth.isAuth()) {
      router.push("/");
    }
  }, [router, auth]);

  if (!auth.isAuth()) {
    return <>{children}</>;
  }

  return null;
}
