require("dotenv").config()

const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

// const Discord = require("discord.js")
// const client = new Discord.Client()

client.on("ready", () => {
    console.log('lob lob lob')
})

client.on("message", msg => {
    if (msg.content == "ujju bujju") {
      msg.channel.send("❤️ the lorddd")
      msg.channel.send({files: ["https://i.pickadummy.com/600x400"]})
    }
    if (msg.content === "fuck you") {
        msg.reply("abhi nhi")
      }
    })

client.login(process.env.BOT_TOKEN)