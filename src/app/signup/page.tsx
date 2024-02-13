import Image from "next/image";
import SignForm from "./sign-form";

export default function Page() {
  return (
    <main className=" m-0 p-0 mt-0 h-full w-full flex flex-wrap min-h-5/6 justify-between  bg-[#fff] w-full">
      <div className="flex w-1/2 h-full   justify-center ">
        <SignForm />
      </div>

      <div className="flex items-start w-1/2  h-full ">
        <Image
          src="/foto-sign.png"
          width={480}
          height={440}
          className="z-1  flex   items-end    "
          alt="Screenshots of the dashboard project showing desktop version"
          priority
        />
      </div>
    </main>
  );
}
