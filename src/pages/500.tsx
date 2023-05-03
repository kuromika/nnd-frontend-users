import Head from "next/head";
import Image from "next/image";

export default function Custom500() {
  return (
    <div className="error-container">
      <Head>
        <title>500 - Server side error</title>
      </Head>
      <h1>500 - Server side error ocurred</h1>
      <Image
        src="/summer-triangle.jpg"
        width={2048}
        height={1412}
        alt="summer triangle photo by NASA"
      ></Image>
    </div>
  );
}
