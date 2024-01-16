import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react';
import { Avatar } from 'react-native-paper';
import Colors from '../style/Colorss/colors';

interface Props{
    icon?:string;
    label?:string;
    title?:string;
    bottomBorder?:boolean
}
const IconLabelTitle:FC<Props> = ({icon,label,title,bottomBorder=true}):JSX.Element => {
    return (
        <View style={[styles.container,{borderBottomWidth:bottomBorder ? 0.5 : 0}]}>
            <Avatar.Icon icon={icon} color={Colors.white} size={35} style={{ backgroundColor: Colors.brand_primary }} />
            <View style={styles.labelTitleBox}>
                <Text style={styles.labelText}>{label}</Text>
                <Text style={styles.titleText}>{title}</Text>
            </View>
        </View>
    )
}

export default IconLabelTitle

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        paddingBottom:10,
        flexDirection:'row',
        flex:1
    },
    labelTitleBox:{
        marginLeft:20
    },
    labelText:{
        fontFamily:'Poppins',
        fontSize:13,
        fontWeight:'400',
        color:'#C0B6B6',
        marginBottom:10
    },
    titleText:{
        fontFamily:'Poppins',
        fontWeight:'400',
        fontSize:13,
        color:'#454444'
    }
})