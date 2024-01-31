import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import HeaderBar from '../../component/HeaderBar';
import Colors from '../../style/Colorss/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import Language from '../../component/Language';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface Props {
  navigation: any
}
const SettingScreen: FC<Props> = ({ navigation }): JSX.Element => {
  const refRBSheet = useRef();


  const closeBottomSheet = () => {
    refRBSheet.current.close();
  };


  return (
    <View style={styles.container}>
      <HeaderBar title='SETTING' backButton='chevron-left' />

      <View style={styles.innerContainer}>
        <Pressable style={styles.settingBox} onPress={() => refRBSheet.current.open()}>
          <Icon name='web' size={25} color={Colors.black} />
          <Text style={styles.settingText}>Language</Text>
        </Pressable>

        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          customStyles={{
            container: { backgroundColor: Colors.white }
          }}
        >
          <Language onClose={closeBottomSheet} />
        </RBSheet>


        <Pressable style={styles.settingBox}>
          <Icon name='lock-reset' size={25} color={Colors.black} />
          <Text style={styles.settingText}>Change Password</Text>
        </Pressable>

        <Pressable style={styles.settingBox} onPress={() => navigation.navigate('NotificationScreen')}>
          <Icon name='bell-ring' size={25} color={Colors.black} />
          <Text style={styles.settingText}>Notification</Text>
        </Pressable>

        <Pressable style={styles.settingBox}>
          <Icon name='help-circle' size={25} color={Colors.black} />
          <Text style={styles.settingText}>Help Center</Text>
        </Pressable>

        <Pressable style={styles.settingBox}>
          <Icon name='information' size={25} color={Colors.black} />
          <Text style={styles.settingText}>About US</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  innerContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20
  },
  settingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal:5,
    marginVertical: 5,
    borderColor: Colors.card_bg,
    borderRadius:5
  },
  settingText: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
    marginLeft: 10
  }
})