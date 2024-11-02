import { connectDB } from "@/lib/dbConnect";
import { BatchModal } from "@/lib/modals/BatchModal";

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

  const batches = await BatchModal.find();
  return Response.json({
    error: false,
    msg: "Batched Fetched Successfully",
    batches,
  });
}
