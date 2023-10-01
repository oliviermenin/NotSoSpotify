import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import '../css/style.css';

function AlbumArtist() {
    const [albumArtist, setalbumArtist] = useState([]);
    let { id } = useParams();
    const [trackList, setTrackList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/albums/artist/${id}`)
            .then(response => {
                setalbumArtist(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8000/tracks/${id}`)
            .then(response => {
                console.log(response.data);
                const trackData = Array.isArray(response.data) ? response.data : [response.data];
                setTrackList(trackData);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    
    
    return (
        <div className="">
            <h1>Liste de tout les albums</h1>
            {albumArtist.map(album_artist =>
                <div className="artist">
                    <p>Nom de l'album : {album_artist.name}</p>
                    <img src={album_artist.cover} alt="album" />
                </div>
            )}
            {trackList.map(song =>
                <audio controls key={song.id}>
                    <source src={song.mp3} type="audio/mpeg" />
                </audio>
            )}
        </div>
    );
}

export default AlbumArtist;