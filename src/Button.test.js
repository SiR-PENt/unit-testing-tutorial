import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

test('Button should match its snapshot', () => {
  const button = renderer.create(<Button />).toJSON();
  expect(button).toMatchSnapshot();
});
