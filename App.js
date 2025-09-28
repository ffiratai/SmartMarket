import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductScreen from './src/screens/ProductScreen';

const Tab = createBottomTabNavigator();

// Geçici ekranlar
const BarcodeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa' }}>
    <Ionicons name="barcode-outline" size={48} color="#e63f5b" />
    <Text style={{ marginTop: 16, fontSize: 18, color: '#525252' }}>Barkod Okuyucu</Text>
    <Text style={{ marginTop: 8, fontSize: 14, color: '#a3a3a3' }}>Yakında eklenecek...</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa' }}>
    <Ionicons name="settings-outline" size={48} color="#e63f5b" />
    <Text style={{ marginTop: 16, fontSize: 18, color: '#525252' }}>Ayarlar</Text>
    <Text style={{ marginTop: 8, fontSize: 14, color: '#a3a3a3' }}>Yakında eklenecek...</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              
              if (route.name === 'Products') {
                iconName = focused ? 'cube' : 'cube-outline';
              } else if (route.name === 'Barcode') {
                iconName = focused ? 'barcode' : 'barcode-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              
              return <Ionicons name={iconName} size={size} color={color} />;
            },
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
            tabBarStyle: {
              backgroundColor: '#ffffff',
              borderTopWidth: 1,
              borderTopColor: '#e5e5e5',
              paddingBottom: 5,
              paddingTop: 5,
            }
          })}
        >
          <Tab.Screen 
            name="Products" 
            component={ProductScreen}
            options={{ 
              title: 'Ürünler',
              tabBarLabel: 'Ürünler'
            }}
          />
          <Tab.Screen 
            name="Barcode" 
            component={BarcodeScreen}
            options={{ 
              title: 'Barkod',
              tabBarLabel: 'Barkod'
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{ 
              title: 'Ayarlar',
              tabBarLabel: 'Ayarlar'
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}