import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/Home/HomeScreen";
import Colors from "../style/Colorss/colors";
import { Image } from "react-native";
import MenuScreen from "../screens/Profile/MenuScreen";
import AttendanceScreen from "../screens/Profile/AttendanceScreen";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator 
    initialRouteName="HomeScreen"
    
    screenOptions={{
      headerShown:false,
      tabBarStyle:{
      backgroundColor:Colors.brand_primary,
      paddingTop:5
    },
      tabBarActiveTintColor:Colors.white,

    }}
    >
        <Tab.Screen 
        name='HomeScreen' 
        component={HomeScreen} 
        options={{
          
          tabBarLabel:'',
          tabBarIcon:({color}) => (
            <Icon name="home" color={color} size={30}/>
          )
        }}/>

        <Tab.Screen name="AttendanceScreen" component={AttendanceScreen}
        options={{
          tabBarLabel:'',
          tabBarIcon:({color}) =>(
            <Icon name="timetable" color={color} size={30}/>
            
          )
        }}
        />
        <Tab.Screen name="MenuScreen" component={MenuScreen}
        options={{
          tabBarLabel:'',
          tabBarIcon:({color}) =>(
            <Icon name="account" color={color} size={30}/>
          )
        }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigation;