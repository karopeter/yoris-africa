import React from 'react';
import { View, Text } from 'react-native';
import StyledButton from '../styledButton';
import styles from './styles';

const SectionItem = (props) => {
   const { name } = props;
   return (
     <View style={styles.sectionContainer}>
       <View style={styles.sections}>
          <Text style={styles.section}>{name}</Text>
       </View>
         <StyledButton content={"send"} onPress={() => {
            console.warn('Send...');
         }}
         />
         <StyledButton content={"receive"} onPress={() => {
            console.warn('Receive...');
          }}
          />
       </View>
   );
};

export default SectionItem;