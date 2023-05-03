import { AuthContext } from "@/contexts/auth-context";
import { ControlledForm } from "@/features/authentication/controlled-form";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Login() {
  const auth = useContext(AuthContext);
  const router = useRouter();

  const handleSuccess = async (response: Response) => {
    const data = await response.json();
    auth.setAuth(data.token);
    const { from } = router.query;
    from ? router.push(decodeURIComponent(from as string)) : router.push("/");
  };

  return (
    <div className="centered-container">
      <Head>
        <title>Log in</title>
      </Head>
      <ControlledForm
        fetchURL="https://nnd-backend.up.railway.app/auth/login"
        buttonText="Log in"
        title="Welcome back!"
        onSuccess="Logged in successfully, you're being redirected..."
        handleSuccess={handleSuccess}
      ></ControlledForm>
    </div>
  );
}

Login.blockAuth = true;
