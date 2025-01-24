"use server";

import { revalidatePath } from "next/cache";

export async function revalidateHistory() {
  revalidatePath("/dashboard/history");
}
