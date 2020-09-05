require("dotenv").config();
import { Client, TextChannel } from "discord.js";

const client = new Client();
const PREFIX = "!";

client.on("ready", () => {
  console.log(`${client.user?.tag} has logged in`);
});

const do_something = (x: number) => {
  return x ** 3;
};
// sends a dm to the new member!
client.on("guildMemberAdd", async (member) => {
  const guild = member.guild;
  const channel = guild.channels.cache.find(
    (channel) => channel.name === "general"
  ) as TextChannel;
  await channel.send(
    `Welcome ${member.user?.username}! \nMake sure to check out #rules before you post\n
    https://docs.google.com/forms/d/e/1FAIpQLSeG8PhqKS4LYcNdrEn58OFgI6jw_C0VsPC_NyNXptIQnPiCQg/viewform`
  );
  member.send("Welcome! Check out #channel");
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    if (CMD_NAME === "member" && !args.length) {
      await message.channel
        .send(
          "https://docs.google.com/forms/d/e/1FAIpQLSeG8PhqKS4LYcNdrEn58OFgI6jw_C0VsPC_NyNXptIQnPiCQg/viewform"
        )
        .catch((error) => message.channel.send(error));
    }

    if (CMD_NAME === "secret" && !args.length) {
      await message.channel
        .send("ssshhhh!!! It's a secret (:")
        .catch((error) => message.channel.send(error));
    }

    if (CMD_NAME === "num" && args.length === 1) {
      await message.channel
        .send(`${args[0]} cubed is: ${do_something(+args[0])}`)
        .catch((error) => message.channel.send(error));
    }
  }
});

client.login(process.env.DISCORDTS_BOT_TOKEN);
