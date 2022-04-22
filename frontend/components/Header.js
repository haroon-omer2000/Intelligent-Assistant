import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Contants from 'expo-constants';

const Header = ({appName}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{appName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        marginTop : Contants.statusBarHeight,
        paddingTop: 15,
        backgroundColor: '#324aa8',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default Header;
