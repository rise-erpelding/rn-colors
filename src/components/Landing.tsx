import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { ColorGrid } from './ColorGrid';

export const Landing = () => {
  const initColors = {
    topLeft: '#355070',
    topRight: '#6d597a',
    bottomLeft: '#e56b6f',
    bottomRight: '#eaac8b',
  };
  const [colors, setColors] = useState(initColors);
  const makeGrid = () => {
    console.log('making grid')
  }

  const shuffleColors = () => {
    console.log('shuffle colors')
  }

  return (
    <View style={styles.container}>
      <Text>Tiles!</Text>
      <ColorGrid
        colors={colors}
      />
      {/* difficulty controls here */}
      <Button title="Shuffle Colors" onPress={shuffleColors}></Button>
      <Button title="Go" onPress={makeGrid}></Button>
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
