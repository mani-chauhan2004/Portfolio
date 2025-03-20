
import { motion, useScroll } from 'motion/react'; 
function ProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className={`sticky top-0 left-0 origin-left w-full bg-blue-700/80 h-1 z-100`}
            style={{scaleX: scrollYProgress}}
        >
        </motion.div>
    )
}

export default ProgressBar;