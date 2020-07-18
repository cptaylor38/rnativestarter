import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const InputScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter Name: </Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default InputScreen;
