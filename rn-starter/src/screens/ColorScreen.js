import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [color, setColor] = useState('white');
  const [colorBoxes, setColorBoxes] = useState([]);

  const getRandomColors = () => {
    let numberArray = [];
    for (let i = 0; i < 3; i++) {
      numberArray.push(Math.round(Math.random() * 255));
    }
    return numberArray;
  };

  const createDiv = (color) => {
    setColorBoxes(colorBoxes.concat(color));
  };

  useEffect(() => {
    createDiv(color);
  }, [color]);

  return (
    <View>
      <Button
        title='Generate Random Color'
        onPress={() => {
          setColor(`rgb(${getRandomColors()})`);
        }}
      />
      <View>
        <FlatList
          data={colorBoxes}
          contentContainerStyle={styles.boxContainer}
          renderItem={(item) => (
            <Text
              style={{
                height: 50,
                width: 50,
                backgroundColor: item.item,
                flex: 1,
              }}
            ></Text>
          )}
          keyExtractor={(color, index) => (color + index).toString()}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ColorScreen;
