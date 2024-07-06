import { cookies } from "next/headers";
import MyButton from "./components/myButton";

export default function Home() {

  const cookieStore = cookies()
  const cookie = cookieStore.get("username")
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>{cookie?.name} = {cookie?.value}</p>
      <h1 className="font-bold text-xl">Cookie List</h1>
      <h2>isThemeExist {cookieStore.has("theme") ? "yes" : "no"}</h2>

      <MyButton />
      <ul>
        {
          cookieStore.getAll().map((cookie, index) => {
            return <li key={index}>{cookie.value}</li>
          })
        }

      </ul>
    </main>
  );
}
