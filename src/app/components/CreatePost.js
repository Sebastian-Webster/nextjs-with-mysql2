import { revalidatePath } from "next/cache";
import getDBConnection from "../../../database/connection";

export default async function CreatePost() {
  return (
    <form action={async (data) => {
      "use server";
      const connection = await getDBConnection();
      await connection.query('INSERT INTO text (textstring) VALUES (?)', [data.get('textstring')])
      revalidatePath('/')
    }}>
      <input type="text" name="textstring"/>
      <input type="submit"/>
    </form>
  )
}