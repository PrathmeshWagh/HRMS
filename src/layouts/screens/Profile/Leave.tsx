import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC, useState } from 'react';
import Colors from '../../style/Colorss/colors';
import HeaderBar from '../../component/HeaderBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Surface } from 'react-native-paper';
import Button from '../../component/Button';

interface Props{
  navigation:any
}

const Leave:FC<Props> = ({navigation}):JSX.Element => {
  const [selectedButton, setSelectedButton] = useState('ALL');

  const handleButtonPress = (button: string) => {
    setSelectedButton(button);
  };

  return (
    <View style={styles.container}>
      <HeaderBar title='LEAVE' backButton='chevron-left' />

      <View style={styles.textAndIconContainer}>
        <Text style={styles.leaveText}>LEAVES</Text>
        <Pressable style={styles.plusiconbox} onPress={() =>navigation.navigate('ApplyLeave')}>
          <Icon name='plus' size={30} color={Colors.white} />
        </Pressable>
      </View>

      <View style={styles.leaveBtnContainer}>
        <Pressable
          style={[
            styles.leaveBtnBox,
            selectedButton === 'ALL' && { backgroundColor: Colors.brand_primary },
          ]}
          onPress={() => handleButtonPress('ALL')}
        >
          <Text style={{ color: selectedButton === 'ALL' ? Colors.white : Colors.darkGray }}>ALL</Text>
        </Pressable>

        <Pressable
          style={[
            styles.leaveBtnBox,
            selectedButton === 'Casual' && { backgroundColor: Colors.brand_primary },
          ]}
          onPress={() => handleButtonPress('Casual')}
        >
          <Text style={{ color: selectedButton === 'Casual' ? Colors.white : Colors.darkGray }}>Casual</Text>
        </Pressable>

        <Pressable
          style={[
            styles.leaveBtnBox,
            selectedButton === 'Sick' && { backgroundColor: Colors.brand_primary },
          ]}
          onPress={() => handleButtonPress('Sick')}
        >
          <Text style={{ color: selectedButton === 'Sick' ? Colors.white : Colors.darkGray }}>Sick</Text>
        </Pressable>
      </View>

      <View style={{ marginLeft: 10, marginTop: 10 }}>
        <Text style={styles.monthText}>Mar 2023</Text>
      </View>

      <Surface style={styles.surfaceContainer}elevation={2}>
        <View>
          <Text style={styles.leaveIdText}>ID: 95 259105</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={styles.leaveReasonText}>Going for a Family Trip</Text>
            <Pressable onPress={() => navigation.navigate('Award')}>
              <Button title='Approved' backgroundColor={Colors.green} width={100} fontSize={13} />
            </Pressable>
          </View>

          <Text style={[styles.leaveFromText,{marginVertical:10}]}>Casual Leave</Text>

          <View style={styles.calendarIconAndText}> 
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Icon name='calendar-month-outline' color={Colors.black} size={20} />
              <Text style={styles.leaveFromText}>Leave From</Text>
            </View>
           <Text style={styles.leaveFromText}>20th Mar to 29th Mar</Text>
          </View>

        </View>
      </Surface>

      <View style={{ marginLeft: 10, marginTop: 20 }}>
        <Text style={styles.monthText}>Feb 2023</Text>
      </View>

      <Surface style={styles.surfaceContainer}elevation={2}>
        <View>
          <Text style={styles.leaveIdText}>ID: 95 259105</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={styles.leaveReasonText}>Going for a Reception Party</Text>
            <Pressable onPress={() => navigation.navigate('Holiday')}>
              <Button title='Declined' backgroundColor={Colors.darkRed} width={100} fontSize={13} />
            </Pressable>
          </View>

          <Text style={[styles.leaveFromText,{marginVertical:10}]}>Casual Leave</Text>

          <View style={styles.calendarIconAndText}> 
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Icon name='calendar-month-outline' color={Colors.black} size={20} />
              <Text style={styles.leaveFromText}>Leave Date</Text>
            </View>
           <Text style={styles.leaveFromText}>29 Feb</Text>
          </View>

        </View>
      </Surface>
    </View>
  );
};

export default Leave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  textAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  leaveText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 24,
    color: Colors.blue,
  },
  plusiconbox: {
    width: 35,
    height: 35,
    borderRadius: 5,
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leaveBtnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    height: 45,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  leaveBtnBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: 5,
  },
  monthText: {
    color: Colors.customDarkGray,
    fontWeight: '400',
    fontFamily: 'Poppins',
    fontSize: 12
  },
  surfaceContainer:{
    backgroundColor:Colors.white,
    marginHorizontal:10,
    borderRadius:8,
    marginTop:10,
    padding:10
  },
  calendarIconAndText:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

  },
  
  leaveFromText:{
    paddingLeft:10,
    fontFamily:'Poppins',
    fontSize:11,
    fontWeight:'400',
    color:Colors.text_secondary
  },
  leaveReasonText:{
    fontFamily:'Poppins',
    fontWeight:'400',
    fontSize:15,
    color:Colors.customDarkGray
  },
  leaveIdText:{
    fontFamily:'Poppins',
    fontWeight:'400',
    fontSize:20,
    color:Colors.brand_primary
  }
});
