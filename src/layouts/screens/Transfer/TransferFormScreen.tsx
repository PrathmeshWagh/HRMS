import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import HeaderBar from '../../component/HeaderBar';
import Colors from '../../style/Colorss/colors';
import FormData from '../../component/AwardFormData';

const TransferFormScreen:FC = ():JSX.Element => {
  return (
    <View style={styles.container}>
      <HeaderBar title='TRANSFER'  backButton='chevron-left'/>
      
      <View style={styles.innerContainer}>
        <FormData label="Company Name" value="ABC Company Pvt Ltd" />
        <FormData label="Transfer from" value="India" />
        <FormData label="Transfer To" value="Singapore" />
        <FormData label="Date" value="25/03/2023" />
        <FormData label="Location Name" value="Singapore" />
        <FormData label="Department" value="Manager" />

      </View>
    </View>
  )
}

export default TransferFormScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white
  },
  innerContainer:{
    backgroundColor:Colors.silverGray,
    marginVertical:20,
    paddingHorizontal:15,
    paddingVertical:10,
    marginHorizontal:10,
    borderRadius:10

  }
})