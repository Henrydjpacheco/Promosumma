import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <main className=" m-0 p-0 mt-0 h-full w-full flex flex-wrap min-h-5/6 flex-col items-end justify-between  bg-[#fff] ">
      <div className="flex w-1/2  items-center justify-center ">
        <form className="flex  w-8/12  space-y-3">
          <div className="flex-1 rounded-lg bg-[#fff] px-6 pb-4 pt-8">
            <h1
              className={`items-start font-bold text-4xl mb-3  text-[#262945]`}
            >
              ¡Nos alegra <br /> verte de nuevo!
            </h1>
            <div className="w-full">
              <p className={`text-sm font-medium text-[#486284]`}>
                {" "}
                Ingresa con tu cuenta para continuar
              </p>
              <div>
                <div className="relative">
                  <input
                    className={`font-medium peer block h-14 w-full mb-4 border border-[#262945] py-[9px] pl-10 text-sm outline-2 placeholder:text-[#262945] border-l-0 border-r-0 border-t-0`}
                    id="user"
                    type="text"
                    name="user"
                    placeholder="Usuario"
                    required
                  />

                  {/*  <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                </div>
              </div>
              <div className="mt-3 mb-3">
                <div className="relative">
                  <input
                    className={` font-medium peer block h-14 w-full  mb-3 border border-[#262945] py-[9px] pl-10 text-sm outline-2 text-[#262945] placeholder:text-[#262945] border-l-0 border-r-0 border-t-0`}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    required
                    minLength={6}
                  />

                  <p
                    className={`mt-3 text-sm font-medium flex justify-end ml-3 text-[#262945]`}
                  >
                    ¿Olvidaste la contraseña?
                    <Link  href=""  className="ml-2  text-sm text-[#00A9BB]">recupérala</Link>
                  </p>
                  <div className="mt-3 mb-3 flex justify-center w-full">
                    <button
                      className={`mt-3 font-medium  w-full bg-[#262945] px-[65px] py-[9px] rounded-3xl outline-2 `}
                      type="submit"
                    >
                      Ingresar
                    </button>
                  </div>
                  <p
                    className={`my-3 text-sm flex justify-start font-medium ml-3 text-[#262945]`}
                  >
                    ¿No tienes una cuenta?
                    <Link href="/signup" className=" text-sm ml-1 text-[#00A9BB]">
                      {" "}
                      Regístrate
                    </Link>{" "}
                  </p>

                  {/*  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                </div>
              </div>
            </div>
            {/* <LoginButton /> */}
            <div className="flex h-8 items-end space-x-1">
              {/* Add form errors here */}
            </div>
          </div>
        </form>
      </div>

      <div className="flex items-start w-1/2  h-full ">
        
     
      <Image
            src="/foto-login.png"
            width={480}
            height={440}
            className="z-1  flex   items-end    "
            alt="Screenshots of the dashboard project showing desktop version"
          />
      </div>
    </main>
  );
}

/* function LoginButton() {
return (
  <Button className="mt-4 w-full">
   Regisrearme
  </Button>
); */
