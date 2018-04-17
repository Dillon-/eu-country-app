import { StackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CountryListScene, WelcomeScene } from './scenes';

EStyleSheet.build({
  $black: '#242424',
  $blue: '#3C87EC',
  $yellow: '#F9C006',
  $lightGray: '#EFEFEF',
});

export default StackNavigator({
  WelcomeScene: {
    screen: WelcomeScene,
    navigationOptions: {
      header: null,
    },
  },
  CountryListScene: {
    screen: CountryListScene,
    navigationOptions: {
      headerLeft: null,
      headerStyle: {
        backgroundColor: EStyleSheet.value('$yellow'),
      },
      headerTitle: 'Countries',
      headerTitleStyle: {
        fontSize: 26,
        fontWeight: '800'
      }
    }
  },
});