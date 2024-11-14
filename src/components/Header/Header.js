import Link from "next/link";
import { auth, signOut } from "../../../auth";

export default async function Header() {
  const session = await auth();
  return (
    <div className="bg-slate-50">
      <div className="flex container py-2 mx-auto justify-between items-center">
        <h1 className="font-mono">BATCH-11 LMS</h1>

        {session ? (
          <div className="flex gap-2 items-center">
            <h1>{session.user.email}</h1>

            <Link href={"/mycourses"}>My Courses</Link>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button className="border p-2" type="submit">
                Signout
              </button>
            </form>
          </div>
        ) : (
          <Link href={"/signin"}>Login</Link>
        )}
      </div>
    </div>
  );
}
