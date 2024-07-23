"use server";
import { signIn } from "@/auth";
import { sql } from "@vercel/postgres";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { fetchAccectaionToken } from "./data";
import { unstable_noStore as noStore } from 'next/cache';
const bcrypt = require("bcrypt");
//------------------------------ AUTH----------------------------------------------------------------
export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
//----------------------------- Sigup ----------------------------------------------------------------
const FormSchema = z.object({
  userId: z.string(),
  typeId: z.string(),
  name: z.string(),
  email: z.string(),
  user: z.string(),
  phone: z.string(),
  password: z.string(),
});

export async function createUser(formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = FormSchema.parse({
    userId: formData.get("cedula"),
    typeId: formData.get("type"),
    name: formData.get("name"),
    email: formData.get("email"),
    user: formData.get("user"),
    phone: formData.get("tel"),
    password: formData.get("password"),
  });
  const { userId, typeId, name, email, user, phone, password } =
    validatedFields;
    //prepare
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    
  // Insert data into the database
  try {
    await sql`
      INSERT INTO users (user_id, type_id, name, email,user, phone, password)
      VALUES (${userId}, ${typeId}, ${name}, ${email}, ${user}, ${phone}, ${hashedPassword})
    `;
     // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/signup");
  redirect("/login");
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

 
}
//----------------------------------page--------------------

export async  function createPseTransaction (){
const token =  await fetchAccectaionToken()
noStore();
  try {
    const res = await fetch("https://sandbox.wompi.co/v1/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer pub_test_7BnVkKljd6Va5yEJmBhsQJEbAC4VWiU8",
      },
      body: JSON.stringify({
        acceptance_token: `${token}`,
        amount_in_cents: 2500000,
        currency: "COP",
        customer_email: "henrydjpacheco@gmail.com",
        reference: "prueba13df",
        customer_data: {
          legal_id: "1023340831",
          legal_id_type: "CC",
          full_name: "pepe hongo",
          phone_number: "+573444444444",
        },
        payment_method: {
          type: "PSE",
          user_type: 0,
          user_legal_id_type: "CC",
          user_legal_id: "1023340831",
          financial_institution_code: 1,
          payment_description: "Pago a Prommosuma, ref:2322er3234ed4",
        },
      }),
    });
    const data = await res.json();
    console.log(data);
   
  } catch (error) {
    console.error("Error al crear la transacción:",error);
    throw error;
  }

};