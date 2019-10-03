import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

it('Button renders correctly', () => {
  const tree = renderer
    .create(<Button onClick={() => {}}>Simple Button</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Button properly escapes quotes', () => {
  const tree = renderer
    .create(<Button onClick={() => {}}>{"\"Button\" \\'is \\ 'awesome'"}</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Button correctly renders the div inside', () => {
  const tree = renderer
    .create(<Button onClick={() => {}}><div>Title</div></Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('Button with icon', () => {
  const tree = renderer
    .create(<Button icon="fa-github" onClick={() => {}}>Button is awesome </Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
