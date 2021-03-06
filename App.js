import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PickupLogistics from './components/pickupLogistics';
import LogisticsAddress from './components/logistics';

export default function App() {
  return (
    <View style={styles.container}>
      <PickupLogistics />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
