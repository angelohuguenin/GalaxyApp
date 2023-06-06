import 'react-native-gesture-handler';
import * as React from 'react' 
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import MeteorScreen from './screens/MeteorScreen';
import IssLocationScreen from './screens/IssLocationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator InitialRouteName="Home" ScreenOptions={{HeaderShown:false}}>
        <Stack.Screen name="Home" Component={HomeScreen}/> 
        <Stack.Screen name="Meteor" Component={MeteorScreen}/> 
        <Stack.Screen name="Iss" Component={IssLocationScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

