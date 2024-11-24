import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureTabProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
  isActive: boolean;
}

export const FeatureTab = ({ icon, title, description, isActive }: FeatureTabProps) => {
  return (
    <div className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${isActive ? 'glass' : 'hover:glass-hover'}`}>
      <div className="p-2 rounded-lg glass flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div className="text-left min-w-0">
        <h3 className="font-semibold truncate">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </div>
  );
};