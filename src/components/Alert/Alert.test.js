import React from 'react';
import Alert from './Alert';
import { shallow } from 'enzyme';

describe('Alert', () => {
  it('should render correctly', () => {
    const component = shallow(<Alert>Test alert</Alert>);
    expect(component).toMatchSnapshot();
  });
});
