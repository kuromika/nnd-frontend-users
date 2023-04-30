import { AuthContext } from "@/contexts/auth-context";
import { ControlledForm } from "@/features/authentication/controlled-form";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Login() {
  const auth = useContext(AuthContext);
  const router = useRouter();

  const handleSuccess = async (response: Response) => {
    const data = await response.json();
    auth.setAuth(data.token);
    setTimeout(() => {
      router.push("/");
    }, 1500);
    return;
  };

  return (
    <div className="centered-container">
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
