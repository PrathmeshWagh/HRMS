import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Colors from '../style/Colorss/colors';


interface MarkedDateObject {
  [date: string]: {
    marked?: boolean;
    dotColor?: string;
    selected?: boolean;
    selectedColor?: string;
  };
}

interface Props{
    markedDates:MarkedDateObject | undefined;
}

const CustomCalendar:FC<Props> = ({ markedDates }):JSX.Element => {
  return (
    <Calendar
      style={styles.calendarStyle}
      markedDates={markedDates}
      markingType='custom'
      
      theme={{
        calendarBackground: Colors.white,
        monthTextColor: Colors.white,
        textMonthFontFamily: 'Poppins',
        textMonthFontSize: 20,
        textMonthFontWeight: '400',
        dayTextColor:Colors.black,
        arrowColor:Colors.white,
        'stylesheet.calendar.header': {
          dayTextAtIndex0: {
            color: 'red'
          },
        
          
          
        }

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
