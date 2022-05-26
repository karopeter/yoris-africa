import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 shippingContainer: {
    display: 'flex',
 },
  productText: {
     color: '#C3AD60',
     fontSize: 20,
     fontWeight: 'bold',
     textAlign: 'center',
  },
   image: {
     width: 300,
     height: 300,
     marginTop: 20,
   },
   importContainer: {
      top: 20,
      display: 'flex',
   },
   importText: {
     fontSize: 15,
     color: '#fff',
     textAlign: 'left',
     fontWeight: '400',
   },
   importBold: {
     fontSize: 20,
     fontWeight: 'bold',
     color: '#fff',
     marginTop: 30,
     textAlign: 'left',
   },
    button: {
       height: 40,
       justifyContent: 'center',
       borderRadius: 25,
       backgroundColor: '#C3AD60',
       alignItems: 'center',
       marginTop: '10%',
     },
     text: {
       fontSize: 12,
       color: 'black',
       fontWeight: '500',
       textTransform: 'uppercase',
     },
});

export default styles;