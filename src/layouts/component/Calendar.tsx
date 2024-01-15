import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Colors from '../style/Colorss/colors';

// interface Props{
//     markedDates:string
// }

const CustomCalendar:FC<Props> = ({ markedDates }):JSX.Element => {
  return (
    <Calendar
      style={styles.calendarStyle}
      markedDates={markedDates}
      
      theme={{
        calendarBackground: Colors.white,
        monthTextColor: Colors.white,
        textMonthFontFamily: 'Poppins',
        textMonthFontSize: 20,
        textMonthFontWeight: '400',
        dayTextColor:Colors.black,
        arrowColor:Colors.white,
        
        
      }}
      headerStyle={{
        backgroundColor: Colors.brand_primary,
        
      }}
    />
  );
};

const styles = StyleSheet.create({
  calendarStyle: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.brand_primary,
    marginHorizontal:15
  },
});

export default CustomCalendar;
