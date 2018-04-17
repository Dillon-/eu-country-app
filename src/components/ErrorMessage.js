import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'components';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <View>
      <Text style={{ fontSize: 24, color: 'white', textAlign: 'center', paddingBottom: 30 }}>
        {message}
      </Text>
      { onRetry && <Button onPress={onRetry} title="Try again" />}
    </View>
  )
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func,
};

export default ErrorMessage;
