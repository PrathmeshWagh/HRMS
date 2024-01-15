import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../style/Colorss/colors';

interface Props {
    label: string,
    isLastItem?: boolean;
}

const IconAndTextBox: FC<Props> = ({ label, isLastItem = false }): JSX.Element => {
    return (
        <View style={[styles.iconAndTextContainer, !isLastItem && styles.borderBottom]}>
            <View style={styles.iconOuterCircle}>
                <Icon name='bell-outline' color={Colors.white} size={18} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.labelText}>
                    {label}
                </Text>
            </View>
        </View>
    )
}

export default IconAndTextBox

const styles = StyleSheet.create({
    iconAndTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        marginVertical: 5
    },
    textContainer: {
        flex: 1,
    },
    iconOuterCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: Colors.brand_primary,
        justifyContent: 'center',
        marginRight: 10
    },
    borderBottom: {
        borderBottomWidth: 0.5,
    },
    labelText: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '400',
        color: Colors.darkGray
    }
})