import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Card, Button, Icon } from '@rneui/themed';


const Usecase = ({useCase}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Card>
                    <Card.Title>{useCase.name}</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={styles.useCaseImage}
                        source={{
                        uri:
                            'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }}
                    />
                    <Text style={styles.useCaseDescription}>
                        {useCase.description}
                    </Text>
                    <Button
                        onPress={()=>navigation.push(useCase.id)} style = {styles.useCaseText}
                        icon={
                        <Icon
                            name="code"
                            color="white"
                            iconStyle={styles.iconStyle}
                        />
                        }
                        title="GO"
                        buttonStyle={styles.btn}
                    />
                    </Card>
                </View>
            </ScrollView>
            {/*<TouchableOpacity style = {styles.useCase}>
                <View style = {styles.useCaseView}>
                    <Text onPress={()=>navigation.push(useCase.id)} style = {styles.useCaseText} >{useCase.description}</Text>
                </View>
        </TouchableOpacity>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#324aa8'
    },
    useCase : {
        padding : 15,
        borderBottomWidth : 1,
    },
    useCaseView : {
        flexDirection : 'column',
        alignItems:'center',
    },
    useCaseText : {
    },
    useCaseDescription: {
        marginBottom: 10,
    },
    useCaseImage: {
        marginBottom: 10,
    },
    iconStyle: {
        marginRight: 10,
    },
    btn:{
        backgroundColor:'#a85932'
    }
});

export default Usecase;
