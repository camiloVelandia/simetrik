import styled from "styled-components";


export const Container = styled.section`
  background-color:rebeccapurple;
  min-height:200px;
  height:40vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column
`;
export const Heading = styled.h1`
  color:white;
  max-width:800px;
  text-align:center;
  margin:0 auto;
  padding:0 15px;
  padding-bottom:30px;
`;
export const Form = styled.form`
display:flex;
justify-content:center;
align-items:center;
`;
export const SearchInput = styled.input`
  border-bottom-left-radius:20px;
  border-top-left-radius:20px;
  border:none;
  padding:10px 20px;
  outline:none;
  max-height:36px;
  height:20px;
`;
export const Submit = styled.button`

  outline: none;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border: none;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
    background-color: #c47ceb;
  & svg {
    height: 20px;
    width: 20px;
    fill: black;
  }
  &:active {
  background-color: #b16fd5;
  & svg{
    transform:scale(.9)
  }
  }
`;
export const FilterBtn = styled.button`
  outline: none;
  background-color: #c47ceb;
  border: none;
  margin: 10px;
  color:white;
  cursor: pointer;
  padding: 5px 10px;
  &:active,
  &:focus {
    background-color: #8324b6;
  }
`;
export const Span = styled.span`

  color:white;
  
`;
