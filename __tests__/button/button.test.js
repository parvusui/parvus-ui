import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '../../src/button';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('Should render button with the defined text', () => {
    const wrapper = mount(
      <Button>Test</Button>
    );

    expect(wrapper.text()).toEqual('Test');
  });
});
