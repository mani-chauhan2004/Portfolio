import ContactForm from "../utilities/ContactForm";

function ContactSection() {
    return (
        <div className="grid justify-center items-center w-full grid-cols-2 grid-rows-1 px-12">
            <div>
                <p>Thanks for coming by. It was a pleasure hosting you. Need something to say? Say it in the form along with your email and I'll be in you Gmail</p>
            </div>
            <div className="relative overflow-hidden py-2 px-2 content-center bg-nav after:absolute after:rounded-xl after:inset-[-65%] after:content-[''] after:bg-gradient-to-r after:w-[230%] after:h-[230%] after:z-0 after:from-scheme-blue after:via-purple-500 after:to-scheme-white rounded-xl after:animate-spin">
                <div className="relative z-10 py-12 px-24 bg-nav rounded-xl">
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;