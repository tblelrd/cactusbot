import { Message, User } from "discord.js";
import { responses, triggers } from '../data/normalStuff';


const reply = (msg: Message) => {
    const answ = stuff(msg.content, msg.author);
    answ ? msg.channel.send(answ) : '';
};

const stuff = (content: string, author: User) => { 
    const stuffs = Object.entries(triggers);
    const moreStuffs = Object.entries(responses);

    const e = content.replace(/[^\w\s]/g, '').trim();

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
};

const random = (length: number) => {
    return Math.floor(Math.random() * length);
}


export default reply;