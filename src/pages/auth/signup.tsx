import { ControlledForm } from "@/features/authentication/controlled-form";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const handleSuccess = () => {
    setTimeout(() => {
      router.push("/auth/login");
    }, 1500);
    return;
  };

  return (
    <div className="centered-container">
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
