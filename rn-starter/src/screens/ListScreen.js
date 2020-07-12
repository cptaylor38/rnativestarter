import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const names = [
    { name: 'Susan', age: '42' },
    { name: 'Karen', age: '37' },
    { name: 'Chad', age: '38' },
    { name: 'Brad', age: '23' },
  ];

  return (
    <View>
      <FlatList
        data={names}
        renderItem={({ item }) => (
          <View style={styles.textStyle}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        )}
        keyExtractor={(friend) => friend.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
