import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Ảnh chai nước cam */}
      <Image source={require('../assets/juice.png')} style={styles.image} />

      {/* Thông tin sản phẩm */}
      <View style={styles.overlay}>
        <Text style={styles.label}>Lauren's</Text>
        <Text style={styles.name}>Orange Juice</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', justifyContent: 'center', alignItems: 'center' },
  backButton: { position: 'absolute', top: 50, left: 20, backgroundColor: '#ddd', padding: 10, borderRadius: 10 },
  backText: { fontSize: 20, fontWeight: 'bold' },
  image: { width: 200, height: 400, resizeMode: 'contain' },
  overlay: { position: 'absolute', bottom: 50, backgroundColor: 'white', padding: 20, borderRadius: 10 },
  label: { fontSize: 14, color: 'gray' },
  name: { fontSize: 18, fontWeight: 'bold' },
});

export default ScanScreen;
