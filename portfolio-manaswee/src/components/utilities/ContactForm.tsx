import { useState } from "react";
import { sendMessage } from "../redux/features/contactFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/Store";
import { RootStateType } from "../redux/Store";

function ContactForm() {

    const dispatch = useDispatch<AppDispatch>();
    const response = useSelector((state : RootStateType) => state.contact.response);
    const error = useSelector((state : RootStateType) => state.contact.error);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleExecute = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            message,
        }

        dispatch(sendMessage(formData));
        setName('');
        setEmail('');
        setMessage('');
        return;
    }
    return (
        <form className="z-100 bg-background-dark w-full rounded-2xl flex gap-5 flex-col py-12 px-8 items-center justify-center shadow-2xl shadow-scheme-blue">
            <div className='name relative w-full'>
                <input 
                    className='peer focus:border-scheme-blue py-2 px-3 w-full rounded-xl outline-0 border-2 border-scheme-white' 
                    type="text" 
                    name='name' 
                    id='name' 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label 
                    className='peer-focus:-top-3 peer-focus:text-scheme-blue peer-focus:left-4 duration-300 bg-background-dark px-2 left-3 top-2 font-orbitron absolute cursor-text' htmlFor="name"
                >
                    Name
                </label>
            </div>
            <div className='email relative w-full'>
                <input 
                    className='peer focus:border-scheme-blue py-2 px-3 w-full rounded-xl outline-0 border-2 border-scheme-white' type="text" 
                    name='email' 
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />
                <label
                    className='peer-focus:-top-3 peer-focus:text-scheme-blue peer-focus:left-4 duration-300 bg-background-dark px-2 left-3 top-2 font-orbitron absolute cursor-text' htmlFor="email"
                >
                    Email
                </label>
            </div>
            <div className='message relative w-full'>
                <textarea 
                    className='peer focus:border-scheme-blue py-2 px-3 w-full rounded-xl outline-0 border-2 h-52 border-scheme-white text-top' 
                    name='message' 
                    id='message' 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <label 
                    className='peer-focus:-top-3 peer-focus:text-scheme-blue peer-focus:left-4 duration-300 bg-background-dark px-2 left-3 top-2 font-orbitron absolute cursor-text' htmlFor="message"
                >
                    Message
                </label>
            </div>
            <div className='relative w-full'>
                <p>{response || error}</p>
            </div>
            <button 
                onClick={handleExecute} 
                className="px-8 py-3 w-full active:scale-99 duration-150 bg-scheme-blue rounded-xl font-extrabold font-orbitron cursor-pointer"
            >
                Execute
            </button>
        </form>
    )
}

export default ContactForm;