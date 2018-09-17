import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Checkbox } from '../../src/checkbox';

configure({ adapter: new Adapter() });

describe('<Checkbox />', () => {
  const callback = jest.fn();
  const wrapper = mount(
    <Checkbox
      id="testCheckboxMain"
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
