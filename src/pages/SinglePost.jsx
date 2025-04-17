// Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Axios
import axios from "axios";

// Single Post 

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

export default function SinglePost() {

    const { id } = useParams();

    const [singlePost, setSinglePost] = useState({});

    const postEndpoint = `${postsEndpoint}/${id}`;

    function getSinglePost() {
        axios.get(postEndpoint)
            .then(res => setSinglePost(res.data))
    }

    useEffect(getSinglePost, []);

    return (
        <section>
            <h2>{singlePost.title}</h2>
            <p>{singlePost.body}</p>
        </section>
    )

}