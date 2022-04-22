import React, {useState} from 'react';
import {StyleSheet, View } from 'react-native';
import Header from './components/Header';
import CreateCaptions from './components/CreateCaptions';
import GenerateStories from './components/GenerateStories';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import LoadingAnimation from './components/LoadingAnimation';
import SpeechStory from './components/SpeechStory';

const APP_NAME = "Intelligent Assistant";

const Stack = createStackNavigator();

function App() {
  
  const [loading,setLoading] = useState(false);
  const [useCases,setUseCases] = useState([
    { 
        id: 'createCaptions',
        name: 'Describe A Picture',
        description: "Upload any picture and read details about it!"
    },
    {
        id: 'generateStory',
        name: 'Read A Story',
        description: "Upload any picture and read a creative fun story about it!"
    },
    {
      id: 'generateSpeech',
      name: 'Listen To A Story',
      description: "Upload any picture and listen to its fun story in your favorite language!"
    }
  ]);

  const handleSetLoading = (status) =>{
    setLoading(status);
  }

  return (
      <>
        <View style = {styles.container}>

          <Header appName = {APP_NAME}/>

          <Stack.Navigator>
  
            <Stack.Screen style={styles.temp} name = "Home" options = {{'title':'Welcome!','headerStyle':styles.header,'headerTitleAlign':'center', 'headerTitleStyle':styles.headercolor}} >
              {(props) => <Home useCases = {useCases} />}
            </Stack.Screen>

            <Stack.Screen name = "createCaptions" options = {{'title':'Create Captions'}}>
              {(props) => <CreateCaptions handleSetLoading = {handleSetLoading} />}
            </Stack.Screen>

            <Stack.Screen name = "generateStory" options = {{'title':'Generate Stories'}}>
              {(props) => <GenerateStories handleSetLoading = {handleSetLoading} />}
            </Stack.Screen>

            <Stack.Screen name = "generateSpeech" options = {{'title':'Story Speech'}}>
              {(props) => <SpeechStory handleSetLoading = {handleSetLoading} />}
            </Stack.Screen>

          </Stack.Navigator>
           
        </View>

        { loading ?
            <LoadingAnimation />
            : null
        }

      </>
  );
}

export default () => {
  return (
  <NavigationContainer>
    <App />
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1 ,
    paddingTop : 60,
    backgroundColor:'#324aa8'
  },
  temp: {
    paddingTop: 100
  },
  header: {
    backgroundColor:'#324aa8'
  },
  headercolor:{
    color:'white'
  }
});


/* {/*<GenerateStories />
            {/*<View > 
            <CreateCaptions />
              <Header appName={APP_NAME}/>
            <Home useCases = {useCases} />


            <FlatList 
              data = {useCases} 
              renderItem = {({item}) => <Usecase useCase = {item} nItems = {useCases.length} />}
              />
            </View>*/

              /*
  useEffect( () => {

    fetch("http://192.168.18.25:5000/get").then(response=>response.json().then(data=>{
      setMessage(data['Test'])
    })).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
       // ADD THIS THROW error
        throw error;
      })
  },[]);*/

