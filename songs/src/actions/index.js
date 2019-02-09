//Action creator

export const selectSong = (song) =>{
    //Return an action

    //must have a type propery

    // payload is optional
    return {

        type : 'SONG_SELECTED',
        payload: song

    }
};

