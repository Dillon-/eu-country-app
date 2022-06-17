import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet-forked';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$blue',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    paddingVertical: 25,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '800',
    
    fontSize: 28,
  }
});

export default Button;
