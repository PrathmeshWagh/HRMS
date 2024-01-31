import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC, useState } from 'react';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../style/Colorss/colors';


interface LanguageProps {
    onClose: () => void;
}

const Language: FC<LanguageProps> = ({ onClose }): JSX.Element => {
    const [checked, setChecked] = useState('first')

    const handleIconPress = () => {
        onClose()
      };
    
    return (
        <View >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Pressable onPress={handleIconPress}>
                    <Icon name='close' size={20} color={Colors.DimGray} style={{ marginLeft: 6 }} />
                </Pressable>
                <Text style={styles.languageHeaderText}>App Language</Text>
            </View>

            <View style={styles.radioBtnWithText}>
                <RadioButton
                    value='English'
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                />
                <Text style={styles.languageText}>English</Text>
            </View>

            <View style={styles.radioBtnWithText}>
                <RadioButton
                    value='Hindi'
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                />
                <Text style={styles.languageText}>Hindi</Text>
            </View>

            <View style={styles.radioBtnWithText}>
                <RadioButton
                    value='Marathi'
                    status={checked === 'third' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('third')}
                />
                <Text style={styles.languageText}>Marathi</Text>
            </View>

            <View style={styles.radioBtnWithText}>
                <RadioButton
                    value='Bengali'
                    status={checked === 'fourth' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('fourth')}
                />
                <Text style={styles.languageText}>Bengali</Text>
            </View>

            <View style={styles.radioBtnWithText}>
                <RadioButton
                    value='Tamil'
                    status={checked === 'fifth' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('fifth')}
                />
                <Text style={styles.languageText}>Tamil</Text>
            </View>

        </View>
    )
}

export default Language

const styles = StyleSheet.create({
    languageHeaderText: {
        fontSize: 18,
        color: Colors.black,
        fontWeight: '700',
        fontFamily: 'Poppins',
        marginLeft: 20,

    },
    radioBtnWithText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    languageText:{
        fontFamily:'Poppins',
        fontSize:16,
        fontWeight:'400',
        color:Colors.black,
        marginLeft:5
    }
})