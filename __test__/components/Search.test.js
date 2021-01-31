import React from "react";
import { mount, shallow } from "enzyme";
import ProviderMock from "../../__mocks__/ProvideMock";
import Search from "../../components/Search";

describe("<Search />", () => {
  test("Render del componente Search", () => {
    const search = shallow(
      <ProviderMock>
        <Search />
      </ProviderMock>
    );
    expect(search.length).toEqual(1);
  });
  test("Render del Titulo", () => {
    const search = mount(
      <ProviderMock>
        <Search />
      </ProviderMock>
    );
    expect(search.find("h1").text()).toEqual("Are you looking for conciliations, users, boards or sources? please write it here.");
  });
});
