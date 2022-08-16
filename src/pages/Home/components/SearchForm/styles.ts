import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  margin-top: 4.8125rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    margin-top: 0.75rem;
    height: 50px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 0 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    :focus {
      outline: 0;
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`
