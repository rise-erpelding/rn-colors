import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ColorsGridType } from '../types';

type DynamicColorGridProps = {
  colorGrid: ColorsGridType;
};

type ColorGridSwatchProps = {
  swatchColor: string;
  swatchWidth: number;
}

type ColorGridRowProps = {
  rowColors: string[];
  swatchWidth: number;
};

const defaultGrid = [["#355070", "#515575", "#6d597a"], ["#8d5e70", "#9d7179", "#ac8383"], ["#e56b6f", "#e88c7d", "#eaac8b"]];

const ColorGridSwatch = ({ swatchColor, swatchWidth }: ColorGridSwatchProps) => {
  return (
    <View style={{ width: swatchWidth, height: swatchWidth, backgroundColor: swatchColor }}></View>
  );
}

const ColorGridRow = ({ rowColors, swatchWidth }: ColorGridRowProps) => {
  return (
    <View style={styles.rowLayout}>
      {rowColors.map((color) => (<ColorGridSwatch key={color} swatchWidth={swatchWidth} swatchColor={color} />))}
    </View>
  );
}

export const DynamicColorGrid = ({ colorGrid }: any) => {
  const [swatchWidth, setSwatchWidth] = useState(15);
  const [currentGrid, setCurrentGrid] = useState(defaultGrid);
  const gridSize = currentGrid.length;
  const handleLayout = (event: any) => {
    console.log('handleLayout is running')
    const width = event.nativeEvent.layout.width;
    setSwatchWidth(Math.floor(width/gridSize));
  }

  useEffect(() => {
    if (!!colorGrid) {
      setCurrentGrid(colorGrid);
    };
  }, []);

  return (
    <View style={styles.container} onLayout={handleLayout}>
      {/* <Text>Hello dynamic grid</Text> */}
      {currentGrid.map((row, index) => (
        <ColorGridRow
          key={row[0] + index}
          rowColors={row}
          swatchWidth={swatchWidth}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLayout: {
    flexDirection: 'row',
  },
});
