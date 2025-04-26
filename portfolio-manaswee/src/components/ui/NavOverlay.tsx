import { motion } from "motion/react"
import ShinyText from "../ShinyText";
import { useLockBodyScroll } from "@uidotdev/usehooks";

type navOverlayProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function NavOverlay({setIsOpen}: navOverlayProps) {
    useLockBodyScroll();
    const overlayVariants =  {
        initial: {
            opacity: 0,
            scaleY: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        closed: {
            opacity: 1,
            scaleY: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.5
            },
        },
        opened: {
            opacity: 1,
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        }
    }

    const textContainerVariants = {
        initial: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        opened: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.5
            },
        },

        closed: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        }
    }
    return (
        <motion.div
            className="fixed top-0 w-screen h-[100vh] z-200 origin-top bg-nav shadow-2xl shadow-nav"
            variants={overlayVariants}
            initial="initial"
            animate="opened"
            exit="closed"
        >
            <motion.div 
                className=" h-full flex items-center flex-col justify-center gap-12 p-4 "
                variants={textContainerVariants}
                initial="initial"
                animate="opened"
                exit="closed"
            >
                <a onClick={() => setIsOpen(false)} className="text-7xl font-orbitron font-normal" href="#Home"><ShinyText text={"Home"} disabled={false} speed={5}></ShinyText></a>
                <a onClick={() => setIsOpen(false)} className="text-7xl font-orbitron font-normal" href="#Home"><ShinyText text={"About"} disabled={false} speed={5}></ShinyText></a>
                <a onClick={() => setIsOpen(false)} className="text-7xl font-orbitron font-normal" href="#Projects"><ShinyText text={"Projects"} disabled={false} speed={5}></ShinyText></a>
                <a onClick={() => setIsOpen(false)} className="text-7xl font-orbitron font-normal" href="#Contact"><ShinyText text={"Contact"} disabled={false} speed={5}></ShinyText></a>
            </motion.div>
        </motion.div>
    )
}

export default NavOverlay;