import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { FC } from 'react';
import { Surface } from 'react-native-paper';

interface Props{
    navigation:any
}

const Surface:FC<Props>= ({navigation}):JSX.Element => {
  return (
    <Surface elvation={2}>
        <Text></Text>
    </Surface>
  )
}

export default Surface

const styles = StyleSheet.create({})