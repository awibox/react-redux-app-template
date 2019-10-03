import React from 'react';
import renderer from 'react-test-renderer';
import Title from './Title';

it('Title renders correctly', () => {
  const tree = renderer
    .create(<Title>Simple Title</Title>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Title properly escapes quotes', () => {
  const tree = renderer
    .create(<Title>{"\"Title\" \\'is \\ 'awesome'"}</Title>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Title correctly renders the div inside', () => {
  const tree = renderer
    .create(<Title><div>Title</div></Title>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
