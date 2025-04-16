// Hooks
import { useEffect, useState } from "react";
// Axios
import axios from "axios";

// Posts list

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(postsEndpoint)
            .then(res => setPosts(res.data))
            .catch(error => alert('Qualcosa è andato storto, riprova più tardi'))
    }, [])

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post =>
                    <li key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}