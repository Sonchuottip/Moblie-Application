import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MainScreen({ route }) {
  // Nếu muốn lấy dữ liệu (ví dụ: phoneNumber) được truyền từ LoginScreen
  const { phoneNumber } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bạn đã đăng nhập thành công</Text>
      {phoneNumber && (
        <Text style={styles.phoneText}>Số điện thoại: {phoneNumber}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  phoneText: {
    fontSize: 16,
    color: "black",
  },
});
