import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { CountryListContainer } from 'containers';
import styles from './styles';

class CountryListScene extends Component {
  UNSAFE_componentWillMount() {
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

CountryListScene.navigationOptions = {
  title: 'Countries',
  headerLeft: () => null,
  headerStyle: { 
    backgroundColor: '#FFCC00',
  },
  Title: 'Countries',
  TitleStyle: {
    fontSize: 26,
    fontWeight: '800'
  }
}

export default CountryListScene;