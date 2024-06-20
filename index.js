const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating Short ID for" + url,
    });
  }
  message.reply({
    content: "Hi from Bot!! 😁",
  });
});

client.on("interactionCreate", (interaction) => {
  interaction.reply({
    content: "Pong!!",
  });
});

client.login(
  "MTE3OTc5OTgyOTYxNDk1NjYyNg.GDGpgp.3ltZ_t2D2imECaNtCjcX3H_NDZK44u-1Nf-OGY"
);
