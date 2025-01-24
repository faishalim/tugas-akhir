import { NextPage } from "next";
import Image from "next/image";

import { cn } from "@/lib/utils";
import LoginForm from "@/components/LoginForm";
import GlowingBackdrop from "@/components/Common/GlowingBackdrop";
import CenteredLayout from "@/layouts/Centered";

const LoginPage: NextPage = () => {
  return (
    <CenteredLayout className="bg-gradient-to-t from-background via-background via-30% to-primary/30 sm:from-transparent sm:via-transparent sm:to-transparent">
      <GlowingBackdrop />
      <main
        className={cn(
          "my-4 h-[calc(100svh-32px)] min-h-[580px] w-full max-w-screen-xl rounded-2xl py-6",
          "flex flex-col items-center gap-8 lg:flex-row lg:justify-around",
          "bg-card/20 shadow sm:bg-transparent sm:shadow-none",
        )}
      >
        <section className="flex flex-col items-center justify-center">
          <div className="relative aspect-[469/114] w-[calc(100vw-76px)] max-w-[380px] object-contain lg:max-w-[500px]">
            <Image alt="Smart Grid Logo" src="/logo.svg" fill />
          </div>
          <div className="-mt-2 hidden space-y-2 pl-28 font-medium lg:block">
            <p>
              Selamat Datang di Dashboard Smart
              <span className="text-[#F2DF0F]">Grid</span> Anda
            </p>
            <p className="leading-5">
              Kontrol dan pantau bangunan <br />
              <strong>mudah aman</strong> dan <strong>pintar</strong>!
            </p>
          </div>
        </section>
        <section className="flex w-full justify-center sm:w-auto">
          <LoginForm className="bg-transparent sm:bg-card" />
        </section>
      </main>
    </CenteredLayout>
  );
};

export default LoginPage;
