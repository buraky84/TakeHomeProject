/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Invest} from './src/ui/pages/invest/Index';
import {News} from './src/ui/pages/news/Index';
import {Track} from './src/ui/pages/track/Index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: 83,
              alignItems: 'center',
              backgroundColor: '#14121E',
              borderTopWidth: 1,
              borderTopColor: '#262334',
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Invest"
            component={Invest}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Ionicons name="home-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Track"
            component={Track}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="track-changes" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="News"
            component={News}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Ionicons
                  name="ios-newspaper-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#14121E',
  },
});

export default App;
