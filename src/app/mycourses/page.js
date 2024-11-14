import { getApplications } from "@/actions/application";
import { auth } from "../../../auth";
import ApplicationCard from "@/components/ApplicationCard/ApplicationCard";
import { redirect } from "next/navigation";

export default async function MyCourses() {
  const session = await auth();
  if(!session) redirect('/')
  const { applications } = await getApplications({ user: session?.user?._id });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      <div className="space-y-6">
        {applications.map((application) => (
          <ApplicationCard key={application._id} application={application} />
        ))}
      </div>
    </div>
  );
}
