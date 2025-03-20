import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Payment Success, Yayy! 🎉</Text>
      <Text style={styles.description}>We will send order details to your email.</Text>

      {/* Nút Download Invoice */}
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
  successText: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: 'gray', textAlign: 'center' },
  downloadButton: { backgroundColor: '#3498db', padding: 15, borderRadius: 10, marginTop: 20 },
  downloadText: { color: 'white', fontWeight: 'bold' },
});

export default SuccessScreen;
