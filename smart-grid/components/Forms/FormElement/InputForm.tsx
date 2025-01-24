import * as React from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

import { Input } from "@/components/shadcn/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/shadcn/form";

interface InputFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> {
  form: UseFormReturn<TFieldValues>;
  name: TName;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

const InputForm = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  form,
  name,
  label = name,
  placeholder,
}: InputFormProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={form.control as Control<TFieldValues>}
      name={name}
      render={({ field }) => (
        <FormItem className="grid grid-cols-[90px,1fr] items-center gap-4 space-y-0">
          <FormLabel className="capitalize">{label}</FormLabel>
          <FormControl>
            <div className="flex w-full items-center gap-2">
              <span>:</span>
              <Input placeholder={placeholder} {...field} />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default InputForm;
