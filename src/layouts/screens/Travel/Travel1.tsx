import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react';
import Colors from '../../style/Colorss/colors';
import HeaderBar from '../../component/HeaderBar';
import Button from '../../component/Button';
import { Surface } from 'react-native-paper';


interface Props{
    navigation:any
}
const Travel1:FC<Props> = ({navigation}):JSX.Element => {
    return (
        <View style={styles.container}>
            <HeaderBar title='TRAVEL' backButton='chevron-left' />
            <View style={{ paddingHorizontal: 15 }}>
                <Pressable style={styles.addNewBtnContainer} onPress={() => navigation.navigate('Transfer')}>
                    <Button title='ADD NEW' width={120} height={35} fontSize={14}/>
                </Pressable>

                <Surface elevation={2} style={styles.surfaceContainer}>
                    <View>
                        <Text style={styles.companyName}>Company Name Goes Here</Text>
                        <Text style={styles.visitText}>Place of Visit: <Text style={styles.visitSubText}>India</Text></Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.visitText}>Start Date: <Text style={styles.visitSubText}>25/03/2023</Text></Text>
                            <Text style={styles.visitText}>End Date: <Text style={styles.visitSubText}>31/03/2023</Text></Text>
                        </View>

                    </View>
                </Surface>
            </View>

        </View>
    )
}

export default Travel1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    addNewBtnContainer: {
        alignItems: 'flex-end',
        paddingRight: 15,
        paddingTop: 25
    },
    surfaceContainer: {
        height: 115,
        borderRadius: 13,
        backgroundColor: Colors.white,
        padding: 5,
        marginTop:20
    },
    companyName: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 15,
        color: Colors.brand_primary,
        paddingTop: 15
    },
    visitText: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 11,
        color: Colors.customDarkGray,
        marginRight:20,
        marginVertical:5
    },
    visitSubText: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 11,
        color: Colors.brand_primary
    }
})