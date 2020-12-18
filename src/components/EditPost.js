import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EditPost = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            // limit is set to 15 
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts?page1&_limit=15')
            setPosts(res.data)
        }
        fetchPosts()
    }, [])


    return (
            <div className='container mt-5'>
            <h1 className='text-primary mb-3'>Posts</h1>
            <ul className='list-group mb-4'>
                {posts.map(post => (
                    <li key={post.id} className='list-group-item'>
                        <strong>Title</strong> : {post.title} <br />
                        <strong>Description</strong> : {post.body} 
                        <Link  to={`/`}> Submit Edit </Link>
                        
                    </li>))}
            </ul>
        </div>



    )
}

export default EditPost