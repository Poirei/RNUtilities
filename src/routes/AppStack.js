import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import GalleryScreen from '../screens/GalleryScreen';
import LocationScreen from '../screens/LocationScreen';
import TodoScreen from '../screens/TodoScreen';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Gallery') {
            iconName = focused ? 'images' : 'images-outline';
          } else if (route.name === 'Location') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === 'Todo') {
            iconName = focused
              ? 'checkmark-done-circle'
              : 'checkmark-done-circle-outline';
          }
          return <IonIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#fa9e9e',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Gallery" component={GalleryScreen} />
      <Tab.Screen name="Location" component={LocationScreen} />
      <Tab.Screen name="Todo" component={TodoScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;
