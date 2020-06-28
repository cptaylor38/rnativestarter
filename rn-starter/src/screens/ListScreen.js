import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const names = [
    { name: 'Susan' },
    { name: 'Karen' },
    { name: 'Chad' },
    { name: 'Brad' },
  ];

  const colors = ['red', 'blue', 'orange', 'green', 'yellow'];

  return (
    <View>
      <FlatList
        data={names}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(friend) => friend.name}
      />
      <FlatList
        data={colors}
        renderItem={(color) => <Text>{color.item}</Text>}
        keyExtractor={(color) => color}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
