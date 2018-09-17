import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Input } from '../../src/input';

configure({ adapter: new Adapter() });

describe('<Input />', () => {
  const callback = jest.fn();
  const wrapper = mount(
    <Input
      id="testInputMain"
      value="test value"
      onChange={callback}
    />
  );
  
  it('Should check the passed value in props', () => {
    expect(wrapper.props().value).toEqual('test value');
  });

  it('should trigger the onChange function', () => {
    wrapper.find('input').simulate('change');
    expect(callback).toHaveBeenCalled();
  });
});
