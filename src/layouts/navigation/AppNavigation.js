import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import WorkThroughScreen from '../screens/Auth/WorkThroughScreen';
import TabNavigation from './TabNavigation';
import WorkingHours from '../screens/Home/WorkingHours';
import Profile from '../screens/Profile/Profile';
import Attendance from '../screens/Profile/Attendance';
import Leave from '../screens/Profile/Leave';
import Salary from '../screens/Profile/Salary';
import Payslip from '../screens/Profile/Payslip';
import Holiday from '../screens/Holiday/Holiday';
import Awards from '../screens/Awards/Awards';
import AwardForm from '../screens/Awards/AwardForm';
import Travel from '../screens/Travel/Travel';
import Promotion from '../screens/Awards/Promotion';
import ApplyLeave from '../screens/Profile/ApplyLeave';
import Travel1 from '../screens/Travel/Travel1';
import PromotionForm from '../screens/Awards/PromotionForm';
import Transfer from '../screens/Transfer/Transfer';
import TransferForm from '../screens/Transfer/TransferForm';
import ComplainForm from '../screens/Complain/ComplainForm';
import Complain from '../screens/Complain/Complain'
import Notification from '../screens/Notification/Notification';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="WorkThrough" screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name='WorkThrough' component={WorkThroughScreen}/>
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='TabNavigation' component={TabNavigation} />
            <Stack.Screen name='Attendance' component={Attendance} />
            <Stack.Screen name='Leave' component={Leave} />
            <Stack.Screen name='Payslip' component={Payslip}/>
            <Stack.Screen name='Salary' component={Salary} />
            <Stack.Screen name='Holiday' component={Holiday} />
            <Stack.Screen name='Award' component={Awards} />
            <Stack.Screen name='AwardForm' component={AwardForm} />
            <Stack.Screen name='Travel' component={Travel}/>
            <Stack.Screen name='Promotion' component={Promotion} />
            <Stack.Screen name='WorkingHours' component={WorkingHours} />
            <Stack.Screen name='ApplyLeave' component={ApplyLeave} />
            <Stack.Screen name='Travel1' component={Travel1} />
            <Stack.Screen name='PromotionForm' component={PromotionForm} />
            <Stack.Screen name='Transfer'  component={Transfer}/>
            <Stack.Screen name='TransferForm' component={TransferForm} />
            <Stack.Screen name='ComplainFrom' component={ComplainForm}/>
            <Stack.Screen name='Complain' component={Complain} />
            <Stack.Screen name='Notification' component={Notification} />

        </Stack.Navigator>
    );
};

export default AppNavigation;
