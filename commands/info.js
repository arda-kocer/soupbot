const Discord = require('discord.js');
module.exports = {
    name: 'info',
    cooldown: 30,
	description: 'Shows information about the bot.',
	execute(message, args) {
        console.log("info command has been initiated.");
        const InfoEmbed = new Discord.MessageEmbed()
            .setColor('#da2b2b')
            .setTitle("Information")
            .setAuthor('suptower', 'https://i.imgur.com/eB4PoaU.png')
            .setThumbnail('https://i.imgur.com/r8DZh2C.png')
            .setDescription('A Discord bot provided to you by suptower.')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Documentation (not up to date)', value: 'http://bit.ly/soupbotDoc' },
            )
            .setTimestamp()
            .setFooter('Version 1.1.99 | Updated: 10th of June, 2021');

            message.channel.send(InfoEmbed);
	},
};