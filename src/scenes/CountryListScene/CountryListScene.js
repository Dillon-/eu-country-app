import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { CountryListContainer } from 'containers';
import styles from './styles';

class CountryListScene extends Component {
  componentWillMount() {
    StatusBar.setBarStyle('dark-content');
  }

  render() {
    return (
      <View style={styles.container}>
        <CountryListContainer regionalBloc="eu" />
      </View>
    );
  }
}

export default CountryListScene;