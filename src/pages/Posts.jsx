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
            .then(res => console.log(res.data))
    }, [])

    return (
        <div>
            <h2>Posts</h2>
        </div>
    )

}