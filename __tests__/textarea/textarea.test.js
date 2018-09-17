import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Textarea } from '../../src/textarea';

configure({ adapter: new Adapter() });

describe('<Textarea />', () => {
  const callback = jest.fn();
  const wrapper = mount(
    <Textarea
      id="testTextareaMain"
      value="test value"
      onChange={callback}
    />
  );
  
  it('Should check the passed value in props', () => {
    expect(wrapper.props().value).toEqual('test value');
  });

  it('should trigger the onChange function', () => {
    wrapper.find('textarea').simulate('change');
    expect(callback).toHaveBeenCalled();
  });
});
