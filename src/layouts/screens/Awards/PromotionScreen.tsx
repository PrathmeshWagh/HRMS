import { StyleSheet, Text, View } from 'react-native'
import React,{FC} from 'react'
import Colors from '../../style/Colorss/colors'
import HeaderBar from '../../component/HeaderBar'
import { Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const PromotionScreen:FC<Props> = ():JSX.Element => {
  return (
    <View style={styles.container}>
        <HeaderBar title='PROMOTION' backButton='chevron-left'/>

      <Surface style={styles.surfaceContainer} elevation={2}>
        <View>
          <Text style={styles.nameText}>Jhon Doe</Text>
          <Text style={styles.titleText}>Abc Company</Text>
          <Text style={styles.titleText}>Promotion Title: <Text style={[styles.titleText,{color:Colors.brand_primary}]}>Manager</Text></Text>
          <View style={{flexDirection:'row', alignItems:'center'}}>
              <Icon name='calendar-month-outline' size={20} color={Colors.black}/>
              <Text style={[styles.titleText,{marginLeft:10}]}>25th March 2023</Text>
          </View>
          <Text style={styles.titleText}>Description:<Text style={[styles.titleText,{color:Colors.brand_primary}]}>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text></Text>
        </View>
      </Surface>
    </View>
  )
}

export default PromotionScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    surfaceContainer:{
      backgroundColor:Colors.white,
      borderRadius:13,
      height:185,
      marginTop:30,
      marginHorizontal:15,
      paddingHorizontal:5
    },
    nameText:{
      fontFamily:'Poppins',
      fontWeight:'500',
      fontSize:15,
      color:Colors.brand_primary,
      marginTop:20
    },
    titleText:{
      fontFamily:'Poppins',
      fontWeight:'500',
      fontSize:11,
      color:Colors.customDarkGray,
      marginVertical:3
    }
})