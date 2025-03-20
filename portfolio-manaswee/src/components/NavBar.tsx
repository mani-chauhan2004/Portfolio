import CircularText from './CircularText';
import NavIconsContainer from './NavIconsContainer';
function NavBar() {
  return (
    <div className='flex z-100 items-center w-screen justify-between relative px-4'>
        <CircularText
            text="MANASWEE*CHAUHAN*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
        />
        <NavIconsContainer/>
        <div></div>
    </div>
  )
}

export default NavBar;