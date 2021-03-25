const Discord = require('discord.js');
module.exports = {
	name: 'ronaldo',
    description: 'CRISTIANOOOOO',
	execute(message, args) {
        let stream = "";
        const auRole = message.guild.roles.cache.find(role => role.name === "AUSOUP"); 
        console.log("ronaldo command has been initiated.");
        var audios = ["./ronaldo/alkoholfreies.mp3","./ronaldo/balljunge.mp3","./ronaldo/bock.mp3","./ronaldo/calzone.mp3","./ronaldo/hilfdagott.mp3","./ronaldo/moasda.mp3",
            "./ronaldo/nasenbaer.mp3","./ronaldo/profi.mp3","./ronaldo/ronaldo.mp3","./ronaldo/spaghetti1.mp3","./ronaldo/spaghetti2.mp3","./ronaldo/wahnsinn.mp3","./ronaldo/wind.mp3"];
        let value = Math.round(Math.random()*(audios.length-1));
        stream = audios[value];
    if (!args.length && message.member.voice.channel) {
        const voiceChannel = message.member.voice.channel;

        voiceChannel.join().then(connection => {
            const dispatcher = connection.play(stream);
            dispatcher.on('finish',() => voiceChannel.leave());
    });
    }
    else if (!args.length) {
        return message.reply('you need to be connected to a voice channel to use this command.');
    }
    else if (!(isNaN(parseInt(args[0])))) {
        if (parseInt(args[0])>=0 && parseInt(args[0]) < audios.length) {
            stream = audios[parseInt(args[0])];
            if (!args[1] && message.member.voice.channel) {
                const voiceChannel = message.member.voice.channel;

                voiceChannel.join().then(connection => {
                    const dispatcher = connection.play(stream);
                    dispatcher.on('finish',() => voiceChannel.leave());
                })
            }
            else if (message.mentions.users.size>=1 && message.mentions.members.first().voice.channel) {
                if (!auRole) {
                    return message.reply("this server has not configured 'AUSOUP'.\nPlease create this role to configure permissions for alternative usage of commands.");
                }
                else {
                    if (!message.member.roles.cache.has(auRole.id) && !message.member.permissions.has('ADMINISTRATOR')) {
                        return message.reply("you are not allowed to use this command.\nYou need to have 'AUSOUP' role assigned to execute.");
                    }
                    else {
                        const voiceChannel = message.mentions.members.first().voice.channel;
                        voiceChannel.join().then(connection => {
                        const dispatcher = connection.play(stream);
                        dispatcher.on('finish',() => voiceChannel.leave());
                        })
                    }
                    
                }
            }
            else {
                message.reply('No connection available.');
            }
        }
        else {
            return message.reply("your given number is not in accepted range.");
        }
    }
    else if (message.mentions.users.size>=1 && message.mentions.members.first().voice.channel) {
        if (!auRole) {
            return message.reply("this server has not configured 'AUSOUP'.\nPlease create this role to configure permissions for alternative usage of commands.");
        }
        else {
            if (!message.member.roles.cache.has(auRole.id) && !message.member.permissions.has('ADMINISTRATOR')) {
                return message.reply("you are not allowed to use this command.\nYou need to have 'AUSOUP' role assigned to execute.");
            }
            else {
                const voiceChannel = message.mentions.members.first().voice.channel;
                voiceChannel.join().then(connection => {
                const dispatcher = connection.play(stream);
                dispatcher.on('finish',() => voiceChannel.leave());
                })
            }
            
        }
    }
    else if (args[0] === "info") {
        message.channel.send("```0 - Alkoholfreies\n1 - Ahh Balljunge Servus\n2 - Etz hob i koan Bock mehr\n3 - Calzone\n4 - Hülf da Gott\n5 - Ahh Moasda habedere\n6 - Do schau her da Nasenbär\n7 - A weng a Profi"
        + "\n8 - Des is a Ronaldo\n9 - Spaghetti\n10 - SPAGHETTIIIIIIIIIIIIIIII\n11 - Da Wahnsinn da Ronaldo\n12 - I bin da verdammte Ronaldo```");
    }
    else {
        message.reply(`this user is currently not connected to any voice channel.`);
        }
	},
};