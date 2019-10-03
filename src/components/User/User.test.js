import React from 'react';
import renderer from 'react-test-renderer';
import User from './User';

it('User renders correctly', () => {
  const tree = renderer
    .create(<User>Simple User</User>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('User properly escapes quotes', () => {
  const tree = renderer
    .create(<User>{"\"User\" \\'is \\ 'awesome'"}</User>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('User correctly renders the div inside', () => {
  const tree = renderer
    .create(<User><div>Alert</div></User>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
