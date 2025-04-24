import { motion } from 'motion/react';
type StaggeredTextFlipTextProps = {
    word: string;
    duration?: number;
    stagger?: number;
    className?: string;
}
function StaggeredTextFlip({ word, duration=0.1, stagger=0.065, className="" }: StaggeredTextFlipTextProps) {
    
    return (
        <motion.div
            className={` cursor-default relative overflow-y-hidden font-black text-scheme-white font-orbitron whitespace-nowrap uppercase ${ className }`}
            initial="initial"
            whileHover="hovered"
        >
            <div>
            {
                word.split('').map((char: string, index: number) => (
                    <motion.span
                        key={index}
                        className='inline-block'
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            }
                        }}
                        transition={{ duration, delay: stagger * index }}
                    >
                        {char}
                    </motion.span>
                ))
            }
            </div>
            <div className='absolute inset-0'>
            {
                word.split('').map((char: string, index: number) => (
                    <motion.span
                        key={index}
                        className='inline-block'
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            }
                        }}
                        transition={{ duration, delay: stagger * index }}
                    >
                        {char}
                    </motion.span>
                ))
            }
            </div>
        </motion.div>
    )
}

export default StaggeredTextFlip;