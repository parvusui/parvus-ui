import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Menu } from '../../src/menu';

configure({ adapter: new Adapter() });

describe('<Menu />', () => {
  const wrapper = mount(
    <Menu>Test</Menu>
  );
  
  it('Should render menu with the defined text', () => {
    expect(wrapper.text()).toEqual('Test');
  });
});
