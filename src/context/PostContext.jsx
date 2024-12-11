import React, { createContext, useState, useEffect } from "react"
import axios from "axios"
const API_BASE_URI = ('http://localhost:3000/')
export const PostContext = createContext()

export const PostsProvider = ({children}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        async function fetchPosts() {

            const response = await axios.get(`${API_BASE_URI}posts`)
            const data = await response.data
            setPosts(data)
            
        }

        fetchPosts()

    },[])

    return (
        <PostContext.Provider value = {{ posts }}>
            {children}
        </PostContext.Provider>
    )

}