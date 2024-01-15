import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../component/Button';
import Colors from '../../style/Colorss/colors';

interface Props{
    navigation:any
}

const WorkThroughScreen: FC<Props> = ({navigation}): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.imgBox}>
                <Image source={require('../../img/Rectangle1.png')} resizeMode='cover' style={styles.img}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.optimizeText}>
                    Optimize <Text style={{ color: Colors.brand_primary }}>Workers</Text>
                </Text>
                <Text style={styles.subText}>
                    HR Management made easily organize{'\n'}your daily working routine easily
                </Text>

            </View>
            <Pressable style={{marginTop: 35,}} onPress={() => navigation.navigate('Login')}>
                <Button title='Login' />
            </Pressable>

        </View>
    )
}

export default WorkThroughScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgBox: {
        width: '100%',
    },
    img:{
        width:'100%', 
        height:250
    },
    optimizeText:{
        color: '#000000', 
        fontSize: 24, 
        fontFamily: 'Poppins-Bold'
    },
    subText:{
        fontSize: 12,
        color: '#000000', 
        fontFamily: 'Poppins-Medium', 
        textAlign: 'center', 
        textAlignVertical: 'center'
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 50,
        width: '70%'
    }
})