import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MenuItemButton } from "../../src/menu";

configure({ adapter: new Adapter() });

describe("<MenuItemButton />", () => {
  const callback = jest.fn();
  const wrapper = mount(
    <MenuItemButton onClick={callback}>Test</MenuItemButton>
  );

  it("Should render menu item with the defined text", () => {
    expect(wrapper.text()).toEqual("Test");
  });

  it("should trigger the onClick callback", () => {
    wrapper.find("button").simulate("click");
    expect(callback).toHaveBeenCalled();
  });
});
