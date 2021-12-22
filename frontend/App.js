import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import CreateCaptions from './components/CreateCaptions';
import GenerateStories from './components/GenerateStories';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import LoadingAnimation from './components/LoadingAnimation';

const APP_NAME = "Intelligent Assistant";

const Stack = createStackNavigator();

function App() {
  
  const [loading,setLoading] = useState(false);
  const [useCases,setUseCases] = useState([
    { 
        id: 'createCaptions',
        description:'Create Captions'
    },
    {
        id: 'generateStory',
        description:'Generate Stories'
    },
  ]);

  const handleSetLoading = (status) =>{
    setLoading(status);
  }

  return (
      <>
        <View style = {styles.container}>

          <Header appName = {APP_NAME}/>

          <Stack.Navigator>

            <Stack.Screen name = "Home" options = {{'title':'Choose A Use Case'}} >
              {(props) => <Home useCases = {useCases} />}
            </Stack.Screen>

            <Stack.Screen name = "createCaptions" options = {{'title':'Create Captions'}}>
              {(props) => <CreateCaptions handleSetLoading = {handleSetLoading} />}
            </Stack.Screen>

            <Stack.Screen name = "generateStory" options = {{'title':'Generate Stories'}}>
              {(props) => <GenerateStories handleSetLoading = {handleSetLoading} />}
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
  },
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

