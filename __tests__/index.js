import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Test from '../src/';

configure({ adapter: new Adapter() });

describe('<Test />', () => {
  it('Should render text', () => {
    const wrapper = shallow(
      <Test />
    );

    expect(wrapper.text()).toEqual('Test');
  });
});
