
function ContactForm() {
    return (
        <form className="z-100 bg-background-dark w-full rounded-2xl flex gap-5 flex-col py-12 px-8 items-center justify-center shadow-2xl shadow-scheme-blue">
            <div className='name relative w-full'>
                <input className='peer focus:border-scheme-blue py-2 px-3 w-full rounded-xl outline-0 border-2 border-scheme-white' type="text" name='name' id='name' />
                <label className='peer-focus:-top-3 peer-focus:text-scheme-blue peer-focus:left-4 duration-400 bg-background-dark px-2 left-3 top-2 font-orbitron absolute' htmlFor="name">Name</label>
            </div>
            <div className='email relative w-full'>
                <input className='peer py-2 px-3 w-full rounded-xl outline-0 border-2 border-scheme-white' type="text" name='email' id='email' />
                <label className='peer-focus:-top-3 peer-focus:text-scheme-blue peer-focus:left-4 duration-400 bg-background-dark px-2 left-3 top-2 font-orbitron absolute' htmlFor="email">Email</label>
            </div>
            <div className='message relative w-full'>
                <textarea className='peer py-2 px-3 w-full rounded-xl outline-0 border-2 h-52 border-scheme-white text-top' name='message' id='message' />
                <label className='peer-focus:-top-3 peer-focus:text-scheme-blue peer-focus:left-4 duration-400 bg-background-dark px-2 left-3 top-2 font-orbitron absolute' htmlFor="message">Message</label>
            </div>
        </form>
    )
}

export default ContactForm;