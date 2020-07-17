import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  ImagePropTypes,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button
        title='Go to components demo.'
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title='Go to list demo.'
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title='Go to image screen.'
        onPress={() => navigation.navigate('ImageScreen')}
      />
      <Button
        title='Go to counter screen.'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go to colors screen.'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go to color picker.'
        onPress={() => navigation.navigate('ColorPicker')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
