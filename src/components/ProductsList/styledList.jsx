import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  overflow-x: auto;
  height: max-content;
  width: inherit;
  align-items: center;
  gap: 2rem;
  padding: 2rem;


  @media screen and (min-width: 1100px) {
    flex-wrap: wrap;
    width: 1010px;
    margin: 0 auto;
  }

`;

export const Main = styled.main`
display: flex;
flex-direction: column;
@media screen and (min-width: 1400px) {
  
flex-direction: row;
justify-content: center;
margin-top: 3rem;
section{
  margin: 0;

  ul{
    padding: 0;
  }
}
}


`