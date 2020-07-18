import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box1</Text>
      <Text style={styles.textStyle}>Box2</Text>
      <Text style={styles.textStyle}>Box3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  },
});

export default BoxScreen;
