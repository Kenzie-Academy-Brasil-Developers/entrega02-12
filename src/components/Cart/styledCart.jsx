import styled from "styled-components";

export const Section = styled.section`
  width: 21rem;
  height: 27rem;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 3rem;
  background-color: var(--gray-very-light);
  border-radius: 0.3rem;
`;

export const DivHeaderCart = styled.div`
  width: inherit;
  height: 12%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--green);
  border-radius: 0.2rem 0.2rem 0 0;

  h3 {
    margin-left: 1.5rem;
    font-weight: bold;
    color: var(--white);
  }
`;

export const UlCart = styled.ul`
  height: 58%;
  width: 100%;
  overflow-y: auto;
`;

export const Li = styled.li`
  width: 90%;
  height: 6rem;
  display: flex;
  margin: 0.5rem auto;
  align-items: flex-start;

  img {
    width: 25%;
    height: 80%;
    background-color: var(--gray-light);
    border-radius: 0.8rem;
    margin: auto 0;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 1.2rem 0 0 0.5rem;
    gap: 0.7rem;
    justify-content: flex-start;

    h4 {
      font-weight: bold;
    }

    span {
      opacity: 0.5;
      font-size: 13px;
    }
  }

  button {
    margin-top: 0.7rem;
    border: unset;
    background-color: unset;
    cursor: pointer;
    opacity: 0.5;
    
    :hover {
      color: var(--red);
    }
  }
`;

export const DivFooter = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: 50%;
    border-top: 2px solid var(--gray-light);
    font-weight: bold;
    p {
      opacity: 0.5;
    }
  }
  button {
    height: 35%;
    width: 70%;
    border: unset;
    background-color: var(--gray-light);
    border-radius: 0.5rem;
    opacity: 0.8;
    cursor: pointer;

    &:active{
      transition: 0.1s;
      background-color: var(--gray);
      color: var(--white);
    }
  }
`;
