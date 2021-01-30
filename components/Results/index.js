import React from 'react';
import Card from '@components/Card'
import {Container, Grid} from './styles'

const Results = ({data, title}) => {

  //////////////////
  //validate for render
  //only users info
  /////////////////
  if(title=='usuarios'){
    return (
      <Container>
        <h2>{title}</h2>
        <Grid>
          {data.map((item) => (
            <Card
              title={item.name.firstName}
              key={item._id}
              age={item.age}
              company={item.company}
              date={item.timestamp ? item.timestamp.createdAt : ""}
            />
          ))}
        </Grid>
      </Container>
    );
  }

  
  return (
    <Container>
      <h2>{title}</h2>
      <Grid>
        {data.map((item) => (
          <Card
            title={item.name || item.dashboardName || item.conciliationName}
            key={item._id}
            description={item.description}
            date={item.timestamp? item.timestamp.createdAt : '' }
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Results;