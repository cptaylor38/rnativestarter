import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
  return <Text styles={styles.text}>Component Screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 64,
  },
});

export default ComponentScreen;
