import { connectDB } from "@/lib/dbConnect";
import { BatchModal } from "@/lib/modals/BatchModal";
import { CourseModal } from "@/lib/modals/CourseModal";

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let newBatch = new BatchModal({ ...obj });
  newBatch = await newBatch.save();

  return Response.json({
    error: false,
    msg: "Batch Added Successfully",
    batch: newBatch,
  });
}

export async function GET() {
  await connectDB();

  const batches = await BatchModal.find().populate("course" , "title");
  return Response.json({
    error: false,
    msg: "Batched Fetched Successfully",
    batches,
  });
}
