import getDBConnection from "../../../database/connection";

export default async function PostList() {
  const connection = await getDBConnection();
  const [posts] = await connection.query('SELECT * from text')

  console.log(posts)

  const items = posts.map(item => (
    <h1 key={item.id}>{item.textstring}</h1>
  ))

  return (
    <>
      <h1>Items:</h1>
      {items}
    </>
  )
}