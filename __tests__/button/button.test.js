import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '../../src/button';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const callback = jest.fn();
  const wrapper = mount(
    <Button onClick={callback}>Test</Button>
  );

  it('Should render button with the defined text', () => {
    expect(wrapper.text()).toEqual('Test');
  });

  it('should trigger the onClick callback', () => {
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});
