import React from "react";
import { mount } from "enzyme";
import NotShow from "../../components/NotShow";

describe("<NotShow />", () => {
  const notShow = mount(<NotShow />);
  test("Render del componente NotShow", () => {
    expect(notShow.length).toEqual(1);
  });

});
