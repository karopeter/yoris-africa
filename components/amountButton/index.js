import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const AmountButton = (props) => {
  const { description, onPress } = props;
   return(
     <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => {
               onPress()
          }}
           >
             <Text style={styles.text}>{description}</Text>
         </Pressable>
     </View>
   );
};

export default AmountButton;