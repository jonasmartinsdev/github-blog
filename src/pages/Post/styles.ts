import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  code {
    line-height: 1.6;
    margin: 2.5rem 0;
    background: ${(props) => props.theme['base-post']};
    padding: 1rem;
    border-radius: 6px;
    display: block;
  }
`
