import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import style from './PostDetail.module.css'
import { useContext } from 'react'
import PostContext from '../context/PostContext'

const API_BASE_URI = 'http://localhost:3000/'

export default function PostDetail() {
    const { postId } = useParams()
    const { posts } = useContext(PostContext)

    const post = posts.find(p => p.id === parseInt(postId))

    if (!post) {
        return <div>Post non trovato</div>
    }

    const currentIndex = posts.findIndex(p => p.id === parseInt(postId))
    const prevPost = posts[currentIndex - 1]
    const nextPost = posts[currentIndex + 1]

    const { title, content, image, tags, id } = post

    return (
        <div className='container'>
            <div className={style.row}>
            <h1>{title}</h1>
            <img className={style.image} src={`${API_BASE_URI}imgs/posts/${image}`} />
            <div className={style.tagContainer}>
                {tags.map((tag, i) => (
                    <div key={i}>{tag}</div>
                )
                )}
            </div>
            <h2>Descrizione:</h2>
            <p>{content}</p>

            <div className={style.btnContainer}>
                {prevPost && (
                    <Link to={`/our-recipes/${prevPost.id}`} className={style.btn} >
                        Post Precedente
                    </Link>
                )}

                {nextPost && (
                    <Link to={`/our-recipes/${nextPost.id}`} className={style.btn} >
                        Prossimo Post
                    </Link>
                )}
            </div>
            </div>
        </div>
    )
}

