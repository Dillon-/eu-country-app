import React from 'react';
import { Alert } from 'react-native';
import renderer from 'react-test-renderer';

import Button from '../Button';

it('renders a Button', () => {
  const component = renderer.create(
    <Button
      title="Big blue button"
      onPress={() => Alert.alert('Button pressed.')}
    />
  );
  expect(component).toMatchSnapshot();
});