import { StyleSheet, View, StatusBar,Image,Text,Pressable,SafeAreaView } from 'react-native';
import React from 'react';
export default function HomeScreen({navigation}){
    return(
        <SafeAreaView>
        <View style={styles.container}>
        <StatusBar></StatusBar>
        <Image source={require('../assets/images/landing_image.png')} style={styles.landingImgStyle}/>
        <Text style={styles.h1}>Enterprise Team
        Management</Text>
        <Text style={styles.paragraphStyle}>With an extensive menu prepared by talented chefs, fresh quality food.</Text>
        <Pressable onPress={()=>navigation.navigate('Signup')} style={styles.signUpBtbnStyles}><Text style={styles.btnTextStyle}>Sign Up</Text></Pressable>
        <Pressable onPress={()=>navigation.navigate('Login')} style={styles.infoBtn}><Text style={styles.infoBtnTextStyle}>Already have an account</Text></Pressable>
      </View>
        </SafeAreaView>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'start',
    },
    landingImgStyle: {
      marginTop: 85,
    },  
    h1:{
      marginTop: 25,
      fontSize: 30,
      width: 249,
      height: 100,
      textAlign: 'center',
      fontWeight: '700',
    },
    paragraphStyle: {
      marginTop: 25,
      width: 382,
      height: 50,
      fontSize: 16,
      fontWeight: '400',
      textAlign: 'center'
    },
    signUpBtbnStyles:{
      width: 382,
      height: 60,
      backgroundColor: "#EC455F",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 25,
  
    },
    btnTextStyle: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600'
    },
    infoBtn: {
      borderWidth: 1,
      width: 382,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 25
  
    },
    infoBtnTextStyle: {
      color: '#2C2C2C',
      fontSize: 18,
      fontWeight: '600'
    },
  });