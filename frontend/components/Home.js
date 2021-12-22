import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import Usecase from './Usecase';

const Home = ({useCases}) => {
    return (
        <View style = {styles.container}>
            <FlatList 
                data = {useCases} 
                renderItem = {({item}) => <Usecase useCase = {item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex : 1 ,
    },
});

export default Home;