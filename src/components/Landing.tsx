import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { InitColorGrid } from './InitColorGrid';
import { makeGrid } from '../helpers/makeGrid';
import Slider from '@react-native-community/slider';

export const Landing = () => {
  const initColors = {
    topLeftColor: '#355070',
    topRightColor: '#6d597a',
    bottomLeftColor: '#e56b6f',
    bottomRightColor: '#eaac8b',
  };
  const [colors, setColors] = useState(initColors);
  const [difficulty, setDifficulty] = useState(1);
  const handleColors = () => {
    const colorsGrid = makeGrid(difficulty, colors);
    console.log(colorsGrid)
  }

  const shuffleColors = () => {
    console.log('shuffle colors')
  }

  const handleSliderValue = (value: number) => {
    const difficulty = Math.floor(value);
    console.log(`slider value is ${difficulty}`);
    setDifficulty(difficulty);
  }

  return (
    <View style={styles.container}>
      <Text>Tiles!</Text>
      <InitColorGrid
        colors={colors}
      />
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={3}
        maximumValue={12}
        minimumTrackTintColor="#5CB8E4"
        maximumTrackTintColor="#8758FF"
        onSlidingComplete={handleSliderValue}
      />
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
