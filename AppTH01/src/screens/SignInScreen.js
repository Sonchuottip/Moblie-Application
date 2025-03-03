import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

// Sử dụng require để import ảnh
const onboardingImage = require('../../assets/images/MaskGroup.png');

const SignInScreen = () => {
  const [countryCode, setCountryCode] = useState("BD"); // Bangladesh mặc định
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      {/* Hình ảnh onboarding */}
      <Image source={onboardingImage} style={styles.headerImage} />

      {/* Tiêu đề */}
      <Text style={styles.title}>Get your groceries</Text>
      <Text style={styles.subtitle}>with nectar</Text>

      {/* Ô nhập số điện thoại */}
      <View style={styles.phoneContainer}>
        <CountryPicker
          withFlag
          countryCode={countryCode}
          withCallingCode
          withFilter
          onSelect={(country) => setCountryCode(country.cca2)}
          containerButtonStyle={styles.countryPicker}
        />
        <Text style={styles.callingCode}>+880</Text>
        <TextInput
          style={styles.phoneInput}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          placeholderTextColor="#999"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Hoặc kết nối qua mạng xã hội */}
      <Text style={styles.orText}>Or connect with social media</Text>

      {/* Nút đăng nhập với Google */}
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#4285F4" }]}>
        <AntDesign name="google" size={20} color="white" />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Nút đăng nhập với Facebook */}
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#3b5998" }]}>
        <FontAwesome name="facebook" size={20} color="white" />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    margin:-10,
    padding:0,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#555",
    marginBottom: 20,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    width: "90%",
    marginBottom: 15,
  },
  countryPicker: {
    marginRight: 10,
  },
  callingCode: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  orText: {
    fontSize: 14,
    color: "#999",
    marginVertical: 10,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: "white",
    marginLeft: 10,
  },
});

export default SignInScreen;
