import { Client, Message, User } from "discord.js";
import { trigger as triggers, reply as replies, other } from "../data/stuff";
import random from "./random";

const reply = (msg : Message, bot: Client) => {
    const answer = stuff(msg.content, msg.author);
    msg.channel.send(answer);
};

const stuff = (content: string, author: User): string => {
    const stuffs = Object.entries(triggers);
    const moreStuffs = Object.entries(replies);

    const e = content.replace(/[^\w\s\-]/g, '').trim();

    for(const [trigger, response] of stuffs) {
        for(const [rTrigger, rResponse] of moreStuffs) {
            if(response.includes(e.toLowerCase())) {
                if(trigger == rTrigger) {
                    return rResponse[random(rResponse.length)]
                    .replace(/<user>/g, author.toString());
                }
            }
        }
    }

    return other[random(other.length)];
};

export default reply;