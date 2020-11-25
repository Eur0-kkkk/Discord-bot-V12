const Discord = require("discord.js");
const moment = require("moment");
const config = require("./config.json");
const client = new Discord.Client();
const db = require("quick.db");
const msa = "ping?";
const fs = require("fs");
client.fs = fs;
const request = require("request");
const { CanvasSenpai } = require("canvas-senpai");
const canva = new CanvasSenpai();

client.on("message", async message => {
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content
    .trim()
    .slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
    message.delete();
  }
});

client.on("ready", () => {
  console.log(
    `Iniando..`
  );
});
