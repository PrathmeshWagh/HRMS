import { StyleSheet, Text, View, Image } from 'react-native'
import React, { FC } from 'react'
import Colors from '../../style/Colorss/colors'
import HeaderBar from '../../component/HeaderBar'
import { Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Awards: FC<Props> = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <HeaderBar title='AWARD' backButton='chevron-left' />

            <Surface style={styles.awardContainer} elevation={2}>
                <View>
                    <Image source={require("../../img/award1.png")} style={styles.awardBox} />
                </View>
                <Text style={styles.awardNameText}>Award Name Goes Here</Text>
                <Text style={styles.companyNameText}>
                    Company name Goes Here
                </Text>

                <View style={styles.calendarIconAnddate}>
                    <Icon name='calendar-month-outline' color={Colors.black} size={20}/>
                    <Text style={styles.calendarDateText}>25th March 2023</Text>
                </View>
            </Surface>
        </View>
    )
}

export default Awards

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    awardContainer: {
        height: 180,
        marginTop: 30,
        marginHorizontal: 15,
        backgroundColor: Colors.white,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.brand_primary,
        paddingHorizontal:10
    },
    awardBox: {
        width: 40,
        height: 25,
        marginLeft: 20,
        marginTop: 15
    },
    awardNameText:{
        fontFamily:'Poppins',
        fontWeight:'400',
        fontSize:15,
        color:Colors.customDarkGray,
        marginTop:5
    },
    calendarIconAnddate:{
        flexDirection:'row',
        alignItems:'center'
    },
    companyNameText:{
        marginVertical:15,
        fontFamily:'Poppins',
        fontWeight:'400',
        fontSize:13,
        color:Colors.customDarkGray,
    },
    calendarDateText:{
        fontFamily:'Poppins',
        fontWeight:'400',
        fontSize:13,
        color:Colors.customDarkGray,
        marginLeft:8
    }
})