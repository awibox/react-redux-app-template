import React from 'react';
import renderer from 'react-test-renderer';
import Alert from './Alert';

it('Alert renders correctly', () => {
  const tree = renderer
    .create(<Alert>Simple Alert</Alert>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Alert properly escapes quotes', () => {
  const tree = renderer
    .create(<Alert>{"\"Alert\" \\'is \\ 'awesome'"}</Alert>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Alert correctly renders the div inside', () => {
  const tree = renderer
    .create(<Alert><div>Alert</div></Alert>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
