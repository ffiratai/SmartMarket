import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// Ürünler Ekranı
const ProductScreen = () => {
  const [productName, setProductName] = React.useState('');
  const [barcode, setBarcode] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const handleSave = () => {
    if (!productName || !price || !quantity) {
      Alert.alert('Uyarı', 'Lütfen zorunlu alanları doldurun');
      return;
    }
    Alert.alert('Başarılı', 'Ürün kaydedildi!');
    setProductName('');
    setBarcode('');
    setPrice('');
    setQuantity('');
  };

  const handleClear = () => {
    setProductName('');
    setBarcode('');
    setPrice('');
    setQuantity('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Yeni Ürün Ekle</Text>
        
        <View style={styles.card}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ürün Adı *</Text>
            <TextInput
              style={styles.input}
              value={productName}
              onChangeText={setProductName}
              placeholder="Ürün adını giriniz"
              placeholderTextColor="#a3a3a3"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Barkod</Text>
            <TextInput
              style={styles.input}
              value={barcode}
              onChangeText={setBarcode}
              placeholder="Barkod numarası"
              placeholderTextColor="#a3a3a3"
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.label}>Fiyat (₺) *</Text>
              <TextInput
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                placeholder="0.00"
                placeholderTextColor="#a3a3a3"
                keyboardType="numeric"
              />
            </View>

            <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
              <Text style={styles.label}>Adet *</Text>
              <TextInput
                style={styles.input}
                value={quantity}
                onChangeText={setQuantity}
                placeholder="0"
                placeholderTextColor="#a3a3a3"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonPrimary} onPress={handleSave}>
          <Text style={styles.buttonTextPrimary}>Ürünü Kaydet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonOutline} onPress={handleClear}>
          <Text style={styles.buttonTextOutline}>Temizle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Barkod Ekranı
const BarcodeScreen = () => {
  return (
    <View style={styles.centerContainer}>
      <Ionicons name="barcode-outline" size={64} color="#e63f5b" />
      <Text style={styles.screenTitle}>Barkod Okuyucu</Text>
      <Text style={styles.screenSubtitle}>Kamera ile barkod okuyabilirsiniz</Text>
      <TouchableOpacity 
        style={styles.buttonPrimary}
        onPress={() => Alert.alert('Bilgi', 'Barkod okuyucu yakında eklenecek!')}
      >
        <Text style={styles.buttonTextPrimary}>Kamera İzni Ver</Text>
      </TouchableOpacity>
    </View>
  );
};

// Ayarlar Ekranı
const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Genel Ayarlar</Text>
        
        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => Alert.alert('Bildirimler', 'Bildirim ayarları yakında eklenecek')}
        >
          <View style={styles.settingLeft}>
            <Ionicons name="notifications-outline" size={24} color="#e63f5b" />
            <Text style={styles.settingText}>Bildirimler</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#737373" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => Alert.alert('Karanlık Mod', 'Karanlık mod yakında eklenecek')}
        >
          <View style={styles.settingLeft}>
            <Ionicons name="moon-outline" size={24} color="#e63f5b" />
            <Text style={styles.settingText}>Karanlık Mod</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#737373" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => Alert.alert('Dil', 'Dil seçimi yakında eklenecek')}
        >
          <View style={styles.settingLeft}>
            <Ionicons name="language-outline" size={24} color="#e63f5b" />
            <Text style={styles.settingText}>Dil Seçimi</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#737373" />
        </TouchableOpacity>

        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Hakkında</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="information-circle-outline" size={24} color="#e63f5b" />
            <Text style={styles.settingText}>Versiyon: 1.0.0</Text>
          </View>
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Ionicons name="person-outline" size={24} color="#e63f5b" />
            <Text style={styles.settingText}>Geliştirici: Fırat AI</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Ana App Komponenti
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

// Stil Tanımlamaları
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  content: {
    padding: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#171717',
    marginBottom: 24,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#171717',
    marginTop: 16,
  },
  screenSubtitle: {
    fontSize: 14,
    color: '#737373',
    marginTop: 8,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#737373',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#525252',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e5e5e5',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#171717',
  },
  row: {
    flexDirection: 'row',
  },
  buttonPrimary: {
    backgroundColor: '#e63f5b',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonTextPrimary: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: '#e63f5b',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonTextOutline: {
    color: '#e63f5b',
    fontSize: 16,
    fontWeight: '600',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    color: '#171717',
    marginLeft: 12,
  },
});