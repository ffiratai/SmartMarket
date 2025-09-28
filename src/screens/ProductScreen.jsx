import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Alert } from 'react-native';
import StitchButton from '../components/StitchButton';

const ProductScreen = () => {
  const [productName, setProductName] = useState('');
  const [barcode, setBarcode] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSave = () => {
    if (!productName || !price || !quantity) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun');
      return;
    }
    Alert.alert('Başarılı', 'Ürün kaydedildi!');
    // Formu temizle
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
            <Text style={styles.label}>Ürün Adı</Text>
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
              <Text style={styles.label}>Fiyat (₺)</Text>
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
              <Text style={styles.label}>Adet</Text>
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

        <View style={styles.buttonContainer}>
          <StitchButton
            title="Ürünü Kaydet"
            variant="primary"
            size="large"
            onPress={handleSave}
          />
          <View style={{ height: 12 }} />
          <StitchButton
            title="Temizle"
            variant="outline"
            size="large"
            onPress={() => {
              setProductName('');
              setBarcode('');
              setPrice('');
              setQuantity('');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#171717',
    marginBottom: 24,
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
  buttonContainer: {
    marginTop: 24,
  },
});

export default ProductScreen;