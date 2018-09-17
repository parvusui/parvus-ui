import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CardContent } from '../../src/card';

configure({ adapter: new Adapter() });

describe('<CardContent />', () => {
  const wrapper = mount(
    <CardContent>Test</CardContent>
  );

  it('Should render card content with the defined text', () => {
    expect(wrapper.text()).toEqual('Test');
  });
});
