import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OTPVerificationScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    // Xử lý xác thực OTP (giả lập thành công)
    if (otp.length === 6) {
      navigation.navigate('Home');
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Enter the 6-digit code sent to your phone</Text>
      <TextInput
        style={styles.otpInput}
        keyboardType="numeric"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: 'gray', marginBottom: 20 },
  otpInput: { borderBottomWidth: 2, width: '50%', fontSize: 20, textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#3498db', padding: 15, borderRadius: 10, width: '80%', alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
});

export default OTPVerificationScreen;