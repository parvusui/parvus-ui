import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CardHeader } from '../../src/card';

configure({ adapter: new Adapter() });

describe('<CardHeader />', () => {
  const wrapper = mount(
    <CardHeader>Test</CardHeader>
  );
  
  it('Should render card header with the defined text', () => {
    expect(wrapper.text()).toEqual('Test');
  });
});
