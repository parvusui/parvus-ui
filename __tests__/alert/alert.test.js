import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Alert } from '../../src/alert';

configure({ adapter: new Adapter() });

describe('<Alert />', () => {
  it('Should render alert with the defined text', () => {
    const wrapper = mount(
      <Alert>Test</Alert>
    );

    expect(wrapper.text()).toEqual('Test');
  });
});
