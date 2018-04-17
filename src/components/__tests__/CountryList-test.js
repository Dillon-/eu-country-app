import React from 'react';
import renderer from 'react-test-renderer';
import CountryList from '../CountryList';

it('renders a CountryList', () => {
  const sections = [
    {
      title: 'North America',
      data: [
        { name: 'USA', subregion: 'North America', capital: 'Washington DC', languages: [{ name: 'English' }]},
        { name: 'Canada', subregion: 'North America', capital: 'Ottawa', languages: [{ name: 'English' }, { name: 'French' }]},
      ]
    }
  ]
  const component = renderer.create(
    <CountryList
      sections={sections}
    />
  );
  expect(component).toMatchSnapshot();
});