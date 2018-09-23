import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MenuDropdownSubItem } from '../../src/menu';

configure({ adapter: new Adapter() });

describe('<MenuDropdownSubItem />', () => {
  const wrapper = mount(
    <MenuDropdownSubItem>Test</MenuDropdownSubItem>
  );
  
  it('Should render menu dropdown sub item with the defined text', () => {
    expect(wrapper.text()).toEqual('Test');
  });
});
