import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Phần nền xanh trên cùng */}
      <View style={styles.headerBackground} />

      {/* Nội dung chính */}
      <View style={styles.profileContainer}>
        <Text style={styles.userName}>{user?.name || "Hung Nguyen"}</Text>
        <Text style={styles.jobTitle}>Mobile developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development, now I am learning React Native
        </Text>

        {/* Nút Sign Out */}
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  headerBackground: {
    height: 120, // Tăng chiều cao để không bị dồn
    backgroundColor: "#00AEEF",
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: -30, // Đưa nội dung xuống để không bị dính vào header
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: -50, // Căn chỉnh khoảng cách với header xanh
  },
  jobTitle: {
    fontSize: 16,
    color: "#00AEEF",
    marginTop: 10, // Tạo khoảng cách rõ ràng hơn
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginVertical: 15, // Khoảng cách giữa mô tả và nút Sign Out
    paddingHorizontal: 10, // Căn chỉnh text không bị sát mép
  },
  logoutButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8, // Bo góc mượt hơn
    marginTop: 20, // Tạo khoảng cách rõ ràng giữa mô tả và nút
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AccountScreen;
