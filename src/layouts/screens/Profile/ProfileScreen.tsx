import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react';
import HeaderBar from '../../component/HeaderBar';
import Colors from '../../style/Colorss/colors';
import { Surface, TextInput } from 'react-native-paper';
import IconLabelTitle from '../../component/IconLabelTitle';

const ProfileScreen: FC= (): JSX.Element => {


  return (
    <View style={styles.container}>
      <HeaderBar title='PROFILE' backButton='chevron-left' />
      <View style={styles.imgContainer}>
        <Image source={require('../../img/john.png')} style={styles.profileImage} />
      </View>
      <View>
        <Text style={styles.nameText}>JOHN HENDRY</Text>
        <Text style={styles.idText}>ID: 95 259105</Text>
      </View>


      <ScrollView style={{marginTop:50,}}>
        <Surface style={styles.surfaceContainer} elevation={4}>
          <View style={styles.textInputBox}>
           <IconLabelTitle icon={'account'} label={'Username'} title={'John Hendry'}/>
          </View>

          <View style={styles.textInputBox}>
            <IconLabelTitle icon={'email'} label={'Email Adress'} title={'johnhendry@gmail.com'}/>
          </View>

          <View style={styles.textInputBox}>
            <IconLabelTitle icon={'phone'} label={'Phone'} title={'+91 7875028667'}/>
          </View>

          <View style={styles.textInputBox}>
            <IconLabelTitle icon={'gender-male'} label={'Gender'} title={'Male'}/>
          </View>

          
          <View style={styles.textInputBox}>
            <IconLabelTitle icon={'calendar'} label={'Date Of Birth'} title={'10/02/1993'} bottomBorder={false}/>
          </View>
        </Surface>


        <View style={styles.socialContainer}>
          <Text style={styles.socialtext}>Social Links</Text>

          <View style={styles.linkBox}>
            <Text style={styles.linkText}>Facebook</Text>
          </View>

          
          <View style={styles.linkBox}>
            <Text style={styles.linkText}>Twitter</Text>
          </View>

          <View style={styles.linkBox}>
            <Text style={styles.linkText}>Linkeldn</Text>
          </View>

          <View style={styles.linkBox}>
            <Text style={styles.linkText}>Instagram</Text>
          </View>

          <View style={styles.linkBox}>
            <Text style={styles.linkText}>Pinterest</Text>
          </View>

          <View style={styles.linkBox}>
            <Text style={styles.linkText}>Tumbir</Text>
          </View>

         
        </View>
      </ScrollView>

    </View>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  imgContainer: {
    position: 'absolute',
    left: 25,
    top: 110,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: Colors.white,
  },
  profileImage: {
    marginTop: 8,
    width: 110,
    height: 110,
    alignSelf: 'center'
  },
  nameText: {
    color: Colors.brand_primary,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 23,
    paddingLeft: 160
  },
  idText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 13,
    color: Colors.text_secondary,
    paddingLeft: 160
  },
  surfaceContainer:{
    marginTop: 20, 
    marginHorizontal: 8, 
    padding: 10, 
    backgroundColor: Colors.white ,
    borderRadius:8
  },
  iconBox: {
    marginRight: 10
  },
  textInputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  textInput: {
    width: '100%',
    backgroundColor: Colors.white
  },
  socialContainer: {
    marginTop: 10,
    padding: 10
  },
  socialtext: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '400',
    marginBottom: 10
  },
  linkBox:{
    height:45,
    borderRadius:5,
    borderColor:Colors.brand_primary,
    borderWidth:1,
    marginVertical:5,
    justifyContent:'center'
  },
  linkText:{
    fontFamily:'Poppins',
    fontWeight:'400',
    fontSize:16,
    color:'#969393',
    paddingLeft:10

  }
})
