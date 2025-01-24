"use server";

import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
import { getDoc, doc } from "firebase/firestore";

import { firestore } from "@/lib/firebase/database";
import { userSchema } from "@/lib/schema";

export async function login(_: { message: string }, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (!username || !password) {
    console.log("There is neither username nor password!");
    return { message: "Invalid credential." };
  }

  try {
    const snap = await getDoc(doc(firestore, "users", String(username)));
    if (!snap.exists()) return { message: "Invalid credential." };

    const user = { id: snap.id, ...snap.data() };
    const parsed = userSchema.parse(user);

    if (username === parsed.id && password === parsed.password) {
      redirect("/dashboard/home");
    }

    return { message: "Invalid credential." };
  } catch (error: unknown) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (error instanceof Error) {
      console.log(error.message);
    }

    return { message: "Invalid credential." };
  }
}
