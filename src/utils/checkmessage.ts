import { Message } from "discord.js";
import IDs from "../data/ids";

const checkMessage = (msg: Message): boolean => {

    if(!IDs.includes(msg.author.id)) return true; 
    return false;
};

export default checkMessage;