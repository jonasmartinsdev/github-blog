import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  padding: 2rem;
  border-radius: 10px;

  margin-top: -5rem;

  h2 {
    margin-top: 1.25rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.5rem;
    }

    a {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.blue};
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      gap: 0.5rem;
      font-size: 0.75rem;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
        transition: border-bottom 0.2s;
      }
    }
  }
`

export const PostInfoDetails = styled.ul`
  margin-top: 0.5rem;
  list-style: none;
  display: flex;
  gap: 1.5rem;

  li {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-span']};

    svg {
      color: ${(props) => props.theme['base-label']};
      margin-right: 0.5rem;
    }
  }
`
