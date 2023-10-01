import { useEffect, useState } from "react";
import axios from 'axios';
import '../css/style.css';

function Genres() {
    const [genreList, setgenreList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/genres")
            .then(response => {
                setgenreList(response.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }, [])
    return (
        <div className="">
            <h1>Liste des albums</h1>
                {genreList.map(artists =>
                <div className="genre">
                    <img src={artists.cover} alt="album"/>
                    <p>Nom de l'album : {artists.name}</p>
                </div>
                )}
        </div>
    );
}

export default Genres;
