import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { FC } from 'react';
import Colors from '../style/Colorss/colors';

interface Props {
  label: string,
  placeholder: string,
  value: string,
  onChangeText: (text: string | number) => void;
  inputBoxStyle?: string;
  numberOfLines?: number;
  multiline?: boolean;
  hight?: number
}

const InputForm: FC<Props> = ({ label, placeholder, value, onChangeText, hight, numberOfLines, multiline }): JSX.Element => {
  return (
    <View style={styles.labelAndInputContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.inputText, { height: hight || 40 }, multiline && { textAlignVertical: 'top' }]}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}

      />
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
  labelAndInputContainer: {
    marginVertical: 10
  },
  labelText: {
    fontWeight: '400',
    fontSize: 17,
    fontFamily: 'Poppins',
    color: Colors.text_primary,
  },
  inputText: {
    backgroundColor: Colors.white,
    borderRadius: 5
  }
})