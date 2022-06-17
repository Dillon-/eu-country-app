import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet-forked';

const CountryListCell = ({ country: { name, subregion, capital, languages } }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.headerText]}>{name}</Text>
      <Text style={styles.text}>{subregion}</Text>
      <Text style={styles.text}>Capital: {capital}</Text>
      <Text style={styles.text}>Lang: {languages.map(language => language.name).join(', ')}</Text>
    </View>
  );
};

CountryListCell.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subregion: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
  }),
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$lightGray',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '800',
  },
  text: {
    color: '$black',
    fontSize: 16,
  }
});

export default CountryListCell;
