import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../css/style.css';

function Homepage() {
    const [genreList, setgenreList] = useState([]);
    const [idGenreAlbum, setGenreIdAlbum] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/genres")
            .then((response) => {
                setgenreList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function ShowArtists() {
        navigate("/artists");
    }
    function ShowAlbums() {
        navigate("/albums");
    }

    function SelectGenre(idGenre) {
        axios
            .get(`http://localhost:8000/genres/${idGenre}`)
            .then((response) => {
                setgenreList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleChange = (e) => {
        let id = e.target.value;
        axios
            .get(`http://localhost:8000/genres/${id}`)
            .then((response) => {
                const genres = Array.isArray(response.data)
                    ? response.data
                    : [response.data];
                setGenreIdAlbum(genres);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="Homepage">
            <h1>Mon Spotify</h1>
            <div className="button-container">
                <button className="custom-button" onClick={ShowArtists}>
                    Voir les Artistes
                </button>
                <button className="custom-button" onClick={ShowAlbums}>
                    Voir les Albums
                </button>
            </div>
        </div>
    );
}

export default Homepage;
