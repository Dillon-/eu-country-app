import React from 'react';
import renderer from 'react-test-renderer';
import CountryListCell from '../CountryListCell';

it('renders a CountryListCell', () => {

  const country = {

    name: 'Sweden',
    subregion: 'Northern Europe',
    capital: 'Stockholm',
    languages: [{ name: 'Swedish' }]
  }
  const component = renderer.create(
    <CountryListCell
      country={country}
    />
  );
  expect(component).toMatchSnapshot();
});