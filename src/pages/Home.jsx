import { useState, useEffect } from 'react'
import { getAllPosts } from '../api/posts'
import Header from '../components/Header'
import Posts from '../components/Posts'

export default function Home() {
  const [headerPosts] = useState('Posts')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPosts().then((data) => setPosts(data))
  }, [])

  return (
    <>
      <Header />
      <Posts posts={posts} />
    </>
  )
}
