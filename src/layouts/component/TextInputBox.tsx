import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { FC } from 'react'
import Colors from '../style/Colorss/colors';


interface Props {
    placeholder: string,
    value: string ,
    onChangeText: (text: string | number) => void;
    multiline:boolean;
    height:number;
}

const TextInputBox: FC<Props> = ({ placeholder, value, onChangeText,multiline, height}): JSX.Element => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={[styles.inputText,{height:height || 45}, multiline && {textAlignVertical:'top'}]}
                multiline={multiline}

            />
        </View>
    )
}

export default TextInputBox

const styles = StyleSheet.create({
    container: {
        marginVertical:10
    },
    inputText:{
        borderWidth:0.8,
        borderColor: Colors.brand_primary,
        borderRadius: 5,
        paddingHorizontal:20
    }
})