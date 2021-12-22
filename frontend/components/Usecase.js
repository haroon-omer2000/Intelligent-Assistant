import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Usecase = ({useCase}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style = {styles.useCase}>
            <View style = {styles.useCaseView}>
                <Text onPress={()=>navigation.push(useCase.id)} style = {styles.useCaseText} >{useCase.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    useCase : {
        padding : 15,
        borderBottomWidth : 1,
        borderColor : '#eee',
        backgroundColor : '#2e2e1f'
    },
    useCaseView : {
        flexDirection : 'column',
        alignItems:'center',
    },
    useCaseText : {
        color : 'white'
    }
});

export default Usecase;
