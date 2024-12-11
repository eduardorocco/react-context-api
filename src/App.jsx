import PostsPage from './pages/PostsPage'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import DefaultLayout from './layout/DefaultLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostDetail from './pages/PostDetail'
import PostContext from './context/PostContext.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
const API_BASE_URI = 'http://localhost:3000/'

function App() {

  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    async function fetchAllPosts() {
      try {
        const response = await axios.get(`${API_BASE_URI}posts`)
        setPosts(response.data)
      } catch (error) {
        console.error(error)
        setError('Errore nel recuperare la lista dei post')
      }
    }

    fetchAllPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/our-recipes' element={<PostsPage />} />
            <Route path='/our-recipes/:postId' element={<PostDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>


  )


}
export default App
