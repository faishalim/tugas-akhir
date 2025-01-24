"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { addDoc, collection, doc, Timestamp } from "firebase/firestore";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { LoaderCircleIcon } from "lucide-react";

import { Button } from "@/components/shadcn/button";
import { Form } from "@/components/shadcn/form";
import ImageForm from "./FormElement/ImageForm";
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
  description: z.string().min(1, "Description is required."),
});

interface Props {
  componentId: string;
}

const RepairForm: React.FC<Props> = ({ componentId }) => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  // TODO: change this into server action
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      const uploadedFiles = await uploadFiles("image", {
        files: [values.image],
      });

      const data: RepairHistory = {
        actionType: "repair",
        date: Timestamp.now(),
        componentName: formatKebabCase(componentId),
        componentRef: doc(firestore, "components", componentId),
        image: {
          url: uploadedFiles[0].url,
          key: uploadedFiles[0].key,
        },
        description: values.description,
      };

      // TODO: what happened if parse failed but image uploaded
      repairHistorySchema.parse(data);
      await addDoc(collection(firestore, "repair-histories"), data);
      await revalidateHistory();

      router.push("./");
      toast.success("Form submitted successfully.");
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

export default RepairForm;
