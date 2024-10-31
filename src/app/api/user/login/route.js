import { connectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  await connectDB();
  const obj = await request.json();

  const user = await UserModal.findOne({ email: obj.email });
  if (!user)
    return Response.json(
      { error: true, msg: "User Not Found" },
      {
        status: 404,
      }
    );

  const isPasswordMatch = await bcrypt.compare(obj.password, user.password);

  if (!isPasswordMatch)
    return Response.json(
      { error: true, msg: "Password is not valid" },
      {
        status: 400,
      }
    );

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_KEY
  );

  return Response.json(
    {
      error: false,
      msg: "User Login Successfully",
      user,
      token,
    },
    { status: 200 }
  );
}
