const tracks = require('../tracks')

class Track {
    constructor(track, id){
        this.name = track.name;
        this.album = track.album;
        this.artist = track.artist;
        this.release_date = track.release_date;
        this.id = id
    }

    static showTrack(id){
        if (id > 0 && id <= tracks.length) {
            const track = tracks.find(track => track.id == id)
            if (Object.keys(track).length !== 0) {
                return new Track(track, track.id)
            } else {
                throw "Track not found."
            }
        } else {
            throw "Quote not found."
        }
        // return tracks.find(track => track.id === id)
    }

    static showTracks(arr){
        if(arr.length) {
            const tracksRequested = tracks.filter(track => arr.includes(track.id)).map((track) => new Track(track, track.id))
            return tracksRequested
        } else {
            return tracks.filter(track => Object.keys(track).length !== 0).map((track) => new Track(track, track.id))
        }
    }

    static deleteTracks(arr){
        console.log(arr.length)
        if (arr.length) {
            tracks.forEach(track => {
                if (arr.includes(track.id)) {
                    const idx = tracks.indexOf(track);
                    tracks[idx] = {};
                }
            })
        } else {
            throw "Enter track IDs to delete!"
        }
    }

    patchTrack(data){
        const track = tracks.find(track => track.id == this.id)
        Object.assign(track, data)
        return true
    }

    deleteTrack() {
        const track = tracks.find(track => track.id == this.id)
        const idx = tracks.indexOf(track)
        tracks[idx] = {};
    }

    static addTrack(data) {
        const newTrack = data;
        newTrack['id'] = tracks.length+1;
        tracks.push(newTrack); 
        return true
    }
}

module.exports = Track;
