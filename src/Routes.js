import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Beranda from './Screens/Beranda';
import LihatArtikel from './Screens/LihatArtikel';
import 'react-native-gesture-handler';

const stacks = createStackNavigator(
  {
    Beranda,
    LihatArtikel,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(stacks);