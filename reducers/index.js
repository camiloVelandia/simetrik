export default function reducer(state, action) {
  switch (action.type) {

    case "SET_DATA": {
      let conciliaciones= [state.conciliaciones]
      let fuentes= [state.fuentes]
      let tableros= [state.tableros]
      let usuarios= [state.usuarios]
      const conciliacionesFiltered = conciliaciones[0].filter(
        (item) =>
          item.conciliationName
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          item.sourceA.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.timestamp.createdAt.toLowerCase().includes(action.payload.toLowerCase()) 
      );
      const fuentesFiltered = fuentes[0].filter(
        (item) =>
          item.company.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          item.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.timestamp.createdAt
            .toLowerCase()
            .includes(action.payload.toLowerCase())
      );
      const usuariosFiltered = usuarios[0].filter(
        (item) =>
          item.address.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.company.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.email.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.gender.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.name.firstName.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.name.lastName.toLowerCase().includes(action.payload.toLowerCase()) 
      );
      const tablerosFiltered = tableros[0].filter(
        (item) =>
          item.dashboardName
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          item.timestamp.createdAt
            .toLowerCase()
            .includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        conciliacionesFiltered,
        tablerosFiltered,
        usuariosFiltered,
        fuentesFiltered,
      };
    }
    default: {
      return state;
    }
  }
}
