import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React, { FC, useState } from 'react'
import HeaderBar from '../../component/HeaderBar';
import Colors from '../../style/Colorss/colors';
import InputForm from '../../component/InputForm';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../component/Button';



const ComplainForm: FC<Props> = (): JSX.Element => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [companyName, setComapnyName] = useState('');
  const [complainTitle, setComplainTitle] = useState('');
  const [complainDate, setComplainDate] = useState('');
  const [complainAgainst, setComplainAgainst] = useState('');
  const [description, setDescription] = useState('');


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
      <HeaderBar title='COMPLAIN' backButton='chevron-left' />
      <ScrollView>
        <View style={styles.innerContainer}>

          <InputForm
            label='Company Name'
            placeholder='Enter Company Name'
            value={companyName}
            onChangeText={(text) => setComapnyName(text)}
          />

          <InputForm
            label='Complain Title'
            placeholder='Complain Title Goes Here'
            value={complainTitle}
            onChangeText={(text) => setComplainTitle(text)}
          />

          <InputForm
            label='Complain Date'
            placeholder='DD/MM/YY'
            value={complainDate}
            onChangeText={(text) => setComplainDate(text)}
          />

          <InputForm
            label='Complain Against'
            placeholder='Enter Complain Against'
            value={complainAgainst}
            onChangeText={(text) => setComplainAgainst(text)}
          />

          <InputForm
            label='Description'
            placeholder='Enter Description Here'
            value={description}
            onChangeText={(text) => setDescription(text)}
          />

          <Text style={styles.attachmentText}>Attachment</Text>
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

        <Pressable style={styles.submitBtnContainer}>
          <Button title='SUBMIT' width={155}  fontSize={14} />
        </Pressable>
      </ScrollView>
    </View >
  )
}

export default ComplainForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  innerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginTop: 35,
    backgroundColor: Colors.silverGray,
    borderRadius: 8
  },
  attachmentText: {
    fontWeight: '400',
    fontSize: 17,
    fontFamily: 'Poppins',
    color: Colors.text_primary,
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

  },
  submitBtnContainer:{
    alignItems: 'center', 
    justifyContent: 'center', 
    marginVertical: 30
  }
})