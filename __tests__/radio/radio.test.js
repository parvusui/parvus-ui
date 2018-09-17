import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Radio } from '../../src/radio';

configure({ adapter: new Adapter() });

describe('<Radio />', () => {
  const callback = jest.fn();
  const wrapper = mount(
    <Radio
      id="testRadioMain"
      checked={false}
      onChange={callback}
    />
  );
  
  it('Should check the passed checked value in props', () => {
    expect(wrapper.props().checked).toBeFalsy;
  });

  it('should trigger the onChange function', () => {
    wrapper.find('input').simulate('change');
    expect(callback).toHaveBeenCalled();
  });
});
