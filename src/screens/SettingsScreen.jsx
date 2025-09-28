import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  const handleClearData = () => {
    Alert.alert(
      'Veriyi Temizle',
      'Tüm uygulama verilerini silmek istediğinizden emin misiniz?',
      [
        { text: 'İptal', style: 'cancel' },
        { text: 'Sil', onPress: () => Alert.alert('Başarılı', 'Veriler temizlendi'), style: 'destructive' }
      ]
    );
  };

  const SettingItem = ({ icon, title, subtitle, rightElement }) => (
    <View style={styles.settingItem}>
      <View style={styles.settingLeft}>
        <Ionicons name={icon} size={24} color="#e63f5b" />
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{title}</Text>
          {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      {rightElement}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Genel</Text>
        
        <SettingItem
          icon="notifications-outline"
          title="Bildirimler"
          subtitle="Stok uyarıları için bildirim al"
          rightElement={
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#e5e5e5', true: '#fbd0d5' }}
              thumbColor={notifications ? '#e63f5b' : '#737373'}
            />
          }
        />

        <SettingItem
          icon="moon-outline"
          title="Karanlık Mod"
          subtitle="Göz yorgunluğunu azalt"
          rightElement={
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#e5e5e5', true: '#fbd0d5' }}
              thumbColor={darkMode ? '#e63f5b' : '#737373'}
            />
          }
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Veri Yönetimi</Text>
        
        <SettingItem
          icon="cloud-upload-outline"
          title="Otomatik Yedekleme"
          subtitle="Verileri buluta yedekle"
          rightElement={
            <Switch
              value={autoBackup}
              onValueChange={setAutoBackup}
              trackColor={{ false: '#e5e5e5', true: '#fbd0d5' }}
              thumbColor={autoBackup ? '#e63f5b' : '#737373'}
            />
          }
        />

        <TouchableOpacity onPress={handleClearData}>
          <SettingItem
            icon="trash-outline"
            title="Veriyi Temizle"
            subtitle="Tüm uygulama verilerini sil"
            rightElement={<Ionicons name="chevron-forward" size={20} color="#737373" />}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hakkında</Text>
        
        <SettingItem
          icon="information-circle-outline"
          title="Versiyon"
          subtitle="1.0.0"
          rightElement={null}
        />

        <SettingItem
          icon="person-outline"
          title="Geliştirici"
          subtitle="Fırat Ai"
          rightElement={null}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  section: {
    backgroundColor: '#ffffff',
    marginVertical: 8,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#737373',
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: 12,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: '#171717',
  },
  settingSubtitle: {
    fontSize: 13,
    color: '#737373',
    marginTop: 2,
  },
});

export default SettingsScreen;