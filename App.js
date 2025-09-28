import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import ProductScreen from './src/screens/ProductScreen';

const Tab = createBottomTabNavigator();

// Geçici ekranlar
const BarcodeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Barkod Okuyucu</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Ayarlar</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ffffff',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 1,
              borderBottomColor: '#e5e5e5',
            },
            headerTintColor: '#171717',
            headerTitleStyle: {
              fontWeight: '600',
            },
            tabBarActiveTintColor: '#e63f5b',
            tabBarInactiveTintColor: '#737373',
          }}
        >
          <Tab.Screen 
            name="Products" 
            component={ProductScreen}
            options={{ title: 'Ürünler' }}
          />
          <Tab.Screen 
            name="Barcode" 
            component={BarcodeScreen}
            options={{ title: 'Barkod' }}
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{ title: 'Ayarlar' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
