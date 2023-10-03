import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/AuthScreen/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

const AuthRoute = () => {
    return

    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2E8B57',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Connexion',
          headerTitleAlign: 'center',
        }}
      />
      </Stack.Navigator>
} 

export default AuthRoute
