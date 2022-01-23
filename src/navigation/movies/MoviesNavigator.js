import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/movies/HomeScreen';
import SearchScreen from '../../screens/movies/SearchScreen';

const MoviesNavigation = createNativeStackNavigator();
const MoviesNavigator = () => {
  return (
    <MoviesNavigation.Navigator initialRouteName="Home" headerMode="none">
      <MoviesNavigation.Screen
        component={HomeScreen}
        name="Home"
        options={{headerShown: false}}
      />
      <MoviesNavigation.Screen
        component={SearchScreen}
        name="Search"
        options={{headerShown: false}}
      />
    </MoviesNavigation.Navigator>
  );
};

export default MoviesNavigator;
