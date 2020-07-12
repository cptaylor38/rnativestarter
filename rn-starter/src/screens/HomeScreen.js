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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
