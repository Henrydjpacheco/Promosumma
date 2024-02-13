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
