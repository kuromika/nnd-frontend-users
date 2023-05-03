import Image from "next/image";

export const Loading = () => {
  return (
    <div className="loading">
      <Image
        src="/loading.gif"
        alt="Nadeko from Monogatari"
        height={210}
        width={500}
      ></Image>
      <h1>Loading</h1>
    </div>
  );
};
