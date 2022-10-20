const Track = require('../models/Track')

const showTrack = (req, res) => {
    const id = parseInt(req.params.id)

    try {
        const track = Track.showTrack(id)
        res.send(track)
    } catch (error) {
        res.status(404).send({error: error})
    }
}

const showTracks = (req, res) => {
    // Empty array will return all tracks
    let ids = [];
    console.log(req.query)
    // If there are queries (ids) - ids is an array of 
    if (req.query.ids) {
        ids = req.query.ids.split(",").map(id => parseInt(id));
    }
    
    // Try to get the tracks from the model and send
    try {
        const tracks = Track.showTracks(ids)
        res.send(tracks)
    } catch (error) {
        res.status(404).send({error: error})
    }
}

const patchTrack = (req, res) => {
    const id = req.params.id
    const data = req.body
    const track = Track.showTrack(id)
    const response = track.patchTrack(data)
    res.status(200).send("Track patched")
}

const deleteTrack = (req, res) => {
    let id = parseInt(req.params.id);
    try {
        const track = Track.showTrack(id);
        track.deleteTrack();
        res.status(200).send(`Track ${id} deleted`)
    } catch (error) {
        res.status(404).send({error: error})
    }
}

const deleteTracks = (req, res) => {
    // Empty array will return all tracks
    let ids = [];
    console.log(ids)

    // If there are queries (ids) - ids is an array of 
    if (req.query.ids) {
        ids = req.query.ids.split(",").map(id => parseInt(id));
    }

    console.log(3)

    try {
        Track.deleteTracks(ids);
        res.status(200).send("Tracks deleted")
    } catch (error) {
        res.status(400).send({error: error})
    }
}


const addTrack = (req, res) => {
    try {
        const response = Track.addTrack(req.body);
        console.log(response)
        if (response){
            res.status(201).send(`Your track has been successfully added`)
        } else {
            throw `There has been an error with your track addition`;
        }
    } catch(e) {
        res.status(500).send(`Your track has not been added`)
    }

}

module.exports = { showTrack, showTracks, addTrack, patchTrack, deleteTrack, deleteTracks };
