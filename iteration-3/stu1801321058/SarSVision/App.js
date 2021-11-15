import 'react-native-gesture-handler';
import React, {Fragment} from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import RegisterForm from './containers/RegisterForm';
import {NativeBaseProvider} from 'native-base';
import Locations from './containers/Locations';
import LocationInfo from './containers/LocationInfo';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const store = createStore(rootReducer);

const App = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Register Form"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Register Form" component={RegisterForm} />
            <Stack.Screen name="Locations" component={Locations} />
            <Stack.Screen name="LocationInfo" component={LocationInfo} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Locations" component={Locations} />
            <Drawer.Screen name="Account" component={LocationInfo} />
          </Drawer.Navigator>
        </NavigationContainer> */}
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
