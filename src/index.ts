import "dotenv/config"

import {Client} from "discord.js"

const client = new Client({
    intents: ["Guilds", "GuildMessages", "MessageContent"]
})

client.login(process.env.DISCORD_TOKEN)