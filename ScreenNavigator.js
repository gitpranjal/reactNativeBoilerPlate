import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "./src/screens/HomeScreen";
import TextInputModal from './src/screens/TextInputModal';
import InspectionForm from "./src/screens/InspectionForm"
import LoginScreen from "./src/screens/LoginScreen"

const ScreenNavigator = createStackNavigator(
    {
      HomeScreen: HomeScreen,
      InspectionForm: InspectionForm,
      TextInputModal: TextInputModal,
      LoginScreen: LoginScreen
    
    },
    {
      initialRouteName: "HomeScreen",
      defaultNavigationOptions: {
        title: "App"
      }
    }
  );


  export default createAppContainer(ScreenNavigator)