import ShinyText from "./ShinyText";

function NavIconsContainer() {
  return (
    <div className="hidden absolute bg-[#1e1e1e74] items-center justify-around p-4 rounded-xl md:left-2/12 md:flex md:w-8/12 lg:left-1/4 lg:w-6/12">
        <a className="text-2xl font-orbitron font-normal" href="#Home"><ShinyText text={"Home"} disabled={false} speed={5}></ShinyText></a>
        <a className="text-2xl font-orbitron font-normal" href="#"><ShinyText text={"About"} disabled={false} speed={5}></ShinyText></a>
        <a className="text-2xl font-orbitron font-normal" href="#"><ShinyText text={"Projects"} disabled={false} speed={5}></ShinyText></a>
        <a className="text-2xl font-orbitron font-normal" href="#"><ShinyText text={"Contact"} disabled={false} speed={5}></ShinyText></a>
    </div>
  )
}

export default NavIconsContainer;