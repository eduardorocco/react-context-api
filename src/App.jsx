import PostsPage from './pages/PostsPage'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import DefaultLayout from './layout/DefaultLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PostDetail from './pages/PostDetail'
import { PostProvider } from "./context/PostContext";
function App() {
  return (
    <PostProvider>
      <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/our-recipes' element={<PostsPage/>} />
          <Route path='/our-recipes/:postId' element={<PostDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </PostProvider>

  )


}
export default App
