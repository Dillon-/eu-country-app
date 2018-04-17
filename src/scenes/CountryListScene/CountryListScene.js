import React, { Component } from 'react';
import { View } from 'react-native';
import { CountryListContainer } from 'containers';
import styles from './styles';

class CountryListScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CountryListContainer regionalBloc="eu" />
      </View>
    );
  }
}

export default CountryListScene;