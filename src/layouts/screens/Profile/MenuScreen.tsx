import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, { FC } from 'react'
import Colors from '../../style/Colorss/colors'
import HeaderBar from '../../component/HeaderBar';
import { Avatar } from 'react-native-paper';

interface Props {
  navigation: any
}

const MenuScreen: FC<Props> = ({ navigation }): JSX.Element => {


  return (
    <View style={styles.container}>
      <HeaderBar title='MENU' />
      <View style={styles.imgContainer}>
        <Image source={require('../../img/john.png')} style={styles.profileImage} />
      </View>
      <View>
        <Text style={styles.nameText}>JOHN HENDRY</Text>
        <Text style={styles.idText}>johnhendry@gmail.com</Text>
      </View>

      <ScrollView>
        <View style={[styles.firstContainer, { marginTop: 50 }]}>
          <Pressable style={styles.iconandName} onPress={() => navigation.navigate('MyAttendanceScreen')}>
            <Avatar.Icon icon='account-tie' color={Colors.white} size={35} style={styles.avtariconstyle} />
            <Text style={styles.textstyle}>Attendance</Text>
          </Pressable>

          <Pressable style={styles.iconandName} onPress={() => navigation.navigate('LeaveScreen')}>
            <Avatar.Icon icon='account-arrow-left-outline' color={Colors.white} size={35} style={styles.avtariconstyle} />
            <Text style={styles.textstyle}>Leave</Text>
          </Pressable>

          <Pressable style={styles.iconandName} onPress={() => navigation.navigate('PayslipScreen')}>
            <Avatar.Icon icon='credit-card-outline' color={Colors.white} size={35} style={styles.avtariconstyle} />
            <Text style={styles.textstyle}>Payroll</Text>
          </Pressable>

          <Pressable style={styles.iconandName} onPress={() => navigation.navigate('SalaryScreen')}>
            <Avatar.Icon icon='cash' color={Colors.white} size={35} style={styles.avtariconstyle} />
            <Text style={styles.textstyle}>Salary</Text>
          </Pressable>
        </View>

        <View style={[styles.firstContainer, { marginTop: 20 }]}>
          <Text style={styles.accounttext}>ACCOUNT</Text>
          <Pressable style={styles.iconandName} onPress={() => navigation.navigate('ProfileScreen')}>
            <Avatar.Icon icon='account-outline' color={Colors.white} size={35} style={styles.avtariconstyle} />
            <Text style={styles.textstyle}>My Profile</Text>
          </Pressable>

          <Pressable style={styles.iconandName} onPress={() => navigation.navigate('SettingScreen')}>
            <Avatar.Icon icon='cog' color={Colors.white} size={35} style={styles.avtariconstyle} />
            <Text style={styles.textstyle}>Settings</Text>
          </Pressable>
        </View>
      </ScrollView>


    </View>
  )
}

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  imgContainer: {
    position: 'absolute',
    left: 25,
    top: 110,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: Colors.white,
  },
  profileImage: {
    marginTop: 8,
    width: 110,
    height: 110,
    alignSelf: 'center'
  },
  nameText: {
    color: Colors.brand_primary,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 23,
    paddingLeft: 160
  },
  idText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 13,
    color: Colors.brand_primary,
    paddingLeft: 160
  },
  firstContainer: {
    paddingHorizontal: 20,
  },
  iconandName: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginVertical: 10
  },
  avtariconstyle: {
    backgroundColor: Colors.brand_primary,
    marginRight: 10,
  },
  textstyle: {
    color: Colors.darkGray,
    fontWeight: '400',
    fontSize: 13,
    fontFamily: 'Poppins'
  },
  accounttext: {
    color: Colors.brand_primary,
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',


  }
})