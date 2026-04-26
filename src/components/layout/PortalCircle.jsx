import { motion } from 'framer-motion';

const PortalCircle = () => {
  const sparks = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="relative w-[115vh] h-[115vh] max-w-[95vw] max-h-[95vw]">
        {/* Main Glowing Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 rounded-full border border-[#dfb48e1a] shadow-[0_0_120px_rgba(223,180,142,0.1)]"
        >
          {/* Animated Glow Rim */}
          <motion.div
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              duration: 25, repeat: Infinity, ease: "linear"
            }}
            className="absolute inset-0 rounded-full border-t border-l border-[#dfb48e4d]"
          />

          {/* Shimmering Secondary Rim */}
          <motion.div
            animate={{ 
              rotate: -360,
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-[2px] rounded-full border-b border-r border-[#dfb48e33]"
          />

          {/* Multiple Dynamic Sparks */}
          {sparks.map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 10 + i * 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * -2
              }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#dfb48e] shadow-[0_0_15px_#dfb48e,0_0_30px_rgba(223,180,142,0.4)]"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Core Glow */}
        <div className="absolute inset-[15%] rounded-full bg-[radial-gradient(circle,rgba(223,180,142,0.04)_0%,transparent_75%)]" />
      </div>
    </div>
  );
};

export default PortalCircle;
