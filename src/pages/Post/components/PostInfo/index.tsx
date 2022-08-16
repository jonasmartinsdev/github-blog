import { PostInfoContainer, PostInfoDetails } from './styles'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FaCalendar, FaChevronLeft, FaComment, FaGithub } from 'react-icons/fa'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostInfoProps {
  post: {
    title: string
    html_url: string
    comments: number
    created_at: string
    user: {
      login: string
    }
  }
}

export function PostInfo({ post }: PostInfoProps) {
  return (
    <PostInfoContainer>
      <header>
        <Link to={'/'}>
          <FaChevronLeft /> Voltar
        </Link>
        <a href={post.html_url} target={'_blank'} rel="noreferrer">
          <span>Ver no Github</span>
          <BsBoxArrowUpRight />
        </a>
      </header>
      <h2>{post.title}</h2>

      <PostInfoDetails>
        <li>
          <FaGithub />
          <span>{post.user?.login}</span>
        </li>
        <li>
          <FaCalendar />
          <span>
            {post.created_at &&
              formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
          </span>
        </li>
        <li>
          <FaComment />
          <span>{post.comments} comentários</span>
        </li>
      </PostInfoDetails>
    </PostInfoContainer>
  )
}
