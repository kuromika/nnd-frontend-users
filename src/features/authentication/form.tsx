import { ChangeEvent, FormEvent } from "react";
import styles from "./Form.module.css";

export type AuthFormProps = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (field: string, value: string) => void;
  username: string;
  password: string;
  title: string;
  buttonText: string;
  loading: boolean;
};

export const AuthForm = (props: AuthFormProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.handleChange(e.target.name, e.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <h1>{props.title}</h1>
      <div className={styles.field}>
        <label htmlFor="username">Username:* </label>
        <input
          type="text"
          id="username"
          required
          name="username"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className={styles.field}>
        <label htmlFor="password">Password:* </label>
        <input
          id="password"
          type="password"
          required
          name="password"
          onChange={handleInputChange}
        ></input>
      </div>
      <button type="submit" className={styles.submit} disabled={props.loading}>
        {props.buttonText}
      </button>
    </form>
  );
};
