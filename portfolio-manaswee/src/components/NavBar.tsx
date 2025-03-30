import { useState } from 'react';
import CircularText from './CircularText';
import NavIconsContainer from './NavIconsContainer';
// import { RxHamburgerMenu } from "react-icons/rx";
import HamIcon from './utilities/HamIcon';
import NavOverlay from './ui/NavOverlay';
import { AnimatePresence } from 'motion/react';
function NavBar() {
    const [isOpen, setIsOpen] = useState<true | false>(false);
    return (
        <>
            <div className='flex z-100 items-center w-screen justify-between relative px-4'>
                <CircularText
                    text="MANASWEE*CHAUHAN*"
                    onHover="speedUp"
                    spinDuration={20}
                    className=""
                />
                <NavIconsContainer/>
                <HamIcon
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </div>
            <AnimatePresence>
                {isOpen && <NavOverlay/>}
            </AnimatePresence>
        </>
    )
  }

export default NavBar;