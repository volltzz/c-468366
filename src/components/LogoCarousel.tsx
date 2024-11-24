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
      <div className="relative flex overflow-x-hidden">
        {/* First row of logos */}
        <motion.div
          className="flex space-x-16 animate-marquee whitespace-nowrap"
          animate={{
            x: [0, -1920], // Assuming a standard width, adjust if needed
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={`row1-${i}`} className="flex space-x-16">
              {logos.map((logo, index) => (
                <motion.img
                  key={`logo1-${i}-${index}`}
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="h-8 object-contain"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ 
                    opacity: 1,
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                />
              ))}
            </div>
          ))}
        </motion.div>

        {/* Second row of logos (offset for seamless loop) */}
        <motion.div
          className="flex space-x-16 animate-marquee whitespace-nowrap absolute top-0"
          initial={{ x: 1920 }} // Start from outside the viewport
          animate={{
            x: [1920, 0], // Move to visible area
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={`row2-${i}`} className="flex space-x-16">
              {logos.map((logo, index) => (
                <motion.img
                  key={`logo2-${i}-${index}`}
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="h-8 object-contain"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ 
                    opacity: 1,
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCarousel;