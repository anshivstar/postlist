import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Posts from './components/Posts'

const App = () => {
    const[posts , setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            // limit is set to 15 
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts?page1&_limit=15')
            setPosts(res.data)
        } 
        fetchPosts()   
    },[])


    return(
        <div className='container mt-5'>
            <h1 className='text-primary mb-3'>Posts</h1>
            <Posts posts={posts} />
        </div>
    )
}



export default App