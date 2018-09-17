import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Option } from '../../src/select';

configure({ adapter: new Adapter() });

describe('<Option />', () => {
  const wrapper = mount(
    <Option>Test</Option>
  );
  
  it('Should render Option with the defined text', () => {
    expect(wrapper.text()).toEqual('Test');
  });
});
