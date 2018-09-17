import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MenuItem } from '../../src/menu';

configure({ adapter: new Adapter() });

describe('<MenuItem />', () => {
  const callback = jest.fn();
  const wrapper = mount(
    <MenuItem onClick={callback}>Test</MenuItem>
  );

  it('Should render menu item with the defined text', () => {
    expect(wrapper.text()).toEqual('Test');
  });

  it('should trigger the onClick callback', () => {
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});
