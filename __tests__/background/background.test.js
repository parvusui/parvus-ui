import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Background } from '../../src/background';

configure({ adapter: new Adapter() });

describe('<Background />', () => {
  it('Should render background with the defined text', () => {
    const wrapper = mount(
      <Background>Test</Background>
    );

    expect(wrapper.text()).toEqual('Test');
  });
});
