import styled from "styled-components";

export const Container = styled.section`
  margin-bottom:40px;
  padding:15px;
  & h2{
    color:rebeccapurple;
    font-size:30px;
    text-transform:capitalize
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.5rem;
`;
