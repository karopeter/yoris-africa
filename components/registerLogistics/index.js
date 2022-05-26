import React, { useState, useEffect} from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {
    RegistrationBackground,
    RegistrationImage,
    RegistrationInput,
    EmailInput
  } from './registerLogisticsElements';

const RegisterLogistics = () => {
   const [name, setName] = useState("");
   const [ email, setEmail] = useState("");
   const [ text, setText ] = useState("");
   return (
    <RegistrationBackground>
       <RegistrationImage source={require('../../assets/images/yoris.png')} />
       <RegistrationInput
         placeholder="Full name"
         value={name}
         onChangeText={newText => setText(newText)}
         defaultValue={text}
         autoCapitalize="characters"
        />
       <EmailInput
        placeholder="Email"
        value={email}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        autoCapitalize="characters"
        />
    </RegistrationBackground>
   );
};


export default RegisterLogistics;
