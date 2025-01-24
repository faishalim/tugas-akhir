import { doc, setDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase/database";

export default async function seedUsers() {
  const data = {
    name: "Fais Halim",
    password: "12345",
    image: { url: "", key: "" },
    role: "user",
  };

  await setDoc(doc(firestore, "users", "faishalim"), data);

  console.log("User seed completed");
}
