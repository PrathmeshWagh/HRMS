import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../style/Colorss/colors';

interface Props{
    label:string,
    value:string | number,
}

const FormData:FC<Props> = ({ label, value }):JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.formLabelText}>{label}</Text>
      <View style={styles.formDataBox}>
        <Text style={styles.formDataText}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  formDataBox: {
    backgroundColor: Colors.white,
    paddingVertical: 10,
    borderRadius: 5,
  },
  formLabelText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    color: Colors.text_primary,
  },
  formDataText: {
    paddingLeft: 10,
    color: Colors.black,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default FormData;
