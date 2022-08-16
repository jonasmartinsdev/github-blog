import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import { api } from '../../lib/axios'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'
import ReactMarkdown from 'react-markdown'

interface PostProps {
  title: string
  html_url: string
  comments: number
  created_at: string
  body: string
  user: {
    login: string
  }
}

export function Post() {
  const [post, setPost] = useState<PostProps>({} as PostProps)
  const params = useParams()

  const fetchUser = useCallback(async () => {
    const response = await api.get(
      `repos/jonasmartinsdev/github-blog/issues/${params.number}`,
    )

    setPost(response.data)
  }, [params.number])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])
  return (
    <>
      <Header />
      <PostInfo post={post} />

      <PostContainer>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContainer>
    </>
  )
}
