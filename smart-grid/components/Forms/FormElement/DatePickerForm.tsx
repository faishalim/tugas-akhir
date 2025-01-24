import * as React from "react";
import { format } from "date-fns";
import { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/shadcn/button";
import { Calendar } from "@/components/shadcn/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/shadcn/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover";

interface DatePickerFormProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> {
  form: UseFormReturn<TFieldValues>;
  name: TName;
  label?: string;
}

// TODO: format date into something like DD MMM YYYY
const DatePickerForm = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  form,
  name,
  label = name,
}: DatePickerFormProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid grid-cols-[90px,1fr] items-center gap-4 space-y-0">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <div className="flex w-full items-center gap-2">
                  <span>:</span>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-full justify-start bg-card pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="h-4 w-4 opacity-50" />
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </div>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
};

export default DatePickerForm;
