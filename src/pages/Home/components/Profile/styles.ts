import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  padding: 2rem;
  border-radius: 10px;

  margin-top: -5rem;

  display: grid;
  grid-template-columns: 148px 1fr;
  align-items: flex-start;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
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

  p {
    color: ${(props) => props.theme['base-text']};
    margin-top: 0.5rem;
  }
`

export const ProfileFooter = styled.ul`
  margin-top: 1.5rem;
  list-style: none;
  display: flex;
  gap: 1.5rem;

  li {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
      margin-right: 0.5rem;
    }
  }
`
