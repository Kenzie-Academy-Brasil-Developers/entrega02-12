import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 18rem;
  height: 22rem;
  border: 2px solid var(--gray-light);
  border-radius: 0.2rem;

  :hover {
    box-shadow: 3px 3px 10px -5px;
  }

  :hover div > img {
    filter: brightness(105%);
    transform: scale(1.15);
    transition: 0.5s;
  }
`;

export const DivImage = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-very-light);
  border-radius: 0.2rem;

  img {
    width: 192px;
    height: 100%;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45%;
  padding-top: 0.5rem;
  gap: 1rem;
  padding-left: 1rem;

  h3 {
    font-weight: bolder;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--gray);
    opacity: 0.8;
    font-weight: bold;
  }

  span {
  }

  button {
    width: 5rem;
    height: 2rem;
    background-color: var(--green);
    color: var(--white);
    border: unset;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;
