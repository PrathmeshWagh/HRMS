import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import Colors from '../../style/Colorss/colors';
import Button from '../../component/Button';

interface Props {
  navigation: any;
}

const LoginScreen: React.FC<Props> = ({ navigation }): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>Welcome To <Text style={{ color: '#213F7B' }}>HRMS</Text></Text>
        <TextInput
          label='Username'
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.inputBox}
          mode='outlined'
          activeOutlineColor={Colors.brand_primary}
        />

        <TextInput
          label='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.inputBox}
          mode='outlined'
          activeOutlineColor={Colors.brand_primary}
        />
        <Pressable style={{marginTop: 35}} onPress={() => navigation.navigate('TabNavigation')}>
          <Button title='LOGIN'/>
        </Pressable>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: Colors.black
  },
  inputBox: {
    width: '100%',
    height: 50,
    marginTop: 20,
    borderRadius: 7,
    backgroundColor:Colors.white
    
  },
})
