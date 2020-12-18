import React from 'react'
import  { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Posts = () => {


    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        // limit is set to 15 
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?page1&_limit=15')
        setPosts(res.data)}
    useEffect(() => {
        fetchPosts()
    }, [])

    const deletePost = async id => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        fetchPosts() }
    
    return (
            <div className='container mt-5'>
            <h1 className='text-primary mb-3'>Posts</h1>
            <ul className='list-group mb-4'>
                {posts.map(post => (
                    <li key={post.id} className='list-group-item'>
                        <strong>Title</strong> : {post.title} <br />
                        <strong>Description</strong> : {post.body} 
                        <Link class="btn btn-outline-primary mr-2" to={`/posts/edit/${post.id}`}>edit</Link>
                        <Link class="btn btn-danger"onClick={() => deletePost(post.id)}>
                        Delete
                        </Link>
                        
                    </li>))}
            </ul>
        </div>



    )
}

export default Posts
