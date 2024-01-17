import { View, Text, Dimensions } from 'react-native';
import React, { FC, useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import Colors from '../style/Colorss/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


interface MarkedDateObject {
  [date: string]: {
    marked?: boolean;
    dotColor?: string;
    selected?: boolean;
    selectedColor?: string;
  };
}

interface Props {
  markedDates: MarkedDateObject | undefined;
}

const CustomCalendar: FC<Props> = ({ markedDates }): JSX.Element => {


  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const CustomHeader = () => {

    
    const month = new Date(currentMonth).toLocaleString('en-US', { month: 'long' });
    
    return (
      <View style={styles.customHeader}>
        <Icon name='menu-left' color={Colors.white} size={30}  onPress={onPressArrowLeft}/>
        <Text style={styles.monthText}>{month}</Text>
        <Icon name='menu-right' color={Colors.white} size={30} onPress={onPressArrowRight}/>
      </View>
    );
  }

  const onMonthChange = (date) =>{
  
    if (date && date.dateString) {
      const isoDateString = new Date(date.dateString).toISOString();
      setCurrentMonth(isoDateString);
    }
  }

  const onPressArrowLeft = () =>{
    const previousMonth = new Date(currentMonth);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    setCurrentMonth(previousMonth);
  }

  const onPressArrowRight = () =>{
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  }

  const initialDate = currentMonth.toString();

  return (
    <Calendar
      style={styles.calendarStyle}
      markedDates={markedDates}
      markingType='custom'

      theme={{
        calendarBackground: Colors.white,
        dayTextColor: Colors.black,

      }}

      enableSwipeMonths={true}
      renderHeader={CustomHeader}
      onMonthChange={onMonthChange}
      onPressArrowLeft={onPressArrowLeft}
      onPressArrowRight={onPressArrowRight}
      initialDate={initialDate}

    />
  );
};
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  calendarStyle: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.brand_primary,
    marginHorizontal: 15
  },
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.brand_primary,
    width: windowWidth,
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 29,
    marginLeft: -59,
    marginTop: -8,
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  monthText: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: 'Poppins',
    marginHorizontal: 30,
    fontWeight:'400'
  },
});

export default CustomCalendar;
