import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import { CombinedDefaultTheme } from './src/utils/theme';
import AppNavigation from "./src/layouts/navigation/AppNavigation";
import { StatusBar } from 'react-native';
 
 
export default function App() {
    return (
        <PaperProvider theme={CombinedDefaultTheme}>
            <StatusBar barStyle={'light-content'} />
            <NavigationContainer theme={CombinedDefaultTheme}>
                <AppNavigation/>
            </NavigationContainer>
        </PaperProvider>
    );
}