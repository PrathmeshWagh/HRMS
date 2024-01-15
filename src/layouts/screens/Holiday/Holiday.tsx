import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Colors from '../../style/Colorss/colors'
import HeaderBar from '../../component/HeaderBar'
import { Calendar } from 'react-native-calendars'
import CustomCalendar from '../../component/Calendar'

const Holiday: FC<Props> = (): JSX.Element => {

    const hodidayeDates = {
        '2024-01-05': { selected: true, selectedColor: Colors.orange },
        '2024-01-20': { selected: true, selectedColor: Colors.orange },
        '2024-01-25': { selected: true, selectedColor: Colors.orange },
    };
    return (
        <View style={styles.container}>
            <HeaderBar title='HOLIDAY' backButton='chevron-left' />
            <View style={styles.calendarYearBox}>
                <Text style={styles.calendarYearText}>CALENDER 2023</Text>
            </View>
            <CustomCalendar markedDates={hodidayeDates} />

            <View style={{ marginTop: 30, marginLeft: 10 }}>
                <View style={styles.dateAndHolidyaTextContaier}>
                    <Text style={styles.holidayDatesText}>
                        2nd August:
                    </Text>
                    <Text style={styles.demoText}>
                        Demo Holiday    
                    </Text>
                </View>

                <View  style={styles.dateAndHolidyaTextContaier}>
                    <Text style={styles.holidayDatesText}>
                        6th August:
                    </Text>
                    <Text style={styles.demoText}>
                        Demo Holiday 2 
                    </Text>
                </View>

                <View  style={styles.dateAndHolidyaTextContaier}>
                    <Text style={styles.holidayDatesText}>
                        24th August:
                    </Text>
                    <Text style={styles.demoText}>
                        Demo Holiday 3    
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Holiday

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    calendarYearBox: {
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center'
    },
    calendarYearText: {
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '400',
        color: Colors.brand_primary
    },
    holidayDatesText:{
        fontFamily:'Poppins',
        fontWeight:'500',
        fontSize:17,
        color:Colors.orange
    },
    demoText:{
        fontFamily:'Poppins',
        fontWeight:'500',
        fontSize:17,
        color:Colors.brand_primary
    },
    dateAndHolidyaTextContaier:{
        flexDirection:'row',
        marginVertical:2
    }
})