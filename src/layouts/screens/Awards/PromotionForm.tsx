import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../style/Colorss/colors'
import HeaderBar from '../../component/HeaderBar'
import FormData from '../../component/AwardFormData'

const PromotionForm = () => {

    return (
        <View style={styles.container}>
            <HeaderBar title='PROMOTION' backButton='chevron-left' />
            <View style={styles.innerContainer}>
                <FormData label="Company Name" value="ABC Company pvt ltd" />
                <FormData label="Promotion For" value="Working Productivity" />
                <FormData label="Date" value="25/03/2023" />
                <FormData label="Promotion Title" value="Manager" />
                <FormData label="Description" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
            </View>
        </View>
    )
}

export default PromotionForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    innerContainer: {
        paddingVertical: 20,
        paddingHorizontal:10,
        marginHorizontal: 10,
        marginTop:35,
        backgroundColor: Colors.silverGray
    }
})