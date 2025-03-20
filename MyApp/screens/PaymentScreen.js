import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  const navigation = useNavigation();

  const handlePayment = () => {
    navigation.navigate('Success'); // Chuyển sang màn hình thành công
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      
      {/* Chọn phương thức thanh toán */}
      <View style={styles.paymentOptions}>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentText}>💳 Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentText}> Apple Pay</Text>
        </TouchableOpacity>
      </View>

      {/* Nhập thông tin thẻ */}
      <Text style={styles.label}>Card Number</Text>
      <TextInput style={styles.input} placeholder="5261 4141 0151 8472" keyboardType="number-pad" />

      <Text style={styles.label}>Cardholder Name</Text>
      <TextInput style={styles.input} placeholder="Christie Doe" />

      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Expiry Date</Text>
          <TextInput style={styles.input} placeholder="06 / 2024" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>CVV / CVC</Text>
          <TextInput style={styles.input} placeholder="915" secureTextEntry />
        </View>
      </View>

      {/* Nút Thanh toán */}
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payText}>Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  paymentOptions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  paymentButton: { backgroundColor: 'green', padding: 10, borderRadius: 10 },
  paymentText: { color: 'white', fontWeight: 'bold' },
  label: { fontSize: 14, fontWeight: 'bold', marginTop: 10 },
  input: { backgroundColor: '#f8f8f8', padding: 10, borderRadius: 10, marginTop: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  payButton: { backgroundColor: 'green', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  payText: { fontSize: 18, color: 'white', fontWeight: 'bold' },
});

export default PaymentScreen;
