import { useState } from 'react';
import CircularText from './CircularText';
import NavIconsContainer from './NavIconsContainer';
import HamIcon from './utilities/HamIcon';
import NavOverlay from './ui/NavOverlay';
import { AnimatePresence } from 'motion/react';
import { useSelector } from 'react-redux';
import { RootStateType } from './redux/Store';
function NavBar() {
    const [isOpen, setIsOpen] = useState<true | false>(false);
    const isMobile = useSelector((state : RootStateType) => state.responsive.isMobile);
    return (
        <>
            <div className='flex z-100 items-center w-screen justify-between px-4 relative'>
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
                    isMobile={isMobile}
                    className='relative md:hidden'
                />
            </div>
            <AnimatePresence>
                {isOpen && <NavOverlay/>}
            </AnimatePresence>
        </>
    )
  }

export default NavBar;