import { View,StyleSheet,Text,Image,StatusBar,TextInput, Pressable } from "react-native";
export default function LoginScreen({navigation}){
  // Download the helper library from https://www.twilio.com/docs/node/install

    return(
        <View style={styles.container}>
            <StatusBar></StatusBar>
            {/*Back button*/}
           <Pressable onPress={()=>navigation.goBack()}><Image source={require('../assets/icons/back_icon.png')} style={styles.backIcon}></Image></Pressable>
            {/*Welcome texts*/}
            <Text style={styles.headerText}>Welcome Back</Text>
            <Text style={styles.subText}>Let's sign in</Text>
            {/*Email and password textfields container*/}
            <View style={styles.inputTextContainerStyle}>
            {/*Email InputText container*/}
            <View style={styles.textinputContainer}>
                <Image source={require('../assets/icons/textinput_email_icon.png')} style={styles.textinputIcon}></Image>
                <TextInput placeholder="Email" style={styles.textinputsStyles}></TextInput>
            </View>
             {/*Password InputText Container*/}
            <View style={styles.textinputContainer}>
                <Image source={require('../assets/icons/textinput_pwd_icon.png')} style={styles.textinputIcon}></Image>
                <TextInput placeholder="Password" style={styles.textinputsStyles}></TextInput>
            </View>

            </View>
            {/*End of Container*/}
            <View style={styles.recoverPWdTxtBtnContainer}><Text style={styles.recoverPWdTxtBtn}>Recover Password</Text></View>
            {/*Signin button*/}
            <Pressable style={styles.signInBtn}>
              <Text style={styles.signinbtnTxtStyle}>Sign In</Text>  
            </Pressable>
            {/*Separator text*/}
            <View style={styles.separatorsContainer}> 
                <View style={styles.separators}></View>
                <Text style={styles.separatorText}>or continue with</Text>
                <View style={styles.separators}></View>
            </View>
            {/*sign in with google account button*/}
            <Pressable style={styles.alternativeSininBtn}>
                <Image source={require('../assets/icons/google_icon.png')} style={styles.alternativeSigninbtnIcon}></Image>
                <Text style={styles.alternativeSininBtnTxt}>Continue with Google</Text>
            </Pressable>
            <Pressable style={styles.alternativeSininBtn}>
                <Image source={require('../assets/icons/facebook_icon.png')} style={styles.alternativeSigninbtnIcon}></Image>
                <Text style={styles.alternativeSininBtnTxt}>Continue with Google</Text>
            </Pressable >
            <Pressable style={styles.signupTextContainer} onPress={()=>navigation.navigate('Signup')}>
            <Text>Don’t have an account?</Text>
            <Text style={styles.signUpTextStyle}>Sign Up!</Text>
            </Pressable>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'start',
        justifyContent: 'start',
      },
      backIcon: {
        marginTop: 25,
        marginLeft: 26
      },
      headerText: {
        fontSize: 30,
        fontWeight: '700',
        color: '#2C2C2C',
        marginLeft: 26,
        marginTop: 23,
      },
      subText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#2C2C2C',
        marginLeft: 26,
        marginTop: 23,
      },
      textinputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 26,
        borderColor: '##2C2C2C',
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 26,
        marginTop: 16
      },
      textinputsStyles: {
        flex: 1,
        marginLeft: 14,
        width: 382,
        height: 60,
        fontSize: 18
      },
      inputTextContainerStyle: {
        marginTop: 40 
      },
      textinputIcon: {
        marginLeft: 14
      },
      recoverPWdTxtBtn:{
        color: '#EC455F',
        fontSize: 18,
        fontWeight: '600',
      
      },
      recoverPWdTxtBtnContainer:{
        marginTop: 16,
        alignItems: 'flex-end',
        marginRight: 26,
    
      },
      signInBtn:{
        backgroundColor: '#EC455F',
        width: 360,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 26,
        borderRadius: 10,
        marginTop: 60
        
      },
      signinbtnTxtStyle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '800',
      
      },
      separatorsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
      },
      separators:{
        borderWidth: 1,
        borderColor: '#2C2C2C',
        width: 117,
        height: 0
      },
      separatorText: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
        fontWeight: '400'
      },
      alternativeSininBtn: {
        flexDirection: "row",
        alignItems: 'center',
        width: 360,
        height: 60,
        borderWidth: 1,
        borderColor: '#2C2C2C',
        marginLeft: 26,
        marginTop: 26,
        borderRadius: 10
      },
      alternativeSininBtnTxt:{
        flex: 1,
        marginLeft: 34,
        fontSize: 18,
        fontWeight: '800',
        color: '#2C2C2C'   
      },
      alternativeSigninbtnIcon:{
        marginLeft: 26
      },
      signupTextContainer:{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center'
      },
      signUpTextStyle:{
        color: '#EC455F',
        fontWeight: '500'
      }

});