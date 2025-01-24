"use client";

import { useFormState } from "react-dom";
import type { FC } from "react";

import { UserIcon, KeyIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import SubmitButton from "@/components/Common/SubmitButton";

import { login } from "@/actions/auth";

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const [state, formAction] = useFormState(login, { message: "" });

  return (
    <Card
      className={cn(
        "w-full border-none shadow-none sm:min-w-[420px]",
        className,
      )}
    >
      <CardHeader className="gap-8 py-12 text-center">
        <CardTitle className="text-5xl font-extrabold sm:text-6xl">
          Login
        </CardTitle>
        <CardDescription className="flex flex-col text-base font-semibold">
          <span className="leading-4">Selamat Datang</span>
          <span className="leading-4">Silahkan Masukkan kredensial anda</span>
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="grid gap-4 sm:px-14">
          <div className="relative w-full">
            <Label htmlFor="username" className="sr-only">
              Username
            </Label>
            <UserIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="username"
              name="username"
              placeholder="username"
              className="w-full appearance-none border-none bg-[#cad4dd] pl-8 shadow-none placeholder:italic sm:bg-background"
            />
          </div>
          <div className="relative w-full">
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <KeyIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              placeholder="password"
              type="password"
              className="w-full appearance-none border-none bg-[#cad4dd] pl-8 shadow-none placeholder:italic sm:bg-background"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-1 pb-20 sm:px-14">
          <p className="w-full text-left text-destructive">{state?.message}</p>
          <SubmitButton
            variant="outline"
            className="w-full border-none bg-[#cad4dd] p-2 text-xl font-black uppercase hover:bg-background/80 hover:text-foreground max-sm:hover:bg-[#cad4dd]/80 sm:bg-background"
          >
            Login
          </SubmitButton>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;
