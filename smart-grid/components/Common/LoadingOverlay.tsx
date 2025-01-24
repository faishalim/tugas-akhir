import type { FC } from "react";
import { LoaderCircle } from "lucide-react";

const LoadingOverlay: FC = () => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-card/50">
      <LoaderCircle
        className="text-priary animate-spin"
        size={60}
        strokeWidth={2.8}
      />
    </div>
  );
};

export default LoadingOverlay;
