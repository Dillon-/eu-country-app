import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

const CountryListHeader = ({ title }) => {
  return (
    <Text style={styles.text}>{title}</Text>
  )
};

CountryListHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = EStyleSheet.create({
  text: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    color: 'white',
    fontWeight: '800',
    fontSize: 22,
  }
});

export default CountryListHeader;