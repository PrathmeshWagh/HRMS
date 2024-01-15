import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../style/Colorss/colors';
import HeaderBar from '../../component/HeaderBar';
import CustomCalendar from '../../component/Calendar';

const Attendance = () => {

  const absentDates = {
    '2024-01-05': { selected: true, selectedColor: Colors.orange, },
    '2024-01-20': { selected: true, selectedColor: Colors.orange },
    '2024-01-25': { selected: true, selectedColor: Colors.orange },
  };

  return (
    <View style={styles.container}>
      <HeaderBar
        title='MONTHLY ATTENDANCE'
      />
      <View style={styles.daysTextContainer}>
        <Text style={styles.presenttext}>24 DAYS PRESENT</Text>
        <Text style={styles.absentText}>3 DAYS ABSENT</Text>
      </View>

      <View style={styles.calendarContainer}>
          <CustomCalendar markedDates={absentDates}/>
      </View>
    </View>
  )
}

export default Attendance

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  daysTextContainer: {
    flexDirection:'row',
    marginTop: 20,
    justifyContent:'space-between',
    paddingHorizontal:5
  },
  presenttext:{
    color:Colors.brand_primary,
    fontFamily:'Poppins-SemiBold',
    fontWeight:'500',
    fontSize:21
  },
  absentText:{
    color:Colors.orange,
    fontSize:21,
    fontWeight:'500',
    fontFamily:'Poppins-SemiBold',

  },
  calendarContainer:{
    marginTop:50
  },
  calendarStyle:{
    borderRadius:10,
    borderWidth:0.5,
    marginHorizontal:10,
    borderColor:Colors.brand_primary
  },

})