import { useEffect, useState } from "react";
import { motion } from "motion/react";

type StaggeredTextProps = {
    words: string[];
    duration?: number;
}
const StaggeredText = ({ words }: StaggeredTextProps) => {
    const [letterMatrix, setLetterMatrix] = useState<string[][]>([]);
    let tempMatrix: string[][] = [];
    useEffect(() => {
        words.map((word) => {
                const splitLetters:string[] = word.split("");
                tempMatrix.push(splitLetters);
            }
        )
        setLetterMatrix(tempMatrix);
    },[])

    return(
        <div className="overflow-y-hidden rounded-xl px-4 py-1 bg-blue-600 h-[2.42rem]">
            {
                letterMatrix.map((letter, index) => {
                    return(
                        <motion.div 
                            className="flex items-center justify-center"
                            initial={
                                { y: 20 * index }
                            }
                            animate={
                                { y: 0 }
                            }
                            transition={{ duration: 3, delay: 3 * index }}
                        >
                            {
                                letter.map((char, i) => {
                                    return(
                                        <span className="text-3xl leading-none inline-block" key={`${i}-${index}`}>
                                            {char}
                                        </span>
                                    )
                                })
                            }
                        </motion.div>
                    )
                } )
            }
        </div>
    );
}

export default StaggeredText;