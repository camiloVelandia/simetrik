import React, { useState } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import conciliaciones from '../data/conciliaciones.json'
import fuentes from '../data/fuentes.json'
import tableros from '../data/tableros.json'
import usuarios from '../data/usuarios.json'
import reducer from '../reducers'
import Head from "next/head";
import GloblalStyles from "../globalStyles";


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

const store = createStore(reducer, initialState)


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Simetrik Challenge</title>
        <meta property="og:title" content="Simetrik" key="title" />
      </Head>
      {/* add redux provider with a store */}
      <Provider store={store}>    
        <GloblalStyles />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
