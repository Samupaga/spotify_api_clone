const Track = require('../models/Track');

const showMessage = (req, res) => {
    try {
        const tracks = Track.showTracks([]);
        res.send(`Welcome to Spotify! There are currently ${tracks.length} tracks to listen to.`)
    } catch(e){
        res.status(500).send({error: `Something went wrong on server side`})
    }

};

module.exports = { showMessage };
