import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Colors from '../style/Colorss/colors'

interface Props{
    title?:string,
    width?:number | string,
    height?:number,
    backgroundColor?:string,
    fontSize?:number
    
}

const Button: FC<Props> = ({ title, width=240, height=40,backgroundColor=Colors.brand_primary,fontSize = 20,}): JSX.Element => {
    return (
        <View style={[styles.container,{width:width, height:height, backgroundColor:backgroundColor}]}>
            <Text style={[styles.title,{fontSize:fontSize}]}>{title}</Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    title:{
        color:Colors.white,
        fontFamily:'Poppins',
        fontWeight:'400'
        

    }
})