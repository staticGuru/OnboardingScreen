
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Colors from "./colors/default.colors";


const Onboarding_2=()=> {
  return (
    <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('./assets/mobileImage-2.png')}/>
      <Text style={styles.logoTitle}>Confirm mechanic</Text>
      <Text style={styles.logoText}>Huge mechanic network helps you find quality and cheap repair</Text>
    </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: Colors.white,
    // alignItems:'center',
  },
  logo: {
    height: 278,
    width: 278,
    marginTop:'30%'
  },
  logoContainer:{
    alignItems:'center'
  },
  logoTitle:{
    fontSize:30,
    color:Colors.black,
    marginTop:40
  },
  logoText:{
    fontSize:17,
    color:Colors.black,
    marginTop:30,
    textAlign:'center',
    width:300,
  },
  // sideTapslider: {
  //   position:'absolute',
  //   bottom:20,
    
  // },
});



export default Onboarding_2;