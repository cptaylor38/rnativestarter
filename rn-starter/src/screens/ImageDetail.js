import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetail = ({ title, src }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image style={styles.imgStyle} source={{ uri: src }} />
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 200,
    height: 200,
  },
});

export default ImageDetail;
