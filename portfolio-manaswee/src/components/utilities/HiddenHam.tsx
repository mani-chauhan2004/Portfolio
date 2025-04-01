import HamIcon from "./HamIcon";
import { AnimatePresence, motion } from "motion/react"; 

type HiddenHamProps = {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    isVisible: boolean;
    isMobile: boolean;

}
function HiddenHam({ isVisible, isActive, setIsActive, isMobile }: HiddenHamProps) {
    return (
        <AnimatePresence>
            <motion.div
                variants={
                    {
                    hidden: { 
                        translateY: "-150%"
                    },
                    visible: {
                        translateY: 0,
                    },
                    }
                }
                initial="hidden"
                animate={isVisible? "visible": "hidden"}
                exit="hidden"
                transition={
                    {
                        duration: 0.5,
                        ease: "easeInOut",
                    }
                }
                className='fixed top-4 right-4 md:right-4 z-30'
            >
                {
                isMobile && <HamIcon
                    isOpen={isActive}
                    setIsOpen={setIsActive}
                    isMobile={true}
                />
                }
            </motion.div>
        </AnimatePresence>
    )
}

export default HiddenHam