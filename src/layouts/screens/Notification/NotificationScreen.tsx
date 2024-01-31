import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC, useState } from 'react';
import Colors from '../../style/Colorss/colors';
import HeaderBar from '../../component/HeaderBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../component/Button';
import IconAndTextBox from '../../component/IconAndTextBox';

const notification = [
    {
        TodayNotification: [
            { id: 1, message: "You have completed 1 Task of Project #12345" },
            { id: 2, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { id: 3, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        ],
        ThisWeekNotification: [
            { id: 1, message: "You have completed 1 Task of Project #12345" },
            { id: 2, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { id: 3, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
            { id: 4, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        ]
    }


]


const NotificationScreen: FC= (): JSX.Element => {
    const [searchText, setSeachText] = useState('')
    return (
        <View style={styles.container}>
            <HeaderBar title='NOTIFICATION' backButton='chevron-left' />
            <ScrollView style={styles.innerContainer}>
                <View style={styles.textInputAndIconContainer}>
                    <TextInput 
                    placeholder='Search Notification'
                    value={searchText}
                    onChangeText={(text) =>setSeachText(text) }
              
                    />
                    <Icon name='magnify' size={25} color={Colors.lightGray} />
                </View>
                <Pressable style={styles.btnContainer}>
                    <Button title='Mark All As Read' height={50} width={'100%'} fontSize={15} />
                </Pressable>

                <Text style={styles.notificationText}>
                    You Have 3 <Text style={[styles.notificationText, { color: Colors.brand_primary }]}>Notifications</Text> Today
                </Text>


                <View>
                    <Text style={styles.todayText}>Today</Text>
                    {
                        notification[0].TodayNotification.map((item, index) => (
                            <IconAndTextBox
                                key={index}
                                label={item.message}
                                isLastItem={index === notification[0].TodayNotification.length - 1}
                            />
                        ))
                    }

                    <Text style={[styles.todayText, { marginTop: 20 }]}>This Week</Text>
                    {
                        notification[0].ThisWeekNotification.map((item, index) => (
                            <IconAndTextBox 
                            key={index} 
                            label={item.message} 
                            isLastItem={index === notification[0].ThisWeekNotification.length - 1}
                            />
                        ))
                    }



                </View>

            </ScrollView>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    innerContainer: {
        flex:1,
        paddingHorizontal: 20,
        marginTop:20
        
      
    },
    textInputAndIconContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        borderRadius:6,
        borderColor:'#D9D9D9',
        paddingHorizontal:15
    },
   
    btnContainer: {
        marginTop: 20
    },
    notificationText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 16,
        color: Colors.darkGray,
        marginVertical: 20
    },
    todayText: {
        fontWeight: '400',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.brand_primary
    },

})