import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Colors from "./colors/default.colors";

import Onboarding_1 from './Onboarding_1.js';
import Onboarding_2 from './Onboarding_2.js';
import Onboarding_3 from './Onboarding_3.js';

const App =(props)=> {
  const Square = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? 'white' : 'white';
    } else {
      backgroundColor = selected ? Colors.primaryColor : 'rgba(200, 200, 200, 0.5)';
    }
    return (
      <View
        style={{
          width: 30,
          height: 6,
          borderRadius:1,
          marginHorizontal: -1,
          
          backgroundColor,
        }}
      />
    );
  };
  const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
  const color = isLight => backgroundColor(!isLight);



  return (
    <Onboarding style={{backgroundColor: Colors.white}}
         DotComponent={Square}
         bottomBarHeight={60}
         bottomBarColor='white'
        // activeDotStyle={{width:40,backgroundColor:'red'}}
         
         pages={[
           {
            
             image:<Onboarding_1/>,
            // bottomBarHeight:20,
            // backgroundColor:'white'
           

           },
           {
             image:<Onboarding_2/>,
            // bottomBarHeight:20,
           },
           {
            image:<Onboarding_3/>,
            // bottomBarHeight:20,
          },
         ]}
    
    
    
    
    />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems:'center',
  },
  Onboarding:{
    // bottomBarHeight:'default',

  },
});




export default App;