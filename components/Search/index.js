import React, {useState} from 'react';
import {Container, Heading,  Form, SearchInput, Submit, FilterBtn, Span} from './styles'
import { useDispatch } from "react-redux";

const Search = () => {
  ///get input value
  const [keyword, setKeyword] = useState('')
  const [filter, setFilter] = useState('text')

  /// redux hook for make dispatch
  const dispatch = useDispatch();

  ////this function send the dispatch and get the data
  const handleSubmit =(e)=>{
    e.preventDefault()  
    dispatch({
      type: "SET_DATA",
      payload:keyword,
    });
  }

  ////set keyword state function
  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };
  ////set Filter state function
  const handleFilter = (value) => {
    console.log(value)
    setFilter(value);
  };


  return (
    <Container>
      <Heading>
        Are you looking for conciliations, users, boards or sources? please
        write it here.
      </Heading>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          type={filter}
          name="search"
          id=""
          onChange={handleInputChange}
          value={keyword}
          placeholder="buscar"
          required
        />
        <Submit type="submit">
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </Submit>
      </Form>
      <div>
      <Span>Search by:</Span>
        <FilterBtn onClick={() => handleFilter("text")}>text</FilterBtn>
        <FilterBtn onClick={() => handleFilter("date")}> date</FilterBtn>
        <FilterBtn onClick={() => handleFilter("number")}>number</FilterBtn>
      </div>
    </Container>
  );
};

export default Search;