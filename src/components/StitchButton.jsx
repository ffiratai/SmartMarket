import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';

const StitchButton = ({ 
  title, 
  onPress, 
  variant = 'primary', 
  size = 'medium', 
  loading = false,
  disabled = false
}) => {
  
  const getVariantStyles = () => {
    switch(variant) {
      case 'primary':
        return {
          container: { backgroundColor: '#e63f5b' },
          text: { color: '#ffffff' }
        };
      case 'secondary':
        return {
          container: { backgroundColor: '#f5f5f5', borderWidth: 1, borderColor: '#e5e5e5' },
          text: { color: '#171717' }
        };
      case 'outline':
        return {
          container: { backgroundColor: 'transparent', borderWidth: 2, borderColor: '#e63f5b' },
          text: { color: '#e63f5b' }
        };
      default:
        return {
          container: { backgroundColor: '#e63f5b' },
          text: { color: '#ffffff' }
        };
    }
  };

  const getSizeStyles = () => {
    switch(size) {
      case 'small':
        return {
          container: { paddingHorizontal: 12, paddingVertical: 8 },
          text: { fontSize: 14 }
        };
      case 'large':
        return {
          container: { paddingHorizontal: 24, paddingVertical: 16 },
          text: { fontSize: 18 }
        };
      default:
        return {
          container: { paddingHorizontal: 16, paddingVertical: 12 },
          text: { fontSize: 16 }
        };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        {
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: disabled ? 0.5 : 1
        },
        variantStyles.container,
        sizeStyles.container
      ]}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={variantStyles.text.color} />
      ) : (
        <Text style={[
          { fontWeight: '600' },
          variantStyles.text,
          sizeStyles.text
        ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default StitchButton;