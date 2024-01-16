import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import WorkThroughScreen from '../screens/Auth/WorkThroughScreen';
import TabNavigation from './TabNavigation';
import WorkingHoursScreen from '../screens/Home/WorkingHoursScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import AttendanceScreen from '../screens/Profile/AttendanceScreen';
import LeaveScreen from '../screens/Profile/LeaveScreen';
import SalaryScreen from '../screens/Profile/SalaryScreen';
import PayslipScreen from '../screens/Profile/PayslipScreen';
import HolidayScreen from '../screens/Holiday/HolidayScreen';
import AwardScreen from '../screens/Awards/AwardScreen';
import AwardFormScreen from '../screens/Awards/AwardFormScreen';
import TravelScreen from '../screens/Travel/TravelScreen';
import PromotionScreen from '../screens/Awards/PromotionScreen';
import ApplyLeaveScreen from '../screens/Profile/ApplyLeaveScreen';
import Travel1Screen from '../screens/Travel/Travel1Screen';
import PromotionFormScreen from '../screens/Awards/PromotionFormScreen';
import TransferScreen from '../screens/Transfer/TransferScreen';
import TransferFormScreen from '../screens/Transfer/TransferFormScreen';
import ComplainFormScreen from '../screens/Complain/ComplainFormScreen';
import ComplainScreen from '../screens/Complain/ComplainScreen'
import NotificationScreen from '../screens/Notification/NotificationScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="WorkThroughScreen" screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name='WorkThroughScreen' component={WorkThroughScreen}/>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
            <Stack.Screen name='TabNavigation' component={TabNavigation} />
            <Stack.Screen name='AttendanceScreen' component={AttendanceScreen} />
            <Stack.Screen name='LeaveScreen' component={LeaveScreen} />
            <Stack.Screen name='PayslipScreen' component={PayslipScreen}/>
            <Stack.Screen name='SalaryScreen' component={SalaryScreen} />
            <Stack.Screen name='HolidayScreen' component={HolidayScreen} />
            <Stack.Screen name='AwardScreen' component={AwardScreen} />
            <Stack.Screen name='AwardFormScreen' component={AwardFormScreen} />
            <Stack.Screen name='TravelScreen' component={TravelScreen}/>
            <Stack.Screen name='PromotionScreen' component={PromotionScreen} />
            <Stack.Screen name='WorkingHoursScreen' component={WorkingHoursScreen} />
            <Stack.Screen name='ApplyLeaveScreen' component={ApplyLeaveScreen} />
            <Stack.Screen name='Travel1Screen' component={Travel1Screen} />
            <Stack.Screen name='PromotionFormScreen' component={PromotionFormScreen} />
            <Stack.Screen name='TransferScreen'  component={TransferScreen}/>
            <Stack.Screen name='TransferFormScreen' component={TransferFormScreen} />
            <Stack.Screen name='ComplainFormScreen' component={ComplainFormScreen}/>
            <Stack.Screen name='ComplainScreen' component={ComplainScreen} />
            <Stack.Screen name='NotificationScreen' component={NotificationScreen} />

        </Stack.Navigator>
    );
};

export default AppNavigation;
