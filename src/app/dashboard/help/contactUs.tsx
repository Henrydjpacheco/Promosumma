import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="  p-6 rounded-xl bg-[#ffffff]  ">
      <div className="flex font-bold">
        <h1 className="text-xl text-[#262945]">Estamos aquí </h1>
        <h1 className="text-[#00A9BB] text-xl ml-2"> para ayudarte.</h1>
      </div>
      <p className="my-3 leading-7">
        Envíanos tus preguntas y con gusto te <br />
        proporcionaremos la información que necesitas.
      </p>
      <Link className="" href={""}>
          <p className="w-2/6 rounded-xl bg-[#2FAA59] text-[#ffffff] text-center">Hablemos</p>
        </Link>
    </div>
  );
}
