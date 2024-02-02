import Link from "next/link";
import Accordeon from "./accordeon";
import ContactUs from "./contactUs";

export default function Page() {
  return (
    <main className=" text-[#262945] m-0 p-0 mt-0 h-full w-full">
      <div className="mt-6  grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex justify-end h-full w-full   ">
        <Accordeon />
        </div>
        <div className="flex  justify-start h-48 w-5/6  ">
        <ContactUs/>
        </div>
      </div>
    </main>
  );
}
