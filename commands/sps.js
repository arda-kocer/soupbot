const Discord = require('discord.js');
module.exports = {
  name: 'sps',
	description: 'Ermittelt den Spast der Stunde',
	execute(message, args) {
        console.log("sps command has been initiated.");
        if (message.guild.available) {
            let users = Array.from(message.guild.members.cache.values());
            let activeUsers= [];
            for (let i = 0; i < users.length; i++) {
                if ((users[i].presence.status === "offline")) {
                    console.log(users[i].presence.status);
                    activeUsers.push(users[i]);
                }
            }
            console.log(activeUsers.length);
            let ran = Math.round(Math.random()*(activeUsers.length-1));
            console.log(ran);
            let sp = activeUsers[ran];
            console.log(sp.displayName);

            message.channel.send("<@"+sp.id+"> ist der Spast der Stunde!");
        }
	},
};