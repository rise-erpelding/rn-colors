import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { InitColorGrid } from './InitColorGrid';
import { makeGrid } from '../helpers/makeGrid';

export const Landing = () => {
  const initColors = {
    topLeftColor: '#355070',
    topRightColor: '#6d597a',
    bottomLeftColor: '#e56b6f',
    bottomRightColor: '#eaac8b',
  };
  const [colors, setColors] = useState(initColors);
  const handleColors = () => {
    const colorsGrid = makeGrid(6, colors);
    console.log(colorsGrid)
  }

  const shuffleColors = () => {
    console.log('shuffle colors')
  }

  return (
    <View style={styles.container}>
      <Text>Tiles!</Text>
      <InitColorGrid
        colors={colors}
      />
      {/* difficulty controls here */}
      <Button title="Shuffle Colors" onPress={shuffleColors}></Button>
      <Button title="Go" onPress={handleColors}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
