import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BreadcrumbItem } from '../../src/breadcrumb';

configure({ adapter: new Adapter() });

describe('<BreadcrumbItem />', () => {
  it('Should render breadcrumb item with the defined text', () => {
    const wrapper = mount(
      <BreadcrumbItem>Test</BreadcrumbItem>
    );

    expect(wrapper.text()).toEqual('Test');
  });
});
