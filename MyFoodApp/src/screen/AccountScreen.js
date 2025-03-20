import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Header chứa avatar */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=3" }} // Thay bằng ảnh thật của user
          style={styles.avatar}
        />
      </View>

      {/* Phần thông tin người dùng */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user?.email || "Guest User"}</Text>
        <Text style={styles.role}>Mobile Developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development, now I am learning React Native
        </Text>

        {/* Nút Sign Out */}
        <TouchableOpacity style={styles.signOutButton} onPress={logout}>
          <Text style={styles.signOutText}>Sign Out</Text>
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
  header: {
    backgroundColor: "#2196F3",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    position: "absolute",
    bottom: -50,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  role: {
    fontSize: 16,
    color: "#2196F3",
    marginVertical: 5,
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    marginVertical: 10,
  },
  signOutButton: {
    backgroundColor: "#FF9800",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  signOutText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AccountScreen;
