client.player

    .on('channelEmpty',  (queue: any) =>
        console.log(`Everyone left the Voice Channel, queue ended.`))

    .on('songAdd',  (queue: any, song: any, message: any) =>

    console.log(`Song ${song} was added to the queue.`))

    .on('playlistAdd',  (queue: any, playlist: any, message: any) =>
        console.log(`Playlist ${playlist} with ${playlist.songs.length} was added to the queue.`))

    .on('queueDestroyed',  (queue: any) =>
        console.log(`The queue was destroyed.`))

    .on('queueEnd',  (queue: any) =>
        console.log(`The queue has ended.`))

    .on('songChanged', (queue: any, newSong: any, oldSong: any) =>
        console.log(`${newSong} is now playing.`))

    .on('songFirst',  (queue: any, song: any) =>
        console.log(`Started playing ${song}.`))

    .on('clientDisconnect', (queue: any) =>
        console.log(`I was kicked from the Voice Channel, queue ended.`))

    .on('clientUndeafen', (queue: any) =>
        console.log(`I got undefeanded.`))

    .on('error', (error: any, queue: any) => {
        console.log(`Error: ${error} in ${queue.guild.name}`);
    });


