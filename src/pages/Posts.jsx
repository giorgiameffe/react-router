// Hooks
import { useEffect, useState } from "react";
// Axios
import axios from "axios";
// Link
import { Link } from "react-router-dom";

// Posts list

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

export default function Posts() {

    const [posts, setPosts] = useState([]);

    function getPosts() {
        axios.get(postsEndpoint)
            .then(res => {
                setPosts(res.data)
            })
            .catch(error => alert('Qualcosa è andato storto, riprova più tardi'))
    }

    useEffect(getPosts, []);


    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post =>
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <Link to={`/posts/${post.id}`}>Clicca qui per maggiori dettagli</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}