import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MenuItem } from "../../src/menu";

configure({ adapter: new Adapter() });

describe("<MenuItem />", () => {
  const wrapper = mount(<MenuItem>Test</MenuItem>);

  it("Should render menu item with the defined text", () => {
    expect(wrapper.text()).toEqual("Test");
  });
});
