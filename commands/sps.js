const Discord = require('discord.js');
module.exports = {
  name: 'sps',
	description: 'Ermittelt den Spast der Stunde',
	execute(message, args) {
        console.log("sps command has been initiated.");
        if (message.guild.available) {
            let users = Array.from(message.guild.members.cache.values());
            let ran = Math.round(Math.random()*(users.length-1));
            let sp = users[ran];
            message.channel.send("<@"+sp.id+"> ist der Spast der Stunde!");
        }
	},
};