import { StyleSheet, View } from 'react-native';
import React from 'react';
import Colors from '../../style/Colorss/colors';
import HeaderBar from '../../component/HeaderBar';
import FormData from '../../component/AwardFormData';
const AwardForm = () => {
  return (
    <View style={styles.container}>
      <HeaderBar title='AWARD' backButton='chevron-left' />

      <View style={styles.formBox}>
        <FormData label="Company Name" value="ABC Company" />
        <FormData label="Employee Name" value="John Doe" />
        <FormData label="Award Type" value="Gold Award Trophy" />
        <FormData label="Date" value="25/03/2023" />
        <FormData label="Description" value="Award Description Goes Here" />
        <FormData label="Month/Year" value="March 2023" />
        <FormData label="Gift" value="Gold Trophy" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  formBox: {
    paddingVertical: 20,
    backgroundColor: Colors.lightGray,
    marginHorizontal: 10,
    marginTop: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});

export default AwardForm;
