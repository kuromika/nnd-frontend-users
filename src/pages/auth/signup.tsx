import { DefaultHead } from "@/components/default-head";
import { ControlledForm } from "@/features/authentication/controlled-form";
import Head from "next/head";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const handleSuccess = () => {
    setTimeout(() => {
      router.push("/");
    }, 1500);
    return;
  };

  return (
    <div className="centered-container">
      <DefaultHead>
        <title>Sign up</title>
      </DefaultHead>
      <ControlledForm
        fetchURL="https://nnd-backend.up.railway.app/users"
        buttonText="Sign Up"
        title="Create a new account"
        onSuccess="User created successfully, you may log in now."
        handleSuccess={handleSuccess}
      ></ControlledForm>
    </div>
  );
}

SignUp.blockAuth = true;
