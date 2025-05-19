
import { Loader } from "lucide-react";

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

export const LoadingSpinner = ({ size = 24, className = "" }: LoadingSpinnerProps) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Loader className="animate-spin" size={size} />
    </div>
  );
};
