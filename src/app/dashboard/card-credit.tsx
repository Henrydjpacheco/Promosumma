import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function CardCredit() {
  return (
    <section className=" bg-[#ffffff] h-full text-[#262945] w-5/6 rounded-3xl shadow-[0px_4px_16px_#d9d9d961]">
      <h1 className={` mx-4 my-4 text-base  mb-4 text-xl md:text-2xl`}>
        Crédito de Libre inversión
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#E6EAEF]">
        
      </div>

      <div className="mt-6  border-b border-[##E6EAEF]">
        <p className="mx-6 mt-4 flex text-base text-[#486283db] ">Total a pagar</p>
        <h1 className="mx-6 mb-3 text-2xl font-bold   ">$ 121.912</h1>
      </div>
      <div className="flex  justify-between ">
        <p className="mx-6 mt-4">Fecha límite de pago</p>{" "}
        <p className="mr-9 mt-4 text-[#767995db]">11 de novienbre de 2023</p>
      </div>
      <div className=" flex justify-between border-b border[#E6EAEF]">
        <p className="flex text-base mx-6 my-4">Pagos pendientes</p>{" "}
        <p className="flex text-base  mr-9 my-4 text-[#767995db]">2</p>
      </div>
      <div className=" flex  mx-4 items-center justify-end">
      <button className=" my-6 flex gap-1 h justify-center h-full items-center text-base rounded-3xl bg-[#262945] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#00A9BB] md:text-base">
        <span className="flex text-base">Pagar</span> <ArrowRightIcon className="w-5 md:w-6" />
      </button>
      </div>
    </section>
  );
}
