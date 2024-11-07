import { getAdmissions } from "@/actions/admissions";
import CourseSection from "@/components/CourseSection/CourseSection";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";

export default async function Home() {
  const { admissions } = await getAdmissions("open");
  console.log("admissions=>", admissions);
  return (
    <div>
      <Header />
      <HeroSection />
      <CourseSection admissions={admissions} />
    </div>
  );
}
