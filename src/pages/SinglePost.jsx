// Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Axios
import axios from "axios";
// Link
import { Link } from "react-router-dom";
import Posts from "./Posts";

// Single Post 

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

export default function SinglePost() {

    const { id } = useParams();

    const [singlePost, setSinglePost] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const postEndpoint = `${postsEndpoint}/${id}`;

    // funzione chiamata ad API per il singolo post

    function getSinglePost() {
        setLoading(true);
        axios.get(postEndpoint)
            .then(res => {
                setSinglePost(res.data);
            })
            .catch(err => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(getSinglePost, []);

    if (loading) {
        return <div>Caricamento..</div>
    }

    if (error) {
        return <div>Errore..Post non trovato</div>

    }

    return (
        <section>
            <h2>{singlePost.title}</h2>
            <p>{singlePost.body}</p>
            <Link to='/posts'>Torna ai post</Link>
        </section>
    )

}