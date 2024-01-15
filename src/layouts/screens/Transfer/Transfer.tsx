import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Colors from '../../style/Colorss/colors';
import HeaderBar from '../../component/HeaderBar';
import { Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Transfer = () => {
  return (
    <View style={styles.container}>
      <HeaderBar title='TRANSFER' backButton='chevron-left' />
      <Surface elevation={2} style={styles.surfaceContainer}>
        <View>
          <Text style={styles.companyName}>Company Name Goes Here</Text>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.visitText}>Transfer From: <Text style={styles.visitSubText}>India</Text></Text>
            <Text style={styles.visitText}>Transfer to: <Text style={styles.visitSubText}>Singapore</Text></Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems:'center'}}>
            <Icon name='calendar-month-outline' color={Colors.black} size={20}/>
            <Text style={[styles.visitSubText,{marginHorizontal:10}]}>25 March 2023</Text>
            <Text style={styles.visitText}>Location<Text style={styles.visitSubText}>Singapore</Text></Text>
          </View>
          <Text style={styles.visitText}>Department: <Text style={styles.visitSubText}>Manager</Text></Text>

        </View>
      </Surface>
    </View>
  )
}

export default Transfer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  surfaceContainer: {
    paddingVertical:20,
    borderRadius: 13,
    backgroundColor: Colors.white,
    padding: 5,
    marginTop: 35,
    paddingHorizontal: 5,
    marginHorizontal: 10
  },
  companyName: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 15,
    color: Colors.brand_primary,

  },
  visitText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 11,
    color: Colors.customDarkGray,
    marginRight: 20,
    marginVertical: 5
  },
  visitSubText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 11,
    color: Colors.brand_primary
  }
})