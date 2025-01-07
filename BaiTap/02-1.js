import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('blue'); // Trạng thái màu nền
  return (
      <View style={[styles.square, { backgroundColor }]}>
        <Text style={styles.text}>Hello, World</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
