import React from 'react';
import { shallow } from 'enzyme';
import ReposCard from './ReposCard';

const mockData = {
  html_url: 'http://localhost:8888/item',
  name: 'First Repo',
  description: 'Repository',
  language: 'javascript',
  id: 1,
  size: 10,
  stargazers_count: 10,
};
const mockStyle = {
  background: 'red',
};

describe('ReposCard', () => {
  it('should render correctly', () => {
    const component = shallow(<ReposCard repo={mockData}/>);
    expect(component).toMatchSnapshot();
  });
  it('should have style', () => {
    const component = shallow(<ReposCard repo={mockData} style={mockStyle}/>);
    expect(component.find('.fa-circle')).toHaveStyle(mockStyle);
  });
});
