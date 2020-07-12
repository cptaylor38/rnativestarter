import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ImageDetail from './ImageDetail';

const ImageScreen = () => {
  const imgArray = [
    {
      id: 1,
      imgSrc:
        'https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      imgDetail: 'rainbow',
    },
    {
      id: 2,
      imgSrc:
        'https://images.unsplash.com/photo-1543076499-a6133cb932fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      imgDetail: 'cave',
    },
    {
      id: 3,
      imgSrc:
        'https://images.unsplash.com/photo-1496196614460-48988a57fccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
      imgDetail: 'turtle',
    },
  ];
  return (
    <View>
      <FlatList
        data={imgArray}
        keyExtractor={(item, index) => (item + index).toString()}
        renderItem={({ item }) => (
          <ImageDetail title={item.imgDetail} src={item.imgSrc} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
