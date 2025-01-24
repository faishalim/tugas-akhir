import type { FC, PropsWithChildren } from "react";

const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="grid h-max min-h-full w-full">{children}</div>
);

export default BaseLayout;
