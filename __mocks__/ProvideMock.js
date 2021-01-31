import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import conciliaciones from "../data/conciliaciones.json";
import fuentes from "../data/fuentes.json";
import tableros from "../data/tableros.json";
import usuarios from "../data/usuarios.json";
import reducer from "../reducers";


const initialState = {
  conciliaciones,
  fuentes,
  tableros,
  usuarios,
  fuentesFiltered: [],
  tablerosFiltered: [],
  usuariosFiltered: [],
  conciliacionesFiltered: [],
};

const store = createStore(reducer, initialState);

const ProviderMock = (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
);

export default ProviderMock;
