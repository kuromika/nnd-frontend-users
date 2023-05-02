import { parseErrors } from "@/services/parse-errors";
import { FormEvent, useState } from "react";
import { AuthForm } from "./form";

export type credentials = {
  username: string;
  password: string;
};

export type ControlledFormProps = {
  fetchURL: string;
  title: string;
  buttonText: string;
  onSuccess: string;
  handleSuccess: (response: Response) => void;
};

export const ControlledForm = ({
  fetchURL,
  buttonText,
  title,
  onSuccess,
  handleSuccess,
}: ControlledFormProps) => {
  const [input, setInput] = useState<credentials>({
    username: "",
    password: "",
  });

  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setInput((prev) => {
      return { ...prev, [field]: value };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(fetchURL, {
      method: "POST",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(input),
    });

    if (response.ok) {
      setNotification(onSuccess);
      setTimeout(() => {
        handleSuccess(response);
      }, 1500);
      return;
    }
    const errors = await parseErrors(response);
    setNotification(errors);
    setLoading(false);
  };

  return (
    <>
      <AuthForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        username={input.username}
        password={input.password}
        title={title}
        buttonText={buttonText}
        loading={loading}
      ></AuthForm>
      {notification && <p className="notification">{notification}</p>}
    </>
  );
};
