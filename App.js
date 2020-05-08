import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen'; // Part 4: added
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import CounterScreenReducer from './src/screens/CounterScreen_wReducer';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreenReducer from './src/screens/SquareScreen_wReducer';
import TextScreen from './src/screens/TextScreen';

// This is from library "React Navigation"
const navigator = createStackNavigator(
  { 
    Home: HomeScreen,
    Components: ComponentsScreen, // Part 4: added
    List: ListScreen,
    ImageScreen: ImageScreen,
    Counter: CounterScreen,
    CounterReducer: CounterScreenReducer,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareReducer: SquareScreenReducer,
    Text: TextScreen
  },
  {
    initialRouteName: "Home", // // Part 4: commented
    //initialRouteName: 'List', //'Components', // // Part 4: added; 1st component to be shown
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
