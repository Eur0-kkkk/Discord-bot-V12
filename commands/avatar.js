const Discord = require("discord.js");

exports.run = (client, message, args) => {
      let user = message.mentions.users.first() || message.author
      const embed = new Discord.MessageEmbed()
            .setTitle(`🖼️ ${user.tag}`)
            .setDescription(`**Clique [aqui](${user.displayAvatarURL({ size: 1024, dynamic: true })}) para baixar a imagem!**`)
            .setImage(user.displayAvatarURL({ size: 1024, dynamic: true }))
            .setColor('#8A2BE2')
            .setFooter(`Requisitado: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));
        
    message.channel.send(embed)
}
