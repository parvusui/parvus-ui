import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Label } from '../../src/label';

configure({ adapter: new Adapter() });

describe('<Label />', () => {
  const wrapper = mount(
    <Label>Test</Label>
  );
  
  it('Should render label with the defined text', () => {
    expect(wrapper.text()).toEqual('Test');
  });
});
