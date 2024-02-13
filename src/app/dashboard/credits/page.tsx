import CardCredit from "@/src/app/dashboard/card-credit";
import { Suspense } from "react";
import { CardCreditSkeleton } from "../../ui/skeletons";

export default function Page() {
  return (
    <main
      className=" z-0 m-0 p-0 mt-0 h-full flex-col   flex  "
      style={{ backgroundImage: `url('/bg-ds.png')` }}
    >
      <div className="w-full pt-3 mt-6 ml-9">
        <h1 className="font-bold  text-2xl text-[#262945]">Pagar crédito</h1>
      </div>
      <div className="mt-6  grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <Suspense>

        <div className="flex items-center justify-center w-full h-full  ">
          <CardCredit />
        </div>
        </Suspense>
        <Suspense fallback={<CardCreditSkeleton/>}>

        <div className="flex items-center justify-start w-full h-full ">

          <CardCredit />
        </div>
        </Suspense>
      </div>
    </main>
  );
}
