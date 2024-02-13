import Image from "next/image";
import LoginForm from "./login-form";

export default function Page() {
  return (
    <main className="flex m-0 p-0 mt-0 h-5/6 w-full  flex-wrap min-h-5/6 flex-col items-center  bg-[#fff] ">
      <div className="flex w-1/2  items-start justify-start "></div>
        <LoginForm />        
      <div className="flex items-start w-1/2  h-5/6 ">
        <Image
          src="/foto-login.png"
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
