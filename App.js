/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
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
import {Provider} from 'react-redux';
import store from './src/redux/configureStore';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './src/assets/fonts/selection.json';
const CustomIcoMoonIcons = createIconSetFromIcoMoon(icoMoonConfig);

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                paddingTop: 8,
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
                  <CustomIcoMoonIcons name="Wallet" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Track"
              component={Track}
              options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                  <CustomIcoMoonIcons
                    name="Tracker"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="News"
              component={News}
              options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                  <CustomIcoMoonIcons name="News" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#14121E',
  },
});

export default App;
