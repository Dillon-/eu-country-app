import React from 'react';
import { Alert } from 'react-native';
import renderer from 'react-test-renderer';

import ErrorMessage from '../ErrorMessage';

it('renders a ErrorMessage', () => {
  const component = renderer.create(
    <ErrorMessage
      message="Error here."
      onRetry={() => Alert.alert('Retrying...')}
    />
  );
  expect(component).toMatchSnapshot();
});