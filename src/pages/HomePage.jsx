import React, { useContext } from 'react'
import PostContext from '../context/PostContext'

const API_BASE_URI = 'http://localhost:3000/'

export default function HomePage() {
    const { posts } = useContext(PostContext)

    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }


    const randomInt = posts.length > 0 ? getRandomInt(0, posts.length) : null
    const randomPost = posts[randomInt]

    return (
        <>
            {randomPost ? ( 
                <div>
                    <h2>{randomPost.title}</h2>
                    <img src={`${API_BASE_URI}imgs/posts/${randomPost.image}`} alt={randomPost.title} />
                </div>
            ) : (
                <p>Post non trovato per l'ID {randomInt}.</p>
            )}
        </>
    )
}
