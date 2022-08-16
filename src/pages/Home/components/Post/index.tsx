import { PostContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

interface PostProps {
  post: {
    title: string
    body: string
    created_at: string
    number: number
  }
}

export function Post({ post }: PostProps) {
  const navigate = useNavigate()
  function handlePostInfo() {
    navigate(`/post/${post.number}`)
  }

  return (
    <PostContainer onClick={handlePostInfo}>
      <header>
        <h2>{post.title}</h2>
        <span>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </header>
      <p>{post.body}</p>
    </PostContainer>
  )
}
