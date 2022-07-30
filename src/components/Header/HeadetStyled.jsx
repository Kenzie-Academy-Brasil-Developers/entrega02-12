import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-very-light);
  gap: 1rem;
  font-family: var(--font);

  
  nav {
    display: flex;
    justify-content: center;
    input {
      width: 20rem;
      height: 2.8rem;
      border: 2px solid var(--gray-light);
      border-radius: 0.5rem;
      padding-left: 1rem;
      font-weight: 500;
      opacity: 0.5;
      position: relative;

      @media screen and (min-width: 1400px) {
        margin-left: 16rem;
      }

      :hover {
        border: 2px solid var(--green);
      }
    }
    button {
      position: absolute;
      transform: translate(7.4rem, 0.5rem);
      height: 2.2rem;
      border: unset;
      background-color: var(--green);
      font-weight: 600;
      color: var(--white);
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 650px) {
    flex-direction: row;
    justify-content: space-around;
    height: 5rem;
  }
`;
