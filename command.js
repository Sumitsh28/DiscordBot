const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "Creates a short URL",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTE3OTc5OTgyOTYxNDk1NjYyNg.GDGpgp.3ltZ_t2D2imECaNtCjcX3H_NDZK44u-1Nf-OGY"
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1179799829614956626"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
