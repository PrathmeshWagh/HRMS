import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { FC, useState } from 'react';
import HeaderBar from '../../component/HeaderBar';
import Colors from '../../style/Colorss/colors';
import { Dropdown } from 'react-native-element-dropdown';
import TextInputBox from '../../component/TextInputBox';
import { Checkbox } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DocumentPicker from 'react-native-document-picker'
import Button from '../../component/Button';

const dropDownData = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
]

const ApplyLeaveScreen: FC = (): JSX.Element => {
    const [value, setValue] = useState(null);
    const [leaveReason, setLeaveReason] = useState('');
    const [checked, setChecked] = React.useState(false);
    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
    const [startDate, setStartDate] = useState<string | null>(null);
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
    const [endDate, setEndDate] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<string[] | null>(null)
    const [remark, setRemark] = useState('');

    const showStartDatePicker = () => {
        setStartDatePickerVisibility(true);
    };

    const showEndDatePicker = () => {
        setEndDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setStartDatePickerVisibility(false);
        setEndDatePickerVisibility(false);
    };

    const handleStartDateConfirm = (date:string) => {
        setStartDatePickerVisibility(false);
        setStartDate(date);
    };

    const handleEndDateConfirm = (date:string) => {
        setEndDatePickerVisibility(false);
        setEndDate(date);
    }

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
            <HeaderBar title='APPLY LEAVE' backButton='chevron-left' />
            <ScrollView style={{ paddingHorizontal: 20 }}>
                <Text style={styles.newLeaveText}>NEW LEAVE</Text>
                <Text style={styles.leaveTypeText}>Leave Type</Text>

                <Pressable style={styles.dropdownContainer}>
                    <Dropdown
                        placeholder='Choose Here'
                        data={dropDownData}
                        placeholderStyle={styles.dropdownplaceholderStyle}
                        selectedTextStyle={styles.dropdownselectedTextStyle}

                        iconStyle={styles.dropDowniconStyle}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        value={value}
                        onChange={item => {
                            setValue(item.value);
                        }}
                    />
                </Pressable>


                <Text style={styles.leaveReasonText}>Leave Reason</Text>
                <TextInputBox
                    placeholder='Leave Reason'
                    value={leaveReason}
                    onChangeText={(text) => setLeaveReason(text)}
                    multiline={true}
                    height={70}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        color={Colors.brand_primary}
                        uncheckedColor={Colors.brand_primary}
                    />
                    <Text style={styles.halfDayText}>Half Day</Text>
                </View>

                <View style={styles.startAndEndDateContainer}>
                    <View>
                        <Text style={styles.startDateText}>Start Date</Text>
                        <Pressable style={styles.startDateBox} onPress={showStartDatePicker}>
                            <Text style={styles.selectedDate}>{startDate ? startDate.toDateString() : 'Select Start Date'}</Text>
                        </Pressable>
                    </View>

                    <View>
                        <Text style={styles.startDateText} >End Date</Text>
                        <Pressable style={styles.startDateBox} onPress={showEndDatePicker}>
                            <Text style={styles.selectedDate}>{endDate ? endDate.toDateString() : 'Select End Date'}</Text>
                        </Pressable>
                    </View>

                    <DateTimePickerModal
                        isVisible={isStartDatePickerVisible}
                        mode="date"
                        onConfirm={handleStartDateConfirm}
                        onCancel={hideDatePicker}
                    />
                    <DateTimePickerModal
                        isVisible={isEndDatePickerVisible}
                        mode="date"
                        onConfirm={handleEndDateConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>

                <View style={{ marginTop:20 }}>
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

                <Text style={[styles.leaveReasonText,{marginTop:5}]}>Remark</Text>
                <TextInputBox
                    placeholder='Remark'
                    value={remark}
                    onChangeText={(text) => setRemark(text)}
                    multiline={true}
                    height={80}
                />

                <Pressable onPress={() => null} style={styles.applyBtnContainer}>
                    <Button  title='APPLY' width={150}/>
                </Pressable>

            </ScrollView>
        </View>
    )
}

export default ApplyLeaveScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    newLeaveText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 24,
        color: Colors.brand_primary,
        marginTop:10
    },
    leaveTypeText: {
        marginTop: 20,
        marginBottom: 10,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 17,
        color: Colors.darkGray
    },
    leaveReasonText: {
        marginTop: 20,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 17,
        color: Colors.darkGray
    },

    dropdownContainer: {
        justifyContent: 'center',
        height: 50,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: Colors.brand_primary
    },
    dropdownselectedTextStyle: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Poppins',
        color: Colors.black
    },
    dropdownplaceholderStyle: {
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Poppins',
        color: '#969393'
    },
    dropDowniconStyle: {
        width: 26,
        height: 26,
        backgroundColor: Colors.brand_primary,
        borderRadius: 13,
        marginRight: 10,
    },
    halfDayText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 15,
        color: Colors.darkGray
    },
    startDateBox: {
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.brand_primary,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startAndEndDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    startDateText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
        color: Colors.darkGray
    },
    selectedDate: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '400',
        color: Colors.darkGray
    },
    uploadContainer: {
        flexDirection: 'row',
        height: 55,
        width: 200,
        borderRadius: 8,
        backgroundColor: Colors.white,
        alignItems: 'center',
        marginTop: 5,
        elevation:4
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
      filenameText: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '400',
        color: Colors.darkGray,
      },
      applyBtnContainer:{
        alignItems:'center',
        justifyContent:'center'
      }
})