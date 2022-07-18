import './style/App.css'
import Header from './components/header/Header'
import PostForm from './components/postform/PostForm'
import PostList from './components/postlist/PostList'
import { useState } from 'react'


const App = () => {
	const [posts, setPosts] = useState([])

	const createPost = post => {
		post.id = Date.now()
		setPosts([...posts, post])
	}

	const deletedPost = id => {
		setPosts(posts.filter(p=> p.id !== id))

	}
	return (
		<div>
			<Header />
			<div className='wrapper'>
				<PostForm create={createPost}/>
				<PostList posts={posts} deleted={deletedPost}/>
			</div>
		</div>
	)

}

export default App