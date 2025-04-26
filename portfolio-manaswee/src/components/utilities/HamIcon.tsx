import { motion } from "motion/react";
import { useEffect } from "react";
type HamIconProps = {
    className?: string;
    isOpen: boolean;
    setIsOpen :  React.Dispatch<React.SetStateAction<boolean>>;
    isMobile: boolean;
}
function HamIcon({ className="relative", setIsOpen, isOpen, isMobile } : HamIconProps) {
    
    useEffect(() => {
        if(!isMobile) {
            setIsOpen(false);
        }
    }, [isMobile]);
    return (
        <motion.div 
            className={`h-20 w-20 rounded-full bg-nav z-20 shadow-gray-600 shadow-xs cursor-pointer ${className}`}
            onClick={() => isMobile && setIsOpen(!isOpen)}
        >
            <motion.span 
                animate={isOpen? "open" : "closed" }
                className="absolute right-4 rounded-full origin-center h-1 w-12 top-8 bg-scheme-white"
                variants={{
                    open: {
                        y: 4,
                        rotate: 135,
                        x: 1/2,
                    },
                    closed: {
                        rotate: 0
                    }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            >
            </motion.span>
            <motion.span 
                animate={isOpen? "open" : "closed"}
                className="absolute right-4 rounded-full origin-center h-1 w-12 bottom-8 bg-scheme-white"
                variants={{
                    open: {
                        y: -4,
                        x: 1/2,
                        rotate: 225,
                    },
                    closed: {
                        rotate: 0
                    }
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            >
            </motion.span>
        </motion.div>
    )
}

export default HamIcon;