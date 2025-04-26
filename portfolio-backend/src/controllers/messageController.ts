import { Request, Response } from "express";
import { Message } from "../models/messageModel";
export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { name, email, message } = req.body;

        const newMessage = new Message({
            name, email, message
        });

        await newMessage.save();
        console.log(newMessage);
        res.status(200).json({ response: "Message sent successfully" });
    }catch(error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}