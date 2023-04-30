import { ControlledForm } from "@/features/authentication/controlled-form";

export default function SignUp() {
  return (
    <div className="centered-container">
      <ControlledForm
        fetchURL="https://nnd-backend.up.railway.app/users"
        buttonText="Sign Up"
        title="Create a new account"
      ></ControlledForm>
    </div>
  );
}
