import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FC } from 'react';
import React from 'react';
import Colors from '../../style/Colorss/colors';
import { Surface } from 'react-native-paper';

import Button from '../../component/Button';

interface Props {
  navigation: any
}

const HomeScreen: FC<Props> = ({ navigation }): JSX.Element => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.monthlyTextContainer}>
        <Text style={styles.monthlyText}>MONTHLY REVIEW</Text>
      </View>

      <View style={styles.surfaceContainer}>
        <View style={styles.firstRowSurfaceBox}>
          <Pressable onPress={() => navigation.navigate('Complain')}>
            <Surface style={styles.presentBox} elevation={2}>
              <View style={styles.fileicon}>
                <Image source={require('../../img/present.png')} />
              </View>
              <Text style={styles.daystext}>27 Days</Text>
              <Text style={styles.presenttext}>Present</Text>
            </Surface>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Travel1')}>
            <Surface style={styles.absentBox} elevation={2}>
              <View style={styles.absenticon}>
                <Image source={require('../../img/absent.png')} />
              </View>
              <Text style={styles.absentdaystext}>3 Days</Text>
              <Text style={styles.absentText}>Absent</Text>
            </Surface>
          </Pressable>

        </View>

        <View style={[styles.firstRowSurfaceBox, { marginTop: 20 }]}>
          <Pressable onPress={() => navigation.navigate('WorkingHours')}>
            <Surface style={styles.absentBox} elevation={2}>
              <View style={styles.absenticon}>
                <Image source={require('../../img/working.png')} />
              </View>
              <Text style={styles.absentdaystext}>580 Hours</Text>
              <Text style={styles.absentText}>Working</Text>
            </Surface>
          </Pressable>


          <Pressable onPress={() => navigation.navigate('AwardForm')}>
            <Surface style={styles.absentBox} elevation={2}>
              <View style={styles.absenticon}>
                <Image source={require('../../img/award.png')} />
              </View>
              <Text style={styles.absentdaystext} >2</Text>
              <Text style={styles.absentText}>Awards</Text>
            </Surface>
          </Pressable>

        </View>

        <Pressable style={{ alignItems: 'center', marginTop: 35, }} onPress={() => navigation.navigate('Travel')}>
          <Button title='CLOCK IN' height={50} width={200} />
        </Pressable>

        <View style={styles.clockContainer}>
          <Image source={require('../../img/Clock.png')} resizeMode='cover' style={{ width: '100%', height: 260 }} />
        </View>

      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,

  },
  firstRowSurfaceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  monthlyTextContainer: {
    marginTop: 50,
    alignItems: 'center'
  },
  monthlyText: {
    color: Colors.brand_primary,
    fontFamily: 'Poppins-Bold',
    fontSize: 23
  },
  surfaceContainer: {
    marginTop: 20
  },
  presentBox: {
    height: 160,
    width: 160,
    borderRadius: 12,
    backgroundColor: Colors.brand_primary
  },
  absentBox: {
    height: 160,
    width: 160,
    borderRadius: 12,
    backgroundColor: Colors.white
  },
  fileicon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  absenticon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.brand_primary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  daystext: {
    color: Colors.white,
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '400',
    paddingTop: 12,
    fontFamily: 'Poppins-Medium'
  },
  presenttext: {
    color: Colors.white,
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular'
  },
  absentdaystext: {
    color: Colors.brand_primary,
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '400',
    paddingTop: 12,
    fontFamily: 'Poppins-Medium'
  },
  absentText: {
    color: Colors.brand_primary,
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold'
  },
  clockContainer: {
    marginTop: 10,
    marginBottom: 40
  }
})