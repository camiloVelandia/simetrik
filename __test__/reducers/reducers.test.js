import reducer from "../../reducers";
import fuentesMock from "../../__mocks__/fuentesMock";
import conciliaciones from "../../data/conciliaciones.json";
import fuentes from "../../data/fuentes.json";
import tableros from "../../data/tableros.json";
import usuarios from "../../data/usuarios.json";

describe("Reducers", () => {
  test("Retornar initial State", () => {
    expect(reducer({}, "")).toEqual({});
  });
  // test("SET_DATA", () => {
  //   const initialState = {
  //     conciliaciones,
  //     fuentes,
  //     tableros,
  //     usuarios,
  //     fuentesFiltered: [],
  //     tablerosFiltered: [],
  //     usuariosFiltered: [],
  //     conciliacionesFiltered: [],
  //   };
  //   const payload = fuentesMock;
  //   const action = {
  //     type: "SET_DATA",
  //     payload,
  //   };
  //   const expected = {
  //     fuentesFiltered: [fuentesMock],
  //   };
  //   expect(reducer(initialState, action)).toEqual(expected);
  // });
});
