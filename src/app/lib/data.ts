import { sql } from "@vercel/postgres";
import { User } from "./definitions";

export async function fetchUsers() {
  try {
    const data = await sql<User>`
        SELECT
          id,
          type_id,
          name,
          email,
          password
        FROM users
        ORDER BY name ASC
      `;

    const users = data.rows;
    return users;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all users.");
  }
}

export async function fetchAccectaionToken(){
  const res = await fetch("https://sandbox.wompi.co/v1/merchants/pub_test_7BnVkKljd6Va5yEJmBhsQJEbAC4VWiU8", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
 return data.data.presigned_acceptance.acceptance_token
}

export async function fetchLink(reference: any){
  const res = await fetch(`https://sandbox.wompi.co/v1/transactions/${reference}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
 console.log(data)
}