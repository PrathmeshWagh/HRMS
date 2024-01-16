import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react';
import HeaderBar from '../../component/HeaderBar';
import Colors from '../../style/Colorss/colors';
import CalendarStrip from 'react-native-calendar-strip';
import { useState } from 'react';
import { Surface } from 'react-native-paper';


const WorkingHoursScreen: FC = (): JSX.Element => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const formatDate = (date:string) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(date).toLocaleDateString('en-US', options);

        const dateWithoutCommas = formattedDate.replace(/,/g, '');

        const [day, month, year] = dateWithoutCommas.split(' ');

        return { year, month, day };
    };

    return (
        <View style={styles.container}>
            <HeaderBar title='WORKING HOURS' backButton='chevron-left' />
            <View>
                <CalendarStrip
                    scrollable
                    style={{ height: 160 }}
                    iconLeft={''}
                    iconRight={''}
                    showMonth={false}
                    dayContainerStyle={{elevation:4, borderRadius: 2, backgroundColor: Colors.white, paddingVertical: 5 }}
                    dateNameStyle={{ fontSize: 14, fontWeight: '400', fontFamily: 'Poppins', color: Colors.black }}
                    dateNumberStyle={{ fontSize: 14, fontWeight: '600', fontFamily: 'Poppins-SemiBold', color: Colors.brand_primary }}
                    highlightDateNameStyle={{ fontSize: 14, fontWeight: '400', fontFamily: 'Poppins', color: Colors.white }}
                    highlightDateNumberStyle={{ fontSize: 14, fontWeight: '600', fontFamily: 'Poppins-SemiBold', color: Colors.white }}
                    highlightDateContainerStyle={{ backgroundColor: Colors.brand_primary }}
                    selectedDate={selectedDate}
                    onDateSelected={(date) => setSelectedDate(date)}
                />
            </View>

            <Surface elevation={4} style={styles.surfaceContainer}>
                <View style={styles.dateContainer}>
                    <Text style={[styles.yearText]}>{formatDate(selectedDate).year}</Text>
                    <Text style={[styles.yearText, { fontSize: 20 }]}>{formatDate(selectedDate).month}</Text>
                    <Text style={[styles.yearText, { fontSize: 16 }]}>{formatDate(selectedDate).day}</Text>
                </View>

                <View style={styles.checkInCheckOutContainer}>

                    <View style={styles.innerCheckInCheckOutBox}>
                        <View style={styles.rightBorder}>
                            <Text style={styles.checkInCheckOutText}>Check In</Text>
                            <Text style={styles.checkInCheckOutTimeText}>9:35 AM</Text>
                        </View>

                        <View style={styles.rightBorder}>
                            <Text style={[styles.checkInCheckOutText, { color: Colors.green }]}>Breal Start</Text>
                            <Text style={[styles.checkInCheckOutTimeText, { color: Colors.black }]}>1:35 PM</Text>
                        </View>

                    </View>

                    <View style={styles.innerCheckInCheckOutBox}>
                        <View>
                            <Text style={styles.checkInCheckOutText}>Check Out</Text>
                            <Text style={styles.checkInCheckOutTimeText}>5:30 AM</Text>
                        </View>


                        <View>
                            <Text style={[styles.checkInCheckOutText, { color: Colors.green }]}>Break End</Text>
                            <Text style={[styles.checkInCheckOutTimeText, { color: Colors.black }]}>2:35 AM</Text>
                        </View>

                    </View>

                </View>
            </Surface>


        </View>
    )
}

export default WorkingHoursScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    surfaceContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        height:130,
        marginHorizontal: 20,
        borderRadius: 13
    },
    dateContainer: {
        width: '32%',
        height: '100%',
        backgroundColor: Colors.brand_primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkInCheckOutContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    innerCheckInCheckOutBox: {
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    checkInCheckOutText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 16,
        color: Colors.text_secondary
    },
    checkInCheckOutTimeText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 20,
        color: Colors.brand_primary,

    },
    rightBorder: {
        borderRightWidth: 0.5,
        paddingRight: 20
    },
    yearText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 28,
        color: Colors.white
    },

})