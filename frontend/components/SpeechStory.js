import React, {useState} from 'react';
import {View,Text,StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker'

const ip = '192.168.103.190';

//const ip = '172.17.60.110';
//const ip = '172.16.56.41'
//const ip = '192.168.18.63';

const SpeechStory = ({handleSetLoading}) => {

    const [image,setImage] = useState('');
    const [imageData,setImageData] = useState('');
    const [story,setStory] = useState('');
    const [uploadedImage,setUploadedImage] = useState(false);
    const [selectedLanguage,setSelectedLanguage] = useState('English');
    const [open, setOpen] = useState(false);
    const [languages, setLanguages] = useState([
        {label: 'English', value: 'English'},
        {label: 'Urdu', value: 'Urdu'}
    ]);


    const openImageLibrary = async () =>{
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted")
            alert("We need you to grant access to your gallery to make this work!")
        else{
            const response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Images,
                allowsEditing : true,
                base64 : true,
            });
            
            if (!response.cancelled){
                setImage(response.uri);
                setImageData(response.base64);
                setUploadedImage(true);
                setStory('');
            }
        }
    }

    const uploadImage = async () =>{    

        handleSetLoading(true);        

        console.log('Upload Image');

        var imgName = 'testImage.png';

        setUploadedImage(false);

        const imgData = {
            image,
            imgName,
            imageData,
            selectedLanguage
        };

            const response = await fetch(`http://${ip}:5000/speech_story`,{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(imgData)
            }).then(response=>response.json().then(data=>{
                    setStory(data['Data']);
                    console.log('recieved message from backend: ',data['Data']);
                    if (data['Status'])
                        handleSetLoading(false);
            }));

    }

    return (
        <View style = {styles.container}>
            <View style = {styles.languageDrpDwn}>
                <View style={styles.header}>
                    <Text style={styles.text}>Select Language for Story:</Text>
                </View>
                <DropDownPicker
                    open={open}
                    value={selectedLanguage}
                    items={languages}
                    setOpen={setOpen}
                    setValue={setSelectedLanguage}
                    setItems={setLanguages}
                />
            </View>
            <View style = {styles.container}>
                <TouchableOpacity style = {styles.uploadBtnContainer} onPress = {openImageLibrary}>
                    { image ? 
                        (<Image id="myImage" style = {styles.image} source = {{uri : image}} />) 
                        : <Text style = {styles.uploadBtn}>Upload Image</Text>
                    }
                </TouchableOpacity>
                { (image && uploadedImage ) ? 
                    (<Text style = {styles.uploadIcon} onPress = {uploadImage} >Generate Audio</Text>)
                    : null
                }
                {story ?
                    (
                        <View>
                            <Text style = {styles.uploadIcon}>Generated Audio</Text>
                            <Text style = {styles.uploadStatus} >{story}</Text>
                        </View>
                    )
                    :null
                }
            </View>
        </View>
    )    
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    uploadBtnContainer : {
        height : 200,
        width : 200,
        alignItems : 'center',
        justifyContent : 'center',
        borderStyle : 'dashed',
        borderWidth : 1,
        overflow : 'hidden',
    },
    uploadBtn : {
        textAlign : 'center',
        fontSize : 16,
        opacity : 0.3,
        fontWeight : 'bold'
    },
    uploadIcon : {
        textAlign : 'center',
        padding : 10,
        fontSize : 16,
        fontWeight : 'bold',
        textTransform : 'uppercase',
        letterSpacing : 2,
        opacity : 0.8,
        marginTop : 10,
        backgroundColor : 'darkslateblue',
        color : 'white',
        borderRadius : 8,
        marginBottom: 30,
    },
    image : {
        height : '100%',
        width : '100%',
    },
    uploadStatus : {
        color : 'black',
        padding : 20,
    },
    textWrapper : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
    },
    languageDrpDwn : {
        justifyContent : 'center',
    },
    header: {
        height: 40,
        paddingTop: 10,
        backgroundColor: '#2e2e1f',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'left',
    }
});

export default SpeechStory;