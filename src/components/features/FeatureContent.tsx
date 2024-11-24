import { motion } from "framer-motion";

interface FeatureContentProps {
  image: string;
  title: string;
}

export const FeatureContent = ({ image, title }: FeatureContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex items-center justify-center"
    >
      <div className="glass rounded-xl overflow-hidden aspect-video w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </motion.div>
  );
};