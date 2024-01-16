import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { FC, useState } from 'react';
import HeaderBar from '../../component/HeaderBar';
import Colors from '../../style/Colorss/colors';
import InputForm from '../../component/InputForm';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../component/Button';
import DocumentPicker from 'react-native-document-picker'

const TravelScreen: FC = (): JSX.Element => {

  const [companyName, setComapnyName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [visitPurpose, setVisitPurpose] = useState('');
  const [location, setLocation] = useState('');
  const [travelMode, setTravelMode] = useState('');
  const [expectedBudget, setExpectedBudget] = useState('');
  const [actualBudget, setActualBudget] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)


  const selectDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(result)
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('userCancel Image')
      } else {
        console.log('error', error)
      }
    }
  }

  return (
    <View style={styles.container}>
      <HeaderBar title='TRAVEL' backButton='chevron-left' />

      <ScrollView >
        <View style={styles.formContainer}>
          <InputForm
            label='Company Name'
            placeholder='Enter Company Name'
            value={companyName}
            onChangeText={(text) => setComapnyName(text)}
          />

          <InputForm
            label='Description'
            placeholder='Description Goes Here'
            value={description}
            onChangeText={(text) => setDescription(text)}
            numberOfLines={4}
            multiline={true}
            hight={65}
          />

          <InputForm
            label='Date'
            placeholder='DD/MM/YY'
            value={date}
            onChangeText={(text) => setDate(text)}
          />

          <InputForm
            label='Purpose of Visit'
            placeholder='Visit Purpose'
            value={visitPurpose}
            onChangeText={(text) => setVisitPurpose(text)}
          />

          <InputForm
            label='Location Name'
            placeholder='Enter Location'
            value={location}
            onChangeText={(text) => setLocation(text)}
          />

          <InputForm
            label='Travel Mode'
            placeholder='Eg:Bus, Train, Flight'
            value={travelMode}
            onChangeText={(text) => setTravelMode(text)}
          />

          <InputForm
            label='Expected Budget'
            placeholder='Budget'
            value={expectedBudget}
            onChangeText={(text) => setExpectedBudget(text)}
          />

          <InputForm
            label='Actual Budget'
            placeholder='Budget'
            value={actualBudget}
            onChangeText={(text) => setActualBudget(text)}
          />

          <InputForm
            label='Actual Budget'
            placeholder='Budget'
            value={actualBudget}
            onChangeText={(text) => setActualBudget(text)}
          />

          <InputForm
            label='Actual Budget'
            placeholder='Budget'
            value={actualBudget}
            onChangeText={(text) => setActualBudget(text)}
          />

          <View>
            <Text>Attachment</Text>
            <Pressable style={styles.uploadContainer} onPress={() => selectDocument()}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.chooseyourfilebox}>
                  <Text numberOfLines={1}
                    ellipsizeMode="tail" style={styles.filenameText}>{selectedFile ? selectedFile[0].name : 'Choose Your File'}</Text>
                </View>
                <View style={styles.uploadIconBox}>
                  <Icon name='upload-outline' color={Colors.white} size={25} />
                </View>
              </View>
              <Text style={styles.nofilechossenText}>{!selectedFile && 'No File Chosen'}</Text>
            </Pressable>

            <Text style={styles.uploadFileFormatText}>Upload Files Only: pdf, gif, png, jpg, jpeg</Text>
          </View>
        </View>


        <Pressable style={styles.submitBtnBox}>
          <Button title='SUBMIT' width={160} />
        </Pressable>


      </ScrollView>

    </View>
  )
}

export default TravelScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  formContainer: {
    backgroundColor: Colors.silverGray,
    marginHorizontal: 10,
    paddingBottom: 30,
    marginTop: 30,
    borderRadius: 10,
    paddingHorizontal:20

  },
  uploadContainer: {
    flexDirection: 'row',
    height: 55,
    width: 200,
    borderRadius: 8,
    backgroundColor: Colors.white,
    alignItems: 'center',
    marginTop: 5
  },
  chooseyourfilebox: {
    paddingVertical: 5,
    width: 140,
    backgroundColor: '#939393',
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
  },
  uploadFileFormatText: {
    marginTop: 20,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    color: Colors.customDarkGray
  },
  nofilechossenText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    color: Colors.customDarkGray,
    marginLeft: 40
  },
  uploadIconBox: {
    height: 35,
    width: 35,
    borderRadius: 17,
    backgroundColor: Colors.brand_primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  submitBtnBox: {
    alignItems: "center",
    marginVertical: 35
  },
  filenameText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    color: Colors.darkGray,

  }
})