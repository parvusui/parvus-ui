import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Tooltip } from '../../src/tooltip';

configure({ adapter: new Adapter() });

describe('<Tooltip />', () => {
  const wrapper = mount(
    <Tooltip
      label="label Text"
      tooltipText="tooltipText Test"
    />
  );
  
  it('Should check the passed in props', () => {
    expect(wrapper.props().label).toEqual('label Text');
    expect(wrapper.props().tooltipText).toEqual('tooltipText Test');
  });
});
