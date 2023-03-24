import { StyleSheet, Text, View, Button } from 'react-native';
import { DynamicColorGrid } from '../components/DynamicColorGrid';

export const GeneratedGrid = ({ route, navigation }: any) => {
  const { colorGrid } = route.params;

  return (
    <View style={styles.container}>
      <DynamicColorGrid colorGrid={colorGrid} />
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
