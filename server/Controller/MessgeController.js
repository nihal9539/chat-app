
import MessageModel from "../model/MessageModel.js"

export const addMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body;
    const message = new MessageModel({
        chatId,
        text,
        senderId
    })
    try {
        console.log(message);
        const result = await message.save();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
        throw error

    }
}
export const getmessage = async (req, res) => {
    const { chatId } = req.params;
    console.log(chatId);
    try {

        const result = await MessageModel.find({
            chatId
        })

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
        throw error

    }
}