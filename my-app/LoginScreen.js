import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (phoneRegex.test(phone)) {
      setErrorMessage("");
      return true;
    } else {
      setErrorMessage("Số điện thoại không hợp lệ!");
      return false;
    }
  };

  const handleContinue = () => {
    if (validatePhoneNumber(phoneNumber)) {
      alert(`Số điện thoại bạn đã nhập: ${phoneNumber}`);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={20}
    >
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.header}>
          <Text style={styles.title}>Đăng nhập</Text>
          <View style={styles.line} />
        </View>

        <Text style={styles.description1}>Nhập số điện thoại</Text>
        <Text style={styles.description2}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => {
            setPhoneNumber(text);
            validatePhoneNumber(text);
          }}
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: phoneNumber && !errorMessage ? "#0066cc" : "#d9d9d9" },
        ]}
        onPress={handleContinue}
        disabled={!phoneNumber || !!errorMessage} // Chuyển errorMessage thành boolean
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
  inner: {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  header: {
    marginTop: 30,
  },
  line: {
    height: 1,
    backgroundColor: "#ccc",
    width: "100%",
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  description1: {
    marginTop: 30,
    fontSize: 20,
    color: "black",
    marginBottom: 20,
  },
  description2: {
    fontSize: 14,
    color: "black",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
