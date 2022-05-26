import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RegisterLogistics from './components/registerLogistics';

export default function App() {
  return (
    <View style={styles.container}>
       <RegisterLogistics />
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
