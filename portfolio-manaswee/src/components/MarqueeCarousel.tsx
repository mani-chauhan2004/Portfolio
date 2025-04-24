import { motion } from "framer-motion";

const words = "Thank you so much for coming through. I was a pleasure hosting you...";

export default function Marquee() {
  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-background-dark text-white h-20 flex items-center">
      <motion.div
        className="flex whitespace-nowrap bg-primary py-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <span className="mr-10 text-4xl font-bold">{words}</span>
        <span className="mr-10 text-4xl font-bold">{words}</span>
      </motion.div>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <span className="mr-10 text-4xl font-bold">{words}</span>
        <span className="mr-10 text-4xl font-bold">{words}</span>
      </motion.div>
    </div>
  );
}
