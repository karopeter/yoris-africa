import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import StyledButton from '../styledButton';
import styles from './styles';

const ShippingProduct = (props) => {
  const { onPress } = props;
  return(
    <View style={styles.shippingContainer}>
       <Text style={styles.productText}>Procurement</Text>
       <Image source={require('../../assets/images/africa.png')} style={styles.image} />
       <View style={styles.importContainer}>
          <Text style={styles.importText}>Procurement Fee: 10%</Text>
          <Text style={styles.importText}>Product Price: N0.00</Text>
          <Text style={styles.importText}>Shipping Fee/Kg: N0.00</Text>
           <Text style={styles.importText}>Import Duty/Kg: N0.00</Text>
           <Text style={styles.importText}>Vat: 7.5%</Text>
           <Text style={styles.importBold}>Total: N0.00</Text>
       </View>
        <Pressable style={styles.button} onPress={() => {
                onPress()
             }}
             >
                <Text style={styles.text}>Pay</Text>
         </Pressable>
    </View>
  );
};

export default ShippingProduct;