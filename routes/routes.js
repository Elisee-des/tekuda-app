import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthRoute from "../routes/AuthRoutes/AuthRoute";
const Stack = createStackNavigator();

function Routes ()
{
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#2E8B57',
          },
          headerTintColor: '#fff',
        }}
        tabBarOptions={{
          activeTintColor: '#3b82f6',
          inactiveTintColor: '#6b7280',
          style: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 0,
          },
          labelStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="AuthRoutes"
          component={AuthRoute}
        />
        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;