import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen'; // Part 4: added

// This is from library "React Navigation"
const navigator = createStackNavigator(
  { 
    Home: HomeScreen,
    Components: ComponentsScreen // Part 4: added
  },
  {
    //initialRouteName: "Home", // // Part 4: commented
    initialRouteName: 'Components', // // Part 4: added; 1st component to be shown
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
