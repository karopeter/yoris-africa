import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   welcomeContainer: {
     width: '100%',
     height: '100%',
   },
   welcomeText: {
     color: '#fff',
     textAlign: 'center',
     alignItems: 'center',
     textTransform: 'uppercase',
     fontSize: 20,
     fontWeight: 'bold',
     marginTop: '40%',
   },
  button: {
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#C3AD60',
    alignItems: 'center',
    marginTop: '10%',
  },
  copy: {
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
    textTransform: 'uppercase',
  }
});

export default styles;
