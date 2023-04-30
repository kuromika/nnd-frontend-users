import { AuthForm } from "@/features/authentication/form";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import styles from "@/styles/pages/SignUp.module.css";
import { parseErrors } from "@/services/parse-errors";

export type credentials = {
  username: string;
  password: string;
};

export default function SignUp() {
  const [input, setInput] = useState<credentials>({
    username: "",
    password: "",
  });

  const [notification, setNotification] = useState("");
  const router = useRouter();

  const handleChange = (field: string, value: string) => {
    setInput((prev) => {
      return { ...prev, [field]: value };
    });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("https://nnd-backend.up.railway.app/users", {
      method: "POST",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(input),
    });

    if (response.ok) {
      setNotification("User created successfully, you may log in now.");
      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
      return;
    }
    const errors = await parseErrors(response);
    setNotification(errors);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <AuthForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        username={input.username}
        password={input.password}
        title="Create a new account"
        buttonText="Sign Up"
        loading={loading}
      ></AuthForm>
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
}
