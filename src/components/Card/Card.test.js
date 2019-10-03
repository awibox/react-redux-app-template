import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

it('Card renders correctly', () => {
  const tree = renderer
    .create(<Card>Simple Card</Card>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Card properly escapes quotes', () => {
  const tree = renderer
    .create(<Card>{"\"Card\" \\'is \\ 'awesome'"}</Card>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Card correctly renders the div inside', () => {
  const tree = renderer
    .create(<Card><div>Card</div></Card>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Card with className', () => {
  const tree = renderer
    .create(<Card className="test-card"><div>Card</div></Card>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
