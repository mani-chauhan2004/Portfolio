import ShinyText from "./ShinyText";

function NavIconsContainer() {
  return (
    <div className="flex absolute left-1/4 bg-[#1e1e1e74] w-6/12 items-center justify-around p-4 rounded-xl">
        <a className="text-2xl font-orbitron font-normal" href="#Home"><ShinyText text={"Home"} disabled={false} speed={5}></ShinyText></a>
        <a className="text-2xl font-orbitron font-normal" href="#"><ShinyText text={"About"} disabled={false} speed={5}></ShinyText></a>
        <a className="text-2xl font-orbitron font-normal" href="#"><ShinyText text={"Projects"} disabled={false} speed={5}></ShinyText></a>
        <a className="text-2xl font-orbitron font-normal" href="#"><ShinyText text={"Contact"} disabled={false} speed={5}></ShinyText></a>
    </div>
  )
}

export default NavIconsContainer;