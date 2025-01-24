"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  doc,
  addDoc,
  updateDoc,
  collection,
  Timestamp,
} from "firebase/firestore";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { LoaderCircleIcon } from "lucide-react";

import { Button } from "@/components/shadcn/button";
import { Form } from "@/components/shadcn/form";
import ImageForm from "./FormElement/ImageForm";
import InputForm from "./FormElement/InputForm";
import TextareaForm from "./FormElement/TextareaForm";

import { revalidateHistory } from "@/actions/revalidateHistory";

import type { RepairHistory } from "@/types";
import { repairHistorySchema } from "@/lib/schema";
import { firestore } from "@/lib/firebase/database";
import { uploadFiles } from "@/lib/uploadthing";

import { formatKebabCase } from "@/lib/utils";

// TODO: allow only image to be uploaded!
const formSchema = z.object({
  image: z
    .instanceof(File)
    .optional()
    .refine((file) => file instanceof File, {
      message: "Please upload a valid image file.",
    }),
  brand: z.string().min(1),
  type: z.string().min(1),
  area: z.string().min(1),
  ampacity: z.string().min(1),
  description: z.string().min(0),
});

interface Props {
  componentId: string;
}

// TODO:
// handle file upload
// fetch data for default value
const WireChangeForm: React.FC<Props> = ({ componentId }) => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  // TODO: set the default
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brand: "",
      type: "",
      area: "",
      ampacity: "",
      description: "",
    },
  });

  // TODO:
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      const uploadedFiles = await uploadFiles("image", {
        files: [values.image],
      });

      const data: RepairHistory = {
        actionType: "replacement",
        componentRef: doc(firestore, "components", componentId),
        componentName: formatKebabCase(componentId),
        date: Timestamp.now(),
        image: {
          url: uploadedFiles[0].url,
          key: uploadedFiles[0].key,
        },
        technicalSpecification: [],
        description: values.description,
      };

      const specification: Record<string, string>[] = Object.entries(values)
        .filter(([key]) => key !== "image" && key !== "description")
        .map(([key, value]) => {
          return { [key]: String(value) };
        });
      data.technicalSpecification = specification;

      repairHistorySchema.parse(data);
      // TODO: what if one of this fail?
      await Promise.all([
        addDoc(collection(firestore, "repair-histories"), data),
        updateDoc(doc(firestore, "components", componentId), {
          properties: specification,
        }),
      ]);
      await revalidateHistory();

      router.push("./");
      toast.success("Form submitted.");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-3xl space-y-4"
      >
        <ImageForm form={form} name="image" />
        <InputForm form={form} name="brand" />
        <InputForm form={form} name="type" />
        <InputForm form={form} name="area" />
        <InputForm form={form} name="ampacity" />
        <TextareaForm form={form} name="description" />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading && (
            <div className="h-wit w-fit rounded-full p-0.5">
              <LoaderCircleIcon className="h-4 w-4 animate-spin" />
            </div>
          )}
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default WireChangeForm;
