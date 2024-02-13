"use server";
import { signIn } from "@/auth";
import { sql } from "@vercel/postgres";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
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
