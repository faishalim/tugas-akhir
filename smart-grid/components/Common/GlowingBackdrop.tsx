import type { FC } from "react";

const GlowingBackdrop: FC = () => (
  <div className="absolute -left-20 -top-20 -z-10 size-full opacity-50 md:opacity-100">
    <div className="absolute inset-0 m-auto aspect-square h-full w-full rounded-full bg-[#406187] blur-[175px] sm:h-[448px] sm:w-[503px]"></div>
  </div>
);

export default GlowingBackdrop;
