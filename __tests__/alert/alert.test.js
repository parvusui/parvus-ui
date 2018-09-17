import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Alert } from '../../src/alert';

configure({ adapter: new Adapter() });

describe('<Alert />', () => {
  const wrapper = mount(
    <Alert>Test</Alert>
  );
  
  it('Should render alert with the defined text', () => {
    expect(wrapper.text()).toEqual('Test');
  });
});
