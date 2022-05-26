import React from 'react';
import { View, Text } from 'react-native';
import AmountButton from '../amountButton';
import styles from './styles';

const AmountItem = (props) => {
 const { name } = props;
  return(
    <View style={styles.accountContainer}>
      <View style={styles.accounts}>
         <Text style={styles.account}>{name}</Text>
      </View>
       <AmountButton description={"Exact amount"} onPress={() => {
           console.warn('Exact amount...');
        }}
        />
        <AmountButton description={"Unspecified"} onPress={() => {
             console.warn('Unspecified...');
          }}
          />
    </View>
  );
};

export default AmountItem;