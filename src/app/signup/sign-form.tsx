"use client";

import { createUser } from "@/src/app/lib/actions";
import { User } from "@/src/app/lib/definitions";
import Link from "next/link";
import { useFormState } from "react-dom";
import { Button } from "../ui/button";

export default function SignForm( ) {
  const initialState = { message: null, errors: {}  };

  return (
    <form action={createUser} className=" space-y-3">
      <div className="flex-1 rounded-lg bg-[#fff] px-6 pb-4 pt-8">
        <h1 className="text-4xl font-bold mb-3  text-[#262945] ">
          ¡Bienvenido!
        </h1>
        <div className="w-mid">
          <p className="text-[#486284DB]">
            Completa el formulario para crear una cuenta
          </p>
          <div>
            <div className="relative">
              <input
                className="peer block text-left w-full text-sm border border-[#262945] py-[9px] pl-10 text-sm outline-2 text-[#262945] placeholder:text-[#262945] border-l-0 border-r-0 border-t-0"
                id="name"
                type="name"
                name="name"
                placeholder="Nombre completo"
                required
              />
              <div className="flex">
                <select id="type" name="type" className="flex  w-1/8 mr-4 text-center  text-[#262945] text-sm border border-[#262945] py-[9px] pl-10 text-sm outline-2 text-[#262945] placeholder:text-[#262945] border-l-0 border-r-0 border-t-0">
                  <option value="CC">CC</option>
                  <option value="CE">CE</option>
                  <option value="TI">TI</option>
                  <option value="PP">PP</option>
                  <option value="PJ">PJ</option>
                </select>
                <input
                  className="peer block w-3/4  border border-[#262945] py-[9px] pl-10 text-sm outline-2 text-[#262945] placeholder:text-[#262945] border-l-0 border-r-0 border-t-0"
                  id="cedula"
                  type="text"
                  name="cedula"
                  placeholder="Numero"
                  required
                />
              </div>
              <input
                className="peer block w-full  border border-[#262945] py-[9px] pl-10 text-sm outline-2 text-[#262945] placeholder:text-[#262945] border-l-0 border-r-0 border-t-0"
                id="tel"
                type="text"
                name="tel"
                placeholder="Teléfono"
                required
              />
              <input
                className="peer block w-full  border border-[#262945] py-[9px] pl-10 text-sm outline-2 text-[#262945] placeholder:text-[#262945] border-l-0 border-r-0 border-t-0"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="peer block w-full  border border-[#262945] py-[9px] pl-10 text-sm outline-2 text-[#262945] placeholder:text-[#262945] border-l-0 border-r-0 border-t-0"
                id="user"
                type="text"
                name="user"
                placeholder="Usuario"
                required
              />
              {/*  <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
          <div className="mt-4">
            <div className="relative">
              <input
                className="peer block w-full  border border-[#262945] py-[9px] pl-10 text-sm outline-2 text-[#262945] placeholder:text-[#262945] border-l-0 border-r-0 border-t-0"
                id="password"
                type="password"
                name="password"
                placeholder="Contraseña"
                required
                minLength={6}
              />
              <input
                className="peer block w-full  border border-[#262945] py-[9px] pl-10 text-sm outline-2 text-[#262945] placeholder:text-[#262945] border-l-0 border-r-0 border-t-0"
                id="confirmpassword"
                type="password"
                name="confirmpassword"
                placeholder="Confirmar contraseña"
                required
                minLength={6}
              />
              <div className="flex items-end flex-row">
                <input
                  className="flex items-start"
                  id="acepto"
                  type="checkbox"
                  name="acepto"
                  required
                />
                <p className="ml-3 text-[#262945]">
                  *He leído y aceptado los
                  <Link href="" className="text-[#00A9BB]">
                    {" "}
                    Términos y condiciones{" "}
                  </Link>
                  <br /> y{" "}
                  <Link href="" className="text-[#00A9BB]">
                    {" "}
                    las politicas de privacidad
                  </Link>
                </p>
              </div>
              <Button type="submit">Registrarte</Button>
              <p className="ml-3 text-[#262945]">
                ¿Ya tienes una cuenta?
                <Link href="/login" className="text-[#00A9BB]">
                  {" "}
                  Ingresar
                </Link>{" "}
              </p>

              {/*  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        <div className="flex h-8 items-end space-x-1">
          {/* Add for   m errors here */}
        </div>
      </div>
    </form>
  );
}
