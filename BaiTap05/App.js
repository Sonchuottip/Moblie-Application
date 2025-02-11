import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

const ColorButton = ({ color, title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={() => onPress(color)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const colors = [
    { title: "GREEN", color: "green" },
    { title: "BLUE", color: "blue" },
    { title: "BROWN", color: "brown" },
    { title: "YELLOW", color: "yellow" },
    { title: "RED", color: "red" },
    { title: "BLACK", color: "black" },
  ];

  return (
    <View style={[styles.container, { backgroundColor }]}> 
      {colors.map((item, index) => (
        <ColorButton key={index} title={item.title} color={item.color} onPress={setBackgroundColor} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 80,
    padding: 15,
    marginBottom:30,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
