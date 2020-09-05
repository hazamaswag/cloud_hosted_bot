"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
const PREFIX = "!";
client.on("ready", () => {
    var _a;
    console.log(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag} has logged in`);
});
const do_something = (x) => {
    return Math.pow(x, 3);
};
client.on("guildMemberAdd", (member) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const guild = member.guild;
    const channel = guild.channels.cache.find((channel) => channel.name === "general");
    yield channel.send(`Welcome ${(_a = member.user) === null || _a === void 0 ? void 0 : _a.username}! \nMake sure to check out #rules before you post\n
    https://docs.google.com/forms/d/e/1FAIpQLSeG8PhqKS4LYcNdrEn58OFgI6jw_C0VsPC_NyNXptIQnPiCQg/viewform`);
    member.send("Welcome! Check out #channel");
}));
client.on("message", (message) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.author.bot)
        return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
        if (CMD_NAME === "member" && !args.length) {
            yield message.channel
                .send("https://docs.google.com/forms/d/e/1FAIpQLSeG8PhqKS4LYcNdrEn58OFgI6jw_C0VsPC_NyNXptIQnPiCQg/viewform")
                .catch((error) => message.channel.send(error));
        }
        if (CMD_NAME === "secret" && !args.length) {
            yield message.channel
                .send("ssshhhh!!! It's a secret (:")
                .catch((error) => message.channel.send(error));
        }
        if (CMD_NAME === "num" && args.length === 1) {
            yield message.channel
                .send(`${args[0]} cubed is: ${do_something(+args[0])}`)
                .catch((error) => message.channel.send(error));
        }
    }
}));
client.login(process.env.DISCORDTS_BOT_TOKEN);
//# sourceMappingURL=bot.js.map