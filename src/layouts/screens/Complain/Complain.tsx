import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../style/Colorss/colors';
import HeaderBar from '../../component/HeaderBar';
import Button from '../../component/Button';
import { Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props{
  navigation:any
}

const Complain:FC<Props> = ({navigation}):JSX.Element => {
  return (
    <View style={styles.container}>
      <HeaderBar title='COMPLAIN' backButton='chevron-left' />
      <View style={styles.innerContainer}>
        <Pressable style={styles.addNewBtnBox} onPress={() => navigation.navigate('Notification') }>
          <Button title='ADD NEW' width={120} height={33} fontSize={14} />
        </Pressable>

        <Surface elevation={4} style={styles.surfaceContainer}>

          <Text style={styles.titleText}>ABC Company</Text>
          <Text style={styles.complainTitleText}>Complain Title Goes Here</Text>
          <Text style={[styles.titleText,{color:Colors.customDarkGray}]}>Complain Against:<Text style={styles.titleText}>Manager</Text></Text>
          <View style={styles.iconAndTextBox}>
            <Icon name='calendar-month-outline' color={Colors.black} size={25} />
            <Text style={[styles.titleText,{color:Colors.customDarkGray,marginLeft:5}]}>25th March 2023</Text>
          </View>
        </Surface>
      </View>


    </View>
  )
}

export default Complain

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  innerContainer: {
    marginTop: 30,
    marginHorizontal: 20
  },
  addNewBtnBox: {
    marginRight: 10,
    alignItems: 'flex-end',
  },
  surfaceContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor:Colors.white,
    borderRadius:13,
    marginTop:25
  },
  iconAndTextBox:{
    flexDirection:'row',
    alignItems:'center',
  },
  titleText:{
    fontFamily:'Poppins',
    fontWeight:'500',
    fontSize:11,
    color:Colors.brand_primary
  },
  complainTitleText:{
    fontFamily:'Poppins',
    fontWeight:'500',
    fontSize:15,
    color:Colors.brand_primary,
  }
})