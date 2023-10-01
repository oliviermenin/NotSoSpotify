import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../css/style.css';

function Artists() {
    const [artistList, setArtistList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/artists?limit=100")
            .then(response => {
                setArtistList(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    function ShowAlbumArtist(id) {
        navigate(`/album_artist/${id}`);
        console.log(id)
    }

    return (
        <div className="">
            <h1>Liste des artistes</h1>
            {artistList.map(artists =>
                <div onClick={() => ShowAlbumArtist(artists.id)} className="artist">
                    <img src={artists.photo} alt="artiste" />
                    <p className="artist-id">ID : {artists.id}</p>
                    <p className="artist-name">Nom de l'artiste : {artists.name}</p>
                    <p className="artist-bio">Biographie : {artists.bio}</p>
                </div>

            )}
        </div>
    );
}

export default Artists;
