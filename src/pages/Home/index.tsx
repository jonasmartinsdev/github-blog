import { useCallback, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { api } from '../../lib/axios'
import { Post } from './components/Post'
import { SearchForm } from './components/SearchForm'
import { Profile } from './components/Profile'
import { HomeContainer, PostContent } from './styles'

interface Posts {
  total_count: number
  items: {
    id: number
    title: string
    body: string
    created_at: string
    number: number
  }[]
}

export function Home() {
  const [posts, setPosts] = useState<Posts>({} as Posts)

  const fetchPosts = useCallback(async (query = '') => {
    const response = await api.get('search/issues', {
      params: {
        q: `${query}repo:jonasmartinsdev/github-blog`,
      },
    })

    setPosts(response.data)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <>
      <Header />
      <Profile />
      <HomeContainer>
        <SearchForm fetchPosts={fetchPosts} total={posts.total_count} />
        <PostContent>
          {posts?.items?.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </PostContent>
      </HomeContainer>
    </>
  )
}
