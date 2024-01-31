import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../style/Colorss/colors'
import HeaderBar from '../../component/HeaderBar'
import { Surface } from 'react-native-paper'

const MyAttendanceScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderBar title='ATTENDANCE' backButton='chevron-left' />

            <ScrollView style={styles.innerContainer}>
                <Text style={styles.myAttendanceText}>My Attendance</Text>
                <Surface elevation={4} style={styles.surfaceContainer}>
                    <View style={{ backgroundColor: Colors.green, borderRadius: 8, padding: 10, alignItems: 'center' }}>
                        <Text style={styles.dayText}>MON</Text>
                        <Text style={styles.dayText}>25</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.checkInText}>Check in</Text>
                        <Text style={[styles.checkInText, { color: Colors.green }]}>9:5:52 AM</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.checkInText}>Check Out</Text>
                        <Text style={[styles.checkInText, { color: Colors.red }]}>6:15:00 PM</Text>
                    </View>
                </Surface>

                <Surface elevation={4} style={styles.surfaceContainer}>
                    <View style={{ backgroundColor: Colors.green, borderRadius: 8, padding: 10, alignItems: 'center' }}>
                        <Text style={styles.dayText}>MON</Text>
                        <Text style={styles.dayText}>25</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.checkInText}>Check in</Text>
                        <Text style={[styles.checkInText, { color: Colors.green }]}>9:5:52 AM</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.checkInText}>Check Out</Text>
                        <Text style={[styles.checkInText, { color: Colors.red }]}>6:15:00 PM</Text>
                    </View>
                </Surface>

                <Surface elevation={4} style={styles.surfaceContainer}>
                    <View style={{ backgroundColor: Colors.green, borderRadius: 8, padding: 10, alignItems: 'center' }}>
                        <Text style={styles.dayText}>MON</Text>
                        <Text style={styles.dayText}>25</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.checkInText}>Check in</Text>
                        <Text style={[styles.checkInText, { color: Colors.green }]}>9:5:52 AM</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.checkInText}>Check Out</Text>
                        <Text style={[styles.checkInText, { color: Colors.red }]}>6:15:00 PM</Text>
                    </View>
                </Surface>
            </ScrollView>
        </View>
    )
}

export default MyAttendanceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    innerContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        
    },
    myAttendanceText: {
        textAlign:'center',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Poppins',
        color: Colors.black
    },
    surfaceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf:'center',
        width: '95%',
        padding: 10,
        borderRadius: 15,
        backgroundColor: Colors.white,
        marginVertical: 20
    },
    dayText: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '800',
        fontFamily: 'Poppins'
    },
    checkInText: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Poppins',
        color: Colors.black
    }
})