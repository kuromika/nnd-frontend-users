import { DefaultHead } from "@/components/default-head";
import Head from "next/head";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="error-container">
      <DefaultHead>
        <title>404 - Page not found</title>
      </DefaultHead>
      <h1>404 - Page not found</h1>
      <Image
        src="/summer-triangle.jpg"
        width={2048}
        height={1412}
        alt="summer triangle photo by NASA"
      ></Image>
    </div>
  );
}
