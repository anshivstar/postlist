import React from 'react'

const Posts = ({ posts }) => {
    return (
        <ul className='list-group mb-4'>
            {posts.map(post => (
                <li key={post.id} className='list-group-item'>
                    <strong>Title</strong> : {post.title} <br/>
                     <strong>Description</strong> : {post.body}
                </li>
            ))}
        </ul>
    )
}

export default Posts
