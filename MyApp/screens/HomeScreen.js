import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello 👋</Text>
      <Text style={styles.subtitle}>Christie Doe</Text>

      {/* Các ô thống kê */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSubtitle}>Scanned 483</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSubtitle}>Counterfeited 32</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSubtitle}>Checkouts 8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSubtitle}>History 26</Text>
        </TouchableOpacity>
      </View>

      {/* Nút chuyển sang ScanScreen */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Scan')}>
        <Text style={styles.buttonText}>Go to Scan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {  flex: 1, 
                padding: 20, 
                backgroundColor: 'white' },
  title: {  fontSize: 24, 
            fontWeight: 'bold' },
  subtitle: {   fontSize: 16, 
                color: 'gray', 
                marginBottom: 20 },
  grid: {   flexDirection: 'row', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between' },
  card: {   width: '48%', 
            padding: 20, 
            backgroundColor: '#f1f1f1', 
            borderRadius: 10, 
            marginBottom: 10 },
  cardTitle: {  fontSize: 16, 
                fontWeight: 'bold' },
  cardSubtitle: {   fontSize: 14, 
                    color: 'gray' },
  button: {     marginTop: 20, 
                backgroundColor: '#3498db', 
                padding: 15, 
                borderRadius: 10 },
  buttonText: { color: 'white', 
                textAlign: 'center', 
                fontWeight: 'bold' },
});

export default HomeScreen;
