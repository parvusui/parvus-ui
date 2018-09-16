import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CardFooter } from '../../src/card';

configure({ adapter: new Adapter() });

describe('<CardFooter />', () => {
  it('Should render card footer with the defined text', () => {
    const wrapper = mount(
      <CardFooter>Test</CardFooter>
    );

    expect(wrapper.text()).toEqual('Test');
  });
});
