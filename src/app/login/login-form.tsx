"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/src/app/lib/actions";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch} className="flex  space-y-3 ">
      <div className="flex-1 rounded-lg bg-[#fff] px-6 pb-4 pt-8">
        <h1 className={`items-start font-bold text-4xl mb-3  text-[#262945]`}>
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
                className={`font-medium text-[#262945] peer block h-14 w-full mb-4 border border-[#262945] py-[9px] pl-10 text-sm outline-2 placeholder:text-[#262945] border-l-0 border-r-0 border-t-0`}
                id="email"
                type="email"
                name="email"
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
                <Link href="" className="ml-2  text-sm text-[#00A9BB]">
                  recupérala
                </Link>
              </p>
              <div className="mt-3 mb-3 flex justify-center w-full">
                <LoginButton />
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
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Add form errors here */}
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      className={`mt-3 font-medium  w-full bg-[#262945] px-[65px] py-[9px] rounded-3xl outline-2 `}
      type="submit"
    >
      Ingresar
    </button>
  );
}
