const Discord  = require("discord.js")
const { createAudioResource, createAudioPlayer, joinVoiceChannel, VoiceConnectionStatus, AudioPlayerStatus } = require('@discordjs/voice');

class myClient extends Discord.Client {
    constructor() {

        super({ intents: [ Discord.IntentsBitField.Flags.Guilds,
                           Discord.IntentsBitField.Flags.GuildMessages,
                           Discord.IntentsBitField.Flags.GuildVoiceStates
        ]});
    }

    login(token) {
        super.login(token);
        return this;
    }

    establish_voice(sound_name) {
        console.log(sound_name);
        const channel = this.channels.cache.get("-");
        const player = createAudioPlayer();

        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
            selfDeaf: false,
            selfMute: false
        });

        connection.subscribe(player);
        const resource = createAudioResource("./tracks/" + sound_name);
        //resource.volume.setVolume(2);
        player.play(resource);
    }
}

module.exports = myClient;
