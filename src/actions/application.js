"use server";

import { revalidatePath } from "next/cache";

export async function getAdmissions(status = "") {
  let admissions = await fetch(
    `${process.env.BASE_URL}api/admission?status=${status}`,
    {
      cache: "no-cache",
    }
  );
  admissions = await admissions.json();
  return admissions;
}

export async function addApplication(obj) {
  console.log("Obj=>", obj);

  const batch = await fetch(`${process.env.BASE_URL}api/application`, {
    method: "POST",
    body: JSON.stringify(obj),
    cache: "no-cache",
  });
  return await batch.json();
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
    revalidatePath("/admin/admissions");
  }
}
