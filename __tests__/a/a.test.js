import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { A } from '../../src/a';

configure({ adapter: new Adapter() });

describe('<A />', () => {
  const wrapper = mount(
    <A>Test</A>
  );
  
  it('Should render a with the defined text', () => {
    expect(wrapper.text()).toEqual('Test');
  });
});
