import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../style/Colorss/colors';
import HeaderBar from '../../component/HeaderBar';
import { Surface } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const PayslipScreen = () => {
    const earningDetail = [
        { label: 'Basic Pay', amount: '$2000.00' },
        { label: 'HRA', amount: '$500.00' },
        { label: 'Other Allowance', amount: '$500.00' },
        { label: 'SPL Allowance', amount: '$680.00' },
        { label: 'Total Earning', amount: '$3680.00' },
    ]

    return (
        <View style={styles.container}>
            <HeaderBar title='PAYSLIP' backButton='chevron-left' />
            <ScrollView>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.priceText}>$3680.35</Text>
                    <Text style={styles.subpricetext}>Net Pay, Jan 15th-Jan 25th, 2023</Text>
                </View>
                <Surface elevation={2} style={styles.surfacecontainer}>
                    <View style={styles.detailstextcontainer}>
                        <Text style={styles.detailText}>Details</Text>
                    </View>

                    <View style={styles.circularBarContainer}>
                        <AnimatedCircularProgress
                            size={170}
                            width={10}
                            fill={80}
                            tintColor={Colors.brand_primary}
                            duration={0}
                            backgroundColor={Colors.screen_bgDark}

                        >
                            {
                                (fill) => (
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={styles.progressbarText}>${Math.round(fill)}</Text>
                                        <Text style={styles.grossPayText}>Gross Pay</Text>
                                    </View>
                                )
                            }
                        </AnimatedCircularProgress>

                        <View style={styles.circularBarInnerContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.emptyView,{backgroundColor:Colors.brand_primary}]} />

                                <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={styles.earningBelowText}>Earning</Text>
                                    <Text style={[styles.earningBelowText,{paddingLeft:20}]}>Month</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row'}}>
                                <Text style={styles.progessBarEarningText}>$3680.35</Text>
                                <Text style={[styles.progessBarEarningText,{marginLeft:10}]}>Jan</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                <View style={styles.emptyView} />
                                <Text style={styles.earningBelowText}>Tax & Deduction</Text>
                            </View>
                            <Text style={styles.progessBarEarningText}>$1000.00</Text>


                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 0.5 }}>
                        <Text style={styles.earningtext}>EARNING DETAILS</Text>
                    </View>
                    {
                        earningDetail.map((earning, index) => (
                            <View key={index} style={[styles.basicPayContainer, index != earningDetail.length - 1 ? { borderBottomWidth: 0.5 } : null]}>
                                <Text style={[index != earningDetail.length - 1 ? styles.otherText : styles.totalEarningText]}>{earning.label}</Text>
                                <Text style={[index != earningDetail.length - 1 ? styles.otherText : styles.totalEarningText]}>{earning.amount}</Text>
                            </View>
                        ))
                    }

                </Surface>
            </ScrollView>

        </View>
    )
}

export default PayslipScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    priceText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 36,
        color: Colors.brand_primary,
        textAlign: 'center'
    },
    subpricetext: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 15,
        textAlign: 'center'
    },
    surfacecontainer: {
        marginHorizontal: 10,
        marginTop: 20,
        backgroundColor: Colors.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom: 20

    },
    detailstextcontainer: {
        backgroundColor: Colors.brand_primary,
        height: 60,
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    detailText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 20,
        textAlign: 'center',
        color: Colors.white
    },
    circularBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    progressbarText: {
        fontFamily: 'Poppins',
        fontSize: 28,
        fontWeight: '400',
        color: Colors.brand_primary
    },
    grossPayText: {
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: '400',
        color: Colors.DimGray
    },
    circularBarInnerContainer: {
        marginLeft: 15,
    },
    progessBarEarningText: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '400',
        color: Colors.DimGray,
        marginLeft: 23
    },
    emptyView:{
        width: 15, 
        height: 15, 
        backgroundColor: Colors.screen_bgDark, 
        marginRight: 10
    },
    earningBelowText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        color: Colors.DimGray,

    },
    earningtext: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 17,
        color: Colors.brand_primary,
        paddingBottom: 10,
        paddingLeft: 10
    },
    basicPayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    otherText: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '400',
        color: Colors.darkGray
    },
    totalEarningText: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '400',
        color: Colors.brand_primary
    }

})