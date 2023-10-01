import { useEffect, useState } from "react";
import axios from 'axios';
import '../css/style.css';

function Albums() {
    const [albumList, setalbumList] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/albums?limit=100")
            .then(response => {
                setalbumList(response.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }, [])



    return (
        <div className="">
            <h1>Liste des albums</h1>
                {albumList.map(artists =>
                <div className="album">
                    <p>Nom de l'album : {artists.name}</p>
                    <img src={artists.cover} alt="album"/>
                </div>
                )}
        </div>
    );
}

export default Albums;
