const Discord = require('discord.js');
module.exports = {
  name: 'sps',
	description: 'Ermittelt den Spast der Stunde',
	execute(message, args) {
        console.log("sps command has been initiated.");
        if (message.guild.available) {
            let users = Array.from(message.guild.members);
            let activeNumber = 0;
            for (let i = 0; i < users.length; i++) {
                if (users[i].presence.status!="offline") {
                    activeNumber++;
                }
            }
            let activeUsers[activeNumber];
            for (let i = 0; i < activeUsers.length; i++) {
                for (let j = 0; j < users.length; j++) {
                    if (users[j].presence.status!="offline") {
                        activeUsers[i] = users[j];
                        if (i+1 < activeUsers.length) {
                            i++;
                        }
                        else {
                            break;
                        }
                        continue;
                    }
                }
            }
            let ran = Math.round(Math.random()*(activeUsers.length-1));
            let sp = activeUsers[ran];

            message.channel.send(sp.nickname+" ist der Spast der Stunde!");
        }
	},
};