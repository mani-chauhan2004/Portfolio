import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type carouselProps = {
    words: string[]
};

export default function Carousel({words}: carouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-60 bg-background-dark text-white text-4xl font-bold">
        <div className="relative right-42 py-2 -4xl">Creative</div>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute bg-primary py-2 px-6 rounded-4xl"
        >
            {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
