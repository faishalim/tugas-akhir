import * as React from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

import { Textarea } from "@/components/shadcn/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/shadcn/form";

interface TextareaFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> {
  form: UseFormReturn<TFieldValues>;
  name: TName;
  label?: string;
  placeholder?: string;
}

const TextareaForm = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  form,
  name,
  label = name,
  placeholder,
}: TextareaFormProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={form.control as Control<TFieldValues>}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{label}:</FormLabel>
          <FormControl>
            <Textarea
              className="min-h-32 border-2"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default TextareaForm;
