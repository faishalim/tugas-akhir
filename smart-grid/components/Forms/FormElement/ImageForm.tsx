import * as React from "react";
import { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import { DropzoneOptions } from "react-dropzone";
import { CloudUploadIcon, PaperclipIcon } from "lucide-react";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shadcn/form";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/shadcn/file-upload";

interface ImageFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> {
  form: UseFormReturn<TFieldValues>;
  name: TName;
  dropZoneConfig?: DropzoneOptions;
}

const ImageForm = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  form,
  name,
  dropZoneConfig = {
    maxSize: 1024 * 1024 * 4,
    multiple: false,
  },
}: ImageFormProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <FileUploader
              value={field.value ? [field.value] : []}
              onValueChange={(files) => field.onChange(files ? files[0] : [])}
              dropzoneOptions={dropZoneConfig}
              className="relative rounded-lg bg-card"
            >
              <FileInput
                id="fileInput"
                className="border-2 bg-muted/40 hover:bg-muted"
              >
                <div className="flex w-full flex-col items-center justify-center p-8">
                  <CloudUploadIcon className="h-10 w-10 text-gray-500" />
                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span>
                    &nbsp; or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF
                  </p>
                </div>
              </FileInput>
              <FileUploaderContent>
                {field.value && (
                  <FileUploaderItem index={0}>
                    <PaperclipIcon className="h-4 w-4 stroke-current" />
                    <span>{field.value.name}</span>
                  </FileUploaderItem>
                )}
              </FileUploaderContent>
            </FileUploader>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ImageForm;
