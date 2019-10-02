import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button onClick={() => {}}>Simple Button</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('properly escapes quotes', () => {
  const tree = renderer
    .create(<Button onClick={() => {}}>{"\"Button\" \\'is \\ 'awesome'"}</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('buttin with icon', () => {
  const tree = renderer
    .create(<Button onClick={() => {}}>{"\"Button\" \\'is \\ 'awesome'"}</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
