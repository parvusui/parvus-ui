import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MenuDropdownItem } from '../../src/menu';

configure({ adapter: new Adapter() });

describe('<MenuDropdownItem />', () => {
  const wrapper = mount(
    <MenuDropdownItem label="Test"/>
  );
  
  it('Should render MenuDropdownItem with the defined text', () => {
    expect(wrapper.text()).toEqual('Test');
  });

  it('Should render menu dropdown item with the defined text in the label prop', () => {
    expect(wrapper.props().label).toEqual('Test');
  });
});
