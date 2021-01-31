import React from "react";
import { mount } from "enzyme";
import Search from "../../components/Search";

describe("<Search />", () => {
  test("Render del componente Search", () => {
    const search = mount(<Search />);
    expect(search.length).toEqual(1);
  });
});
