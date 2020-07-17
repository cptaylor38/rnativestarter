import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

let adjustValue = 5;

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.red + action.amount > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const RGBScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <View>
        <Text>Red: {red}</Text>
        <Button
          title='More red'
          onPress={() => dispatch({ type: 'change_red', payload: adjustValue })}
        />
        <Button
          title='Less red'
          onPress={() =>
            dispatch({ type: 'change_red', payload: -1 * adjustValue })
          }
        />
      </View>
      <View>
        <Text>Green: {green}</Text>
        <Button
          title='More green'
          onPress={() =>
            dispatch({ type: 'change_green', payload: adjustValue })
          }
        />
        <Button
          title='Less green'
          onPress={() =>
            dispatch({ type: 'change_green', payload: -1 * adjustValue })
          }
        />
      </View>
      <View>
        <Text>Blue: {blue}</Text>
        <Button
          title='More blue'
          onPress={() =>
            dispatch({ type: 'change_blue', payload: adjustValue })
          }
        />
        <Button
          title='Less blue'
          onPress={() =>
            dispatch({ type: 'change_blue', payload: -1 * adjustValue })
          }
        />
      </View>
      <View
        style={{
          minWidth: 200,
          minHeight: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      >
        <Text>
          rgb&#40;{red},{green},{blue}&#41;
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RGBScreen;

//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);
//   let adjustValue = 5;
//   const setColor = (color, change) => {
// //     switch (color) {
// //       case 'red':
// //         red + change > 255 || red + change < 0 ? null : setRed(red + change);
// //         return;
// //       case 'green':
// //         green + change > 255 || green + change < 0
// //           ? null
// //           : setGreen(green + change);
// //         return;
// //       case 'blue':
// //         blue + change > 255 || blue + change < 0
// //           ? null
// //           : setBlue(blue + change);
// //         return;
// //       default:
// //         return;
// //     }
//     // if (operand === '+') {
//     //   if (color + adjustValue <= 255) {
//     //     return color + adjustValue;
//     //   } else return color;
//     // }
//     // if (operand === '-') {
//     //   if (color - adjustValue >= 0) {
//     //     return color - adjustValue;
//     //   } else return color;
//     // }
//   };
