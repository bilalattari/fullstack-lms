import { redirect } from "next/navigation";
import { signIn, auth } from "../../../auth";

export default async function SignIn() {
  const session = await auth();
  console.log("session=>", session);
  if (session) redirect("/");

  return (
    <div className="container min-h-screen mx-auto flex flex-col gap-4 justify-center items-center">
      <form
        className="flex flex-col gap-3 shadow p-3"
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData, { redirect: false });
        }}
      >
        <input
          className="border p-2"
          required
          name="email"
          placeholder="Enter your Email"
        />
        <input
          className="border p-2"
          required
          name="password"
          placeholder="Enter your Password"
        />
        <button className="border p-1 px-2" type="submit">
          Login
        </button>
      </form>

      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button className="border p-3 px-5" type="submit">
          Continue with Google
        </button>
      </form>
    </div>
  );
}
