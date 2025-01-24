"use client";

import * as React from "react";
import { useFormStatus } from "react-dom";

import { LoaderIcon } from "lucide-react";
import { type ButtonProps, Button } from "@/components/shadcn/button";

const SubmitButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} {...props}>
      {pending && (
        <LoaderIcon className="mr-2 h-4 w-4 animate-spin [animation-duration:1250ms]" />
      )}
      {children}
    </Button>
  );
};

export default SubmitButton;
