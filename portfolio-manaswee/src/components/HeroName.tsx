

function HeroName() {
  return (
    <div className=" flex items-center justify-center">
        <div className="relative h-[140vh] w-[30vw]">
            <div className=" absolute inset-0 bg-[#0d0d0d]/70">

            </div>
        </div>
        <div className='relative w-[70vw] h-[140vh] flex items-center gap-38 flex-col p-12 bg-[url("/IMG/hero_image.png")] bg-top bg-cover bg-no-repeat' id="Home">
            <div className=" absolute inset-0 bg-[#0d0d0d]/70"></div>
        </div>
    </div>
  )
}

export default HeroName;