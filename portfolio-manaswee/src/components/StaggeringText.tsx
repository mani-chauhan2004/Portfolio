import { useEffect, useState } from "react";
type StaggeredTextProps = {
    words: string[];
    duration?: number;
}
const StaggeredText = ({ words, duration=1 }: StaggeredTextProps) => {
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
        <div>
            {duration}
            {letterMatrix}
        </div>
    );
}

export default StaggeredText;