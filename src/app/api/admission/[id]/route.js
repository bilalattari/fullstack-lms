import { connectDB } from "@/lib/dbConnect";
import { BatchModal } from "@/lib/modals/BatchModal";
import { CourseModal } from "@/lib/modals/CourseModal";
import { AdmissionModal } from "@/lib/modals/AdmissionModal";
import { ApplicationModal } from "@/lib/modals/ApplicationModal";

export async function GET(req, { params }) {
  const id = (await params).id;

  await connectDB();

  const admissions = await AdmissionModal.findOne({ _id: id })
    .populate("course", "title description")
    .populate("batch", "title")
    .lean();

  const applications = await ApplicationModal.find({
    admission: id,
  }).populate("user", "fullname email profileImg");

  return Response.json({
    error: false,
    msg: "Admission Fetched Successfully",
    admission: {
      ...admissions,
      applications,
    },
  });
}
