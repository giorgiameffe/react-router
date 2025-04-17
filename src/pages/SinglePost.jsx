// Hooks
import { useState, useEffect } from "react";
import { UNSAFE_decodeViaTurboStream, useParams } from "react-router-dom";
// Axios
import axios from "axios";

// Single Post 

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

export default function SinglePost() {

    const { id } = useParams();

    const [singlePost, setSinglePost] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const postEndpoint = `${postsEndpoint}/${id}`;

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
        return <div>Loading..</div>
    }

    if (error) {
        return <div>Error..Page not found!</div>

    }

    return (
        <section>
            <h2>{singlePost.title}</h2>
            <p>{singlePost.body}</p>
        </section>
    )

}