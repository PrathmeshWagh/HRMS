import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { FC } from 'react';
import Colors from '../style/Colorss/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

interface Props{
    title:string,
    backButton?:string
}



const HeaderBar:FC<Props>= ({title,backButton}):JSX.Element => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>

      {backButton && 
      <Pressable onPress={() => navigation.goBack()}>
        <Icon name={backButton} color={Colors.white} size={35} style={{paddingBottom:20}}/>
      </Pressable>}

      <View style={{flex:1, alignItems:'center'}}>
      <Text style={styles.title}>{title}</Text>
      </View>
  
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.brand_primary,
        alignItems:'center',
        flexDirection:'row',
        height:130,
        borderBottomRightRadius:41,
        borderBottomLeftRadius:41,
        paddingHorizontal:10
        
    },
    title:{
        color:Colors.white,
        fontSize:24,
        fontFamily:'Poppins',
        fontWeight:'400',
        paddingBottom:20
       

    }
})