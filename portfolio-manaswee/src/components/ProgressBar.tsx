import React from 'react'
import { motion, useScroll } from 'motion/react'; 
function ProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className={`sticky top-0 left-0 origin-left w-full bg-blue-700 h-2 z-100`}
            style={{scaleX: scrollYProgress}}
        >
        </motion.div>
    )
}

export default ProgressBar;