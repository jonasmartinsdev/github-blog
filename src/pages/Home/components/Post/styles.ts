import styled from 'styled-components'

export const PostContainer = styled.button`
  width: 100%;
  max-width: 416px;
  height: 260px;

  border: 0;
  text-align: left;

  padding: 2rem;

  background: ${(props) => props.theme['base-post']};
  border: 2px solid transparent;

  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border 0.2s;
  }

  header {
    display: grid;
    grid-template-columns: 283px 1fr;
    align-items: flex-start;

    h2 {
      font-size: 1.25rem;
    }
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-text']};

    max-width: 352px;
    height: 112px;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`
