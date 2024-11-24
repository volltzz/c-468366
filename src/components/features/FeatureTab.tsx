import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureTabProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
  isActive: boolean;
}

export const FeatureTab = ({ title, description, isActive }: FeatureTabProps) => {
  return (
    <div 
      className={`
        w-full flex items-center gap-4 p-4 rounded-lg border 
        transition-all duration-300 relative
        ${isActive 
          ? 'glass border-primary shadow-lg shadow-primary/20' 
          : 'border-white/10 hover:glass-hover'
        }
      `}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute left-0 top-0 w-1 h-full bg-primary rounded-l-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
      <div className="text-left min-w-0">
        <h3 className={`font-semibold truncate ${isActive ? 'text-primary' : ''}`}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};