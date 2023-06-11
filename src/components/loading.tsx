import Image from "next/image";

export const Loading = () => {
  return (
    <div className="loading">
      <Image
        src="/loading.gif"
        alt="Loading gif"
        height={210}
        width={500}
      ></Image>
    </div>
  );
};
