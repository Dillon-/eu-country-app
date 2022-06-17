import { createAppContainer, StackNavigator } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import EStyleSheet from 'react-native-extended-stylesheet-forked';
import CountryListScene from './src/scenes/CountryListScene/CountryListScene';
import WelcomeScene from './src/scenes/WelcomeScene/WelcomeScene';


EStyleSheet.build({
  $black: '#242424',
  $blue: '#3C87EC',
  $yellow: '#F9C006',
  $lightGray: '#EFEFEF',
});



const navigator = createStackNavigator(
{
  WelcomeScene,
  CountryListScene
},
{
  initialRouterName: 'WelcomeScene'
}
); 

const App = createAppContainer(navigator);

export default () => {
  return (
    <App />
  )

};

/*
// /\ - New
----------------------------------
// \/ - Existing


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
*/