import React, { useState } from 'react';
import {
      AuthenticationBackground,
      AuthenticationImage,
      AuthenticationInput,
      PasswordInput,
      AuthenticationButton,
      PasswordContainer,
      ForgotText,
      AuthenticationBtn
     } from './signInElements';


export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ text, setText ] = useState("");
   return (
     <AuthenticationBackground>
       <AuthenticationImage source={require('../../assets/images/yoris.png')} />
        <AuthenticationInput
          placeholder="Email"
          value={email}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          autoCapitalize="characters"
          autoCorrect="true"
        />
        <PasswordInput
          placeholder="Password"
          value={password}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          autoCapitalize="characters"
          autoCorrect="true"
          />
        <PasswordContainer>
           <ForgotText>Forgotten Password?</ForgotText>
        </PasswordContainer>
            <AuthenticationButton icon="lock-open-outline" mode="contained" onPress={() => console.log(email, password)}>
               sign in
           </AuthenticationButton>
           <AuthenticationBtn icon="lock-open-outline" mode="contained" onPress={() => console.log()}>
              back
           </AuthenticationBtn>
     </AuthenticationBackground>
   );
};