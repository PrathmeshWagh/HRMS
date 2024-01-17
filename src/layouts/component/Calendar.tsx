import { View, Text,Dimensions } from 'react-native';
import React, { FC,useState } from 'react';
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

  const CustomHeader: FC = () => {

    const month = currentMonth.toLocaleString('en-US', { month: 'long' });
    
    return (
      <View style={styles.customHeader}>
        <Icon name='menu-left' color={Colors.white} size={25} onPress={() => onMonthChange()}/>
        <Text style={styles.monthText}>{month}</Text>
        <Icon name='menu-right' color={Colors.white} size={25} onPress={() => onMonthChange()}/>
      </View>
    );
  };
  
  const onMonthChange = (value:number) => {
    console.log(value)
    // setCurrentMonth(value)
  };

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
        dayTextColor: Colors.black,
        arrowColor: Colors.white,
        
      }}
      scrollEnabled={true}
      horizontal={true}
      
      enableSwipeMonths={true}
      renderHeader={CustomHeader} 
      onMonthChange={onMonthChange}
      

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
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor: Colors.brand_primary,
    width: windowWidth,
    paddingVertical: 10,
    alignItems: 'center',
    marginRight:29,
    marginLeft:-59,
    marginTop:-8,
    flex:1,
    borderTopRightRadius:10,
    borderTopLeftRadius:10
  },
  monthText: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: 'Poppins',
    marginHorizontal:30
  },
});

export default CustomCalendar;
