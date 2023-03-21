import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export const ColorGrid = ({ colors }) => {
  const initStylesFromProps = {
    topLeft: {backgroundColor: 'red'},
    topRight: {backgroundColor: 'blue'},
    bottomLeft: {backgroundColor: 'yellow'},
    bottomRight: {backgroundColor: 'green'},
  };
  const [colorStyles, setColorStyles] = useState(initStylesFromProps);
  const setColorStyleVariables = (colorsObj) => {
    const propColorStyles = {};
    for (const [key, value] of Object.entries(colorsObj)) {
      propColorStyles[key] = {backgroundColor: value};
    }
    setColorStyles(propColorStyles);
  };

  useEffect(() => {
    setColorStyleVariables(colors);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.topLeft, colorStyles.topLeft]} />
        <View style={[styles.topRight, colorStyles.topRight]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.bottomLeft, colorStyles.bottomLeft]} />
        <View style={[styles.bottomRight, colorStyles.bottomRight]} />
      </View>
    </View>
  );
}
const styleVariables = {
  containerSize: 160,
  boxSize: 80,
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
  },
  topRight: {
    height: styleVariables.boxSize,
    width: styleVariables.boxSize,
    borderColor: styleVariables.borderColor,
  },
  bottomLeft: {
    height: styleVariables.boxSize,
    width: styleVariables.boxSize,
    borderColor: styleVariables.borderColor,
  },
  bottomRight: {
    height: styleVariables.boxSize,
    width: styleVariables.boxSize,
    borderColor: styleVariables.borderColor,
  },
});