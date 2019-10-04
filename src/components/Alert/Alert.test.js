import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

describe('Alert', () => {
  it('should render correctly', () => {
    const component = shallow(<Alert>Test alert</Alert>);
    expect(component).toMatchSnapshot();
  });
});
