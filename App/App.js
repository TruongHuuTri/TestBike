// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import BikeShopScreen from './components/BikeShopScreen';
import BikeDetailScreen from './components/BikeDetailScreen';
import AddBikeScreen from './components/AddBikeScreen'; // Đảm bảo bạn đã nhập đúng

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BikeShop"
            component={BikeShopScreen}
            options={{ title: 'Bike Shop' }}
          />
          <Stack.Screen
            name="BikeDetail"
            component={BikeDetailScreen}
            options={{ title: 'Bike Detail' }}
          />
          <Stack.Screen
            name="AddBike"
            component={AddBikeScreen}
            options={{ title: 'Add New Bike' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
