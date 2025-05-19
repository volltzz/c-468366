
import { motion } from "framer-motion";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { LoadingSpinner } from "../ui/LoadingSpinner";

interface FeatureContentProps {
  image: string;
  title: string;
}

export const FeatureContent = ({ image, title }: FeatureContentProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex items-center justify-center"
    >
      <div className="glass rounded-xl overflow-hidden w-full relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <LoadingSpinner size={32} className="text-primary" />
          </div>
        )}
        
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-contain relative z-10 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </motion.div>
  );
};
