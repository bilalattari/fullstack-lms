"use server";

import { revalidatePath } from "next/cache";

export async function getAdmissions(status = null) {
  console.log("status=>", status);
  let admissions = await fetch(
    `${process.env.BASE_URL}api/admission?status=${status}`,
    {
      cache: "no-cache",
    }
  );
  admissions = await admissions.json();
  return admissions;
}

export async function addAdmission(formData) {
  const obj = {
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    course: formData.get("course"),
    batch: formData.get("batch"),
  };
  console.log("Obj=>", obj);

  const batch = await fetch(`${process.env.BASE_URL}api/admission`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (batch.ok) {
    revalidatePath("/admin/batches");
  }
}

export async function updateAdmission(id, status) {
  const batch = await fetch(`${process.env.BASE_URL}api/admission`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      status,
    }),
  });
  if (batch.ok) {
    revalidatePath("/admin/batches");
  }
}
