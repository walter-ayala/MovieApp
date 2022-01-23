import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import AuthStackNavigator from './auth/AuthNavigator';
import MoviesNavigator from './movies/MoviesNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const {isAuthenticated} = useSelector(state => state.auth);

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen
          name="Movies"
          component={MoviesNavigator}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
