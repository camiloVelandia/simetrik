import React from 'react';
import Search from '@components/Search'
import Results from '@components/Results'
import NotShow from '@components/NotShow'
import {useSelector} from 'react-redux'


const index = () => {

  const state = useSelector((state)=> state)
  return (
    <>
      <Search />

      {!state.usuariosFiltered.length ? (
        <NotShow text={"Not users to show, write what you are looking for in the text button"} />
      ) : (
        <Results data={state.usuariosFiltered} title={"usuarios"} />
      )}

      {!state.conciliacionesFiltered.length ? (
        <NotShow text={"Not conciliations to show, write what you are looking for in the text button"} />
      ) : (
        <Results data={state.conciliacionesFiltered} title={"Conciliaciones"} />
      )}

      {!state.fuentesFiltered.length ? (
        <NotShow text={"Not fonts to show write, what you are looking for in the text button"} />
      ) : (
        <Results data={state.fuentesFiltered} title={"fuentes"} />
      )}

      {!state.tablerosFiltered.length ? (
        <NotShow text={"Not boards to show write, what you are looking for in the text button"} />
      ) : (
        <Results data={state.tablerosFiltered} title={"tableros"} />
      )}
      
    </>
  );
};

export default index;