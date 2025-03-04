import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SignInScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      {/* Quên mật khẩu */}
      <TouchableOpacity onPress={() => {}} style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => login(email, password)} style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>
      <View style={styles.socialContainer}>
        <FontAwesome.Button 
          name="google" 
          backgroundColor="#db4a39" 
          style={styles.socialButton}
          onPress={() => {}}
        >
          Google
        </FontAwesome.Button>
        <FontAwesome.Button 
          name="facebook" 
          backgroundColor="#3b5998" 
          style={styles.socialButton}
          onPress={() => {}}
        >
          Facebook
        </FontAwesome.Button>
      </View>

      <Text style={styles.signUpText}>
        Not yet a member?{" "}
        <Text style={styles.signUpLink} onPress={() => {}}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 20 
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 20 
  },
  label: { 
    fontSize: 16, 
    fontWeight: "bold",
    marginBottom: 5 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 10, 
    borderRadius: 5, 
    marginBottom: 10 
  },
  forgotPasswordContainer: { 
    alignSelf: "flex-end", 
    marginBottom: 15 
  },
  forgotPasswordText: { 
    color: "#FFA500", 
    fontSize: 14, 
    fontWeight: "bold" 
  },
  signInButton: { 
    backgroundColor: "#FFA500", 
    paddingVertical: 15, 
    borderRadius: 5, 
    alignItems: "center" 
  },
  signInText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  orText: { 
    textAlign: "center",
    fontWeight: "bold",
    padding: 10, 
    marginVertical: 10 
  },
  socialContainer: { 
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-between", // Tránh khoảng cách quá lớn
    gap: 10,
    marginVertical: 5,
    width: "100%",  // Giữ nó cùng chiều rộng với input và button
    height:50,
    alignSelf: "center" // Để đảm bảo nó nằm đúng vị trí
  },
  socialButton: { 
    flex: 1, // Chia đều kích thước cho 2 nút
    minWidth: 150, // Đảm bảo không quá nhỏ
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 5 
  },
  
  signUpText: { 
    textAlign: "center", 
    marginTop: 20 
  },
  signUpLink: { 
    color: "#FFA500", 
    fontWeight: "bold" 
  }
});

export default SignInScreen;
