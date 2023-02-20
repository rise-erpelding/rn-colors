import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ColorGrid } from './ColorGrid';

export const Landing = () => {
  return (
    <View style={styles.container}>
      <Text>Tiles!</Text>
      <ColorGrid />
      {/* difficulty controls here */}
      <Button title="Go"></Button>
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
