import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

 const  WelcomeLogistics = ()  => {
   return (
     <View style={styles.welcomeContainer}>
       <Text style={styles.welcomeText}>welcome!</Text>
       <Pressable style={styles.button} onPress={() => {
            console.warn('Hey there');
         }}
         >
           <Text style={styles.copy}>sign in</Text>
         </Pressable>
         <Pressable style={styles.button} onPress={() => {
              console.warn('Hey there');
          }}
           >
             <Text style={styles.copy}>register</Text>
          </Pressable>
     </View>
   );
};

export default WelcomeLogistics;