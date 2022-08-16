import { ChangeEvent } from 'react'
import { SearchFormContainer } from './styles'

interface SearchFormProps {
  total: number
  fetchPosts: (q: string) => Promise<void>
}

export function SearchForm({ fetchPosts, total }: SearchFormProps) {
  async function handleChangePosts(event: ChangeEvent<HTMLInputElement>) {
    return await fetchPosts(event.target.value)
  }

  return (
    <SearchFormContainer>
      <header>
        <strong>Publicações</strong>
        <span>{total} publicações</span>
      </header>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleChangePosts}
      />
    </SearchFormContainer>
  )
}
