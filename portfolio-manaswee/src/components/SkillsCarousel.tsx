import { motion } from "framer-motion";

const skills = [
  { name: "React", src: "/svgs/react-svgrepo-com.svg" },
  { name: "TypeScript", src: "/svgs/typescript-official-svgrepo-com.svg" },
  { name: "MySQL", src: "/svgs/mysql-svgrepo-com.svg" },
  { name: "Blender", src: "/svgs/blender-svgrepo-com.svg" },
  { name: "MongoDB", src: "/svgs/mongodb-svgrepo-com.svg" },
  { name: "C++", src: "/svgs/c-plus-plus-svgrepo-com.svg" },
];

const duplicated = [...skills, ...skills]; // duplicate once

type SkillsCarouselProps = {
    sign: string,
}

export default function SkillsCarousel({sign}: SkillsCarouselProps) {
  return (
    <div className="overflow-hidden w-full bg-background-dark py-8">
      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: sign === '+'? ["0%", "-50%"]: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20,
        }}
        style={{ display: 'flex' }}
      >
        {duplicated.map((skill, idx) => (
          <div key={idx} className="flex items-center justify-center w-32 h-32 shrink-0">
            <img src={skill.src} alt={skill.name} className="w-20 h-20 object-contain" />
          </div>
        ))}
        {duplicated.map((skill, idx) => (
          <div key={idx} className="flex items-center justify-center w-32 h-32 shrink-0">
            <img src={skill.src} alt={skill.name} className="w-20 h-20 object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
