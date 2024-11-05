import { connectDB } from "@/lib/dbConnect";
import { CourseModal } from "@/lib/modals/CourseModal";

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let newCourse = new CourseModal({ ...obj });
  newCourse = await newCourse.save();

  return Response.json({
    error: false,
    msg: "Course Added Successfully",
    course: newCourse,
  });
}

export async function GET() {
  await connectDB();

  const courses = await CourseModal.find();
  return Response.json({
    error: false,
    msg: "Course Fetched Successfully",
    courses: courses,
  });
}
