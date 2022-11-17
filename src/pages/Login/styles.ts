import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  height: 100vh;
`

export const LoginForm = styled.form`
  background: #323238;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 450px;
  padding: 3rem;
  gap: 2rem;
  border-radius: 6px;

  h1 {
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    padding: 1rem;

    font-size: 1.25rem;

    background-color: transparent;
    color: #E1E1E6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    border: none;
    border-radius: 8px;

    ::placeholder {
      color: #FFF;
      font-size: 1rem;
      opacity: .7;
    }
  }
  

  button {
    width: 100%;
    padding: 1rem;

    font-size: 1.25rem;

    background-color: #202024;
    color: #E1E1E6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    border: none;
    border-radius: 8px;
    cursor: pointer;

    :disabled {
      opacity: .6;
    }
  

    &:hover {
      transform: scale(1.1);
      transition: all .4s;
    }
  }
`

export const ContainerSignUp = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  a {
    color: #8D8D99;
  }
`