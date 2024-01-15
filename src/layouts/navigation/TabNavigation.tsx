import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/Home/HomeScreen";
import Colors from "../style/Colorss/colors";
import { Image } from "react-native";
import Menu from "../screens/Profile/Menu";
import Attendance from "../screens/Profile/Attendance";

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
    
    screenOptions={{headerShown:false,
      tabBarStyle:{backgroundColor:Colors.brand_primary,flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',},
      tabBarActiveTintColor:Colors.white,

    }}
    >
        <Tab.Screen name='Home' component={HomeScreen} options={{
          tabBarLabel:'',
          tabBarIcon:({color}) =>(
            <Image 
            source={require('../img/home.png')}
            style={{ width: 24, height: 24, tintColor: color}} 
            />
          )
        }}/>

        <Tab.Screen name="Attendance" component={Attendance}
        options={{
          tabBarLabel:'',
          tabBarIcon:({color}) =>(
            <Image 
            source={require('../img/Vector.png')}
            style={{ width: 24, height: 24,tintColor: color  }} 
            />
          )
        }}
        />
        <Tab.Screen name="Menu" component={Menu}
        options={{
          tabBarLabel:'',
          tabBarIcon:({color}) =>(
            <Image 
            source={require('../img/user.png')}
            style={{ width: 24, height: 24, tintColor: color }} 
            />
          )
        }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigation;