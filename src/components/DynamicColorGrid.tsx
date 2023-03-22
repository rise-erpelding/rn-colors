import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorsGrid } from '../types';

type DynamicColorGridProps = {
  colorGrid: ColorsGrid;
};

type ColorGridSwatchProps = {
  swatchColor: string;
  swatchWidth: number;
}

type ColorGridRowProps = {
  rowColors: string[];
  swatchWidth: number;
};

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

export const DynamicColorGrid = ({ colorGrid }: DynamicColorGridProps) => {
  const [swatchWidth, setSwatchWidth] = useState(15);
  const gridSize = colorGrid.length;
  const handleLayout = (event: any) => {
    console.log('handleLayout is running')
    const width = event.nativeEvent.layout.width;
    setSwatchWidth(Math.floor(width/gridSize));
  }

  return (
    <View style={styles.container} onLayout={handleLayout}>
      {colorGrid.map((row, index) => (
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
