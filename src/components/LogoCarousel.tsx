import { motion } from "framer-motion";

const LogoCarousel = () => {
  const logos = [
    "/lovable-uploads/5830bd79-3511-41dc-af6c-8db32d91fc2c.png",
    "/lovable-uploads/bb50362c-6879-4868-bbc9-c6e051fd8d7d.png",
    "/lovable-uploads/1e2a48dc-059b-4919-a1ed-44685d771a32.png",
    "/lovable-uploads/bf56a0c6-48e4-49f7-b286-8e3fda9a3385.png",
    "/lovable-uploads/7cc724d4-3e14-4e7c-9e7a-8d613fde54d0.png",
  ];

  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur-sm py-12 mt-20">
      <div className="relative w-full flex justify-center">
        <motion.div
          className="flex gap-16 items-center absolute"
          initial={{ opacity: 0, x: "100%" }}
          animate={{
            opacity: 1,
            x: [0, "-100%"]
          }}
          transition={{
            opacity: { duration: 0.5 },
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }
          }}
          style={{
            width: "max-content"
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <motion.img
              key={`logo-1-${index}`}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="h-8 object-contain opacity-50 hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.5 }}
              whileHover={{ opacity: 1 }}
            />
          ))}
          {/* Second set of logos */}
          {logos.map((logo, index) => (
            <motion.img
              key={`logo-2-${index}`}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="h-8 object-contain opacity-50 hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.5 }}
              whileHover={{ opacity: 1 }}
            />
          ))}
          {/* Third set of logos */}
          {logos.map((logo, index) => (
            <motion.img
              key={`logo-3-${index}`}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="h-8 object-contain opacity-50 hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.5 }}
              whileHover={{ opacity: 1 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCarousel;