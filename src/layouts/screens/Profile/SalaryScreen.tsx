import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Colors from '../../style/Colorss/colors'
import HeaderBar from '../../component/HeaderBar'
import { Surface } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const SalaryScreen: FC = (): JSX.Element => {

  const earningDetail = [
    { label: 'Total Hours', amount: '56 h' },
    { label: 'Total Earnings', amount: '$4680.00' },
    { label: 'Taxes & Deductions', amount: '$1000.0' },
  ]


  return (
    <View style={styles.container}>
      <HeaderBar title='SALARY' backButton='chevron-left' />
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
                <View style={{ width: 15, height: 15, backgroundColor: Colors.brand_primary, marginRight: 10 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.earningBelowText}>Earning</Text>
                  <Text style={[styles.earningBelowText,{paddingLeft:25}]}>Month</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row'}}>
                <Text style={styles.progessBarEarningText}>$3680.35</Text>
                <Text style={[styles.progessBarEarningText,{marginLeft:10}]}>Sept</Text>
              </View>


              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <View style={{ width: 15, height: 15, backgroundColor: Colors.screen_bgDark, marginRight: 10 }} />
                <Text style={styles.earningBelowText}>Tax & Deduction</Text>
              </View>
              <Text style={styles.progessBarEarningText}>$1000.00</Text>


            </View>

          </View>
          {
            earningDetail.map((earning, index) => (
              <View key={index} style={[styles.basicPayContainer, index != earningDetail.length - 1 ? { borderBottomWidth: 0.5 } : null]}>
                <Text style={styles.otherText}>{earning.label}</Text>
                <Text style={styles.otherText}>{earning.amount}</Text>
              </View>
            ))
          }

        </Surface>
      </ScrollView>

    </View>
  )
}

export default SalaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
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
    marginBottom:20

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
    borderBottomWidth: 0.5,
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
    marginLeft: 20,

  },
  progessBarEarningText: {
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '400',
    color: Colors.DimGray,
    marginLeft: 23
  },
  earningBelowText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: Colors.DimGray,

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

})