// import StaggeredText from "./StaggeringText";

function HeroName() {
  return (
    <div className="cursor-default flex items-center justify-center flex-col md:flex-row">
        <div className="relative w-[100vw] h-[60vh] md:h-[120vh] md:w-[40vw] overflow-y-scroll">
            <div className="absolute inset-0 bg-[#0d0d0d]/70 flex items-center justify-center flex-col">
                {/* <StaggeredText words={["Resolver", "Creative", "Awesome"]}/> */}
                <div className="pl-12">
                    <h1 className="mb-16 text-5xl font-orbitron">.portfolio</h1>
                    <h2 className="text-6xl text-blue-600 font-orbitron">Hi There!</h2>
                    <p className="mt-4 text-white text-4xl font-orbitron">I'm <span className="text-blue-600">Manaswee Chauhan</span></p>
                    <p className="mt-4 text-white text-3xl font-orbitron">I have a passion for learning and love for the world of Logics and Pixels. I'm currently enrolled as a B.Tech student in branch CSE.</p>
                    <p className="mt-4 text-white text-3xl font-orbitron">This is my journey. <span className="text-blue-600">Hop in</span></p>
                </div>
            </div>
        </div>
        <div className=' flex relative w-[100vw] h-[80vh] sm:h-[120vh] items-center gap-38 flex-col p-12 bg-[url("/IMG/hero_image.png")] bg-right bg-contain bg-no-repeat md:bg-cover md:bg-top md:w-[60vw]' id="Home">
            <div className=" absolute inset-0 bg-linear-to-b from-[#0d0d0d]/60 from-60% to-[#0d0d0d]/100"></div>
        </div>
    </div>
  )
}

export default HeroName;