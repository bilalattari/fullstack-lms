import { getAdmissions } from "@/actions/admissions";
import { getBatches } from "@/actions/batches";
import { getCourses } from "@/actions/courses";
import { AdmissionTable } from "@/components/DataTables/AdmissionTable";
import { BatchesTable } from "@/components/DataTables/BatchTable";
import { NewAdmissionModal } from "@/components/Dialogs/AdmissionModal";
import { BatchModal } from "@/components/Dialogs/BatchModal";

export default async function Admissions() {
  const { admissions } = await getAdmissions();
  const { courses } = await getCourses();
  const { batches } = await getBatches();

  console.log("admissions=>", admissions);
  // console.log("batches=>", batches);
  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
        <h1 className="text-3xl font-bold text-center">Admissions</h1>
        <NewAdmissionModal courses={courses} batches={batches} />
      </div>

      <AdmissionTable data={admissions} />
    </div>
  );
}
