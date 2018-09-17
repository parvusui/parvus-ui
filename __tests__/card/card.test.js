import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card } from '../../src/card';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
  const wrapper = mount(
    <Card>Test</Card>
  );
  
  it('Should render card with the defined text', () => {
    expect(wrapper.text()).toEqual('Test');
  });
});
