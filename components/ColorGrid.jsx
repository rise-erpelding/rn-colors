import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export const ColorGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.topLeft} />
        <View style={styles.topRight} />
      </View>
      <View style={styles.row}>
        <View style={styles.bottomLeft} />
        <View style={styles.bottomRight} />
      </View>
    </View>
  );
}

const styleVariables = {
  containerSize: 160,
  boxSize: 80,
  colorOne: 'blue',
  colorTwo: 'green',
  colorThree: 'red',
  colorFour: 'yellow',
  borderColor: 'gray',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  row: {
    height: styleVariables.boxSize,
    width: styleVariables.containerSize,
    flexDirection: 'row',
  },
  topLeft: {
    height: styleVariables.boxSize,
    width: styleVariables.boxSize,
    borderColor: styleVariables.borderColor,
    backgroundColor: styleVariables.colorOne,
  },
  topRight: {
    height: styleVariables.boxSize,
    width: styleVariables.boxSize,
    borderColor: styleVariables.borderColor,
    backgroundColor: styleVariables.colorTwo,
  },
  bottomLeft: {
    height: styleVariables.boxSize,
    width: styleVariables.boxSize,
    borderColor: styleVariables.borderColor,
    backgroundColor: styleVariables.colorThree,
  },
  bottomRight: {
    height: styleVariables.boxSize,
    width: styleVariables.boxSize,
    borderColor: styleVariables.borderColor,
    backgroundColor: styleVariables.colorFour,
  },
});
