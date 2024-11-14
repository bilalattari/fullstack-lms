import { getAdmissions } from "@/actions/admissions";
import CourseSection from "@/components/CourseSection/CourseSection";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import { auth } from "../../auth";

export default async function Home() {
  const { admissions } = await getAdmissions("open");
  const session = await auth();
  return (
    <div>
      <HeroSection />
      <CourseSection session={session} admissions={admissions} />
    </div>
  );
}
