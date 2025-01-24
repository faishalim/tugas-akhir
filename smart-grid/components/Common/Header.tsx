import type { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type HeaderProps = PropsWithChildren & { className?: string };

const Header: FC<HeaderProps> = ({ children, className }) => {
  return (
    <header className={cn("h-16 border-b bg-card px-8 shadow", className)}>
      {children}
    </header>
  );
};

export default Header;
