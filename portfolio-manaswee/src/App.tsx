import ProgressBar from './components/ProgressBar';
import HeroName from './components/HeroName';
import NavBar from './components/NavBar';
import StaggeredTextFlip from './components/StaggeredTextFlip';
import HiddenHam from './components/utilities/HiddenHam';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from './components/redux/Store';
import { useMediaQuery } from '@uidotdev/usehooks';
import { setIsMobile } from './components/redux/features/responsiveSlice';
import { AnimatePresence, useScroll, useMotionValueEvent } from'motion/react';
import NavOverlay from './components/ui/NavOverlay';

function App () {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    previous && setIsVisible(latest > 120 && (previous - latest) > 0);
  })
  const isMobileView = useMediaQuery("(max-width: 48rem)");
  // const isMobile = useSelector((state : RootStateType) => state.responsive.isMobile);

  useEffect(() => {
    dispatch(setIsMobile(isMobileView));
  }, [isMobileView, dispatch]);

  return (
    <div>
      <ProgressBar/>
      <div className='text-center bg-black'>Currently in development! Stay tuned for future changes...</div>
      <HiddenHam
         isVisible={isVisible}
         isActive={isActive}
         setIsActive={setIsActive}
         isMobile={true}
      />
      {
        <AnimatePresence>
          {isActive && <NavOverlay/>}
        </AnimatePresence>
      }
      <NavBar/>
      <HeroName/>
      <StaggeredTextFlip
        word={"PROJECTS"}
        className='ml-12 md:ml-8 text-7xl xs:text-8xl'
      />
      
    </div>
  )
}

export default App;
