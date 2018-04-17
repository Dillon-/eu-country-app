import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'components';
import styles from './styles';

class WelcomeScene extends Component {
  handlePressStart = () => {
    this.props.navigation.navigate('CountryListScene');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}></View>

        <View style={styles.row}>
          <Text style={styles.logoText}>EU {"\n"} COUNTRIES</Text>
        </View>

        <View style={styles.row}>
          <Button onPress={this.handlePressStart} title="START" />
        </View>
      </View>
    )
  }
}

WelcomeScene.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default WelcomeScene;