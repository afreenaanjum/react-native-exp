import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../components/SplashScreen/index';
import Landing from '../components/Landing/index';
import SignUp from '../components/SignUpSignIn';
import colors from '../utils/Colors';
import HomePage from '../components/HomePage';
import RightNavigationButtons from '../components/HomePage/RightNavButtons/index';
import DrawerNavigation from '../navigation/sideNavigator';

const Stack = createStackNavigator();

const RootStack = ({navigation}) => {
  const appScreenOptions = {
    headerStyle: {
      backgroundColor: colors.primaryColor,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <Stack.Navigator screenOptions={appScreenOptions} initialRouteName="Home">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Sign Up'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
