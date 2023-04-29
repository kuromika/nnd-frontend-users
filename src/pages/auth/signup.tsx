import { AuthForm } from "@/features/authentication/form";
import { FormEvent, useState } from "react";

export type credentials = {
  username: string;
  password: string;
};

export default function SignUp() {
  const [input, setInput] = useState<credentials>({
    username: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setInput((prev) => {
      return { ...prev, [field]: value };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <AuthForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        username={input.username}
        password={input.password}
      ></AuthForm>
    </div>
  );
}
