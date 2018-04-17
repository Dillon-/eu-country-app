import React from 'react';
import renderer from 'react-test-renderer';

import CountryListHeader from '../CountryListHeader';

it('renders a CountryListHeader', () => {
  const component = renderer.create(
    <CountryListHeader
      title="Europe"
    />
  );
  expect(component).toMatchSnapshot();
});