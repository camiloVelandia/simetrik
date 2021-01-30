import React from 'react';
import {Container} from './styles'

const Card = ({title, age, company, description, date}) => {
  return (
    <Container>
      <h3>{`Name: ${title}`}</h3>
      {age?<p>{`Age: ${age}`}</p>:''}
      {company?<p>{`Company: ${company} `}</p> :''}
      {description?<p>{`Description: ${description} `}</p>:''}
      {date?<p>{`Date: ${date} `}</p>:''}
    </Container>
  );
};

export default Card;