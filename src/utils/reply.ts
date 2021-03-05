import { Client, Message } from "discord.js";
import { trigger as triggers, reply as replies, other } from "../data/stuff";

const reply = (msg : Message, bot: Client) => {
    const answer = stuff(msg.content);
    msg.channel.send(answer);
}

const stuff = (content: string): string => {
    const stuffs = Object.entries(triggers);
    const moreStuffs = Object.entries(replies);

    const e = content.replace(/[^\w\s]/g, '').trim();

    for(const [trigger, response] of stuffs) {
        for(const [rTrigger, rResponse] of moreStuffs) {
            if(response.includes(e.toLowerCase())) {
                if(trigger == rTrigger) {
                    return rResponse[random(rResponse.length)];
                }
            }
        }
    }

    return other[random(other.length)];
}

const random = (length: number) => {
    return Math.floor(Math.random() * length);
}

export default reply;