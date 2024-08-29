import { View,StyleSheet,StatusBar, Image,Text, TextInput,Pressable } from "react-native";

export default function SignUpScreen({navigation}){
    return(
        <View style={styles.container}>
            <StatusBar></StatusBar>
            {/*Back button*/}
            <Pressable onPress={()=>navigation.goBack()}><Image source={require('../assets/icons/back_icon.png')} style={styles.backIcon}></Image></Pressable>
            {/*Welcome texts*/}
            <Text style={styles.headerText}>Welcome Back</Text>
            <Text style={styles.subText}>Let's sign in</Text>
            <View style={styles.textFieldContainer}>
             <Image source={require('../assets/icons/fullname_icon.png')} style={styles.textfieldIcon}></Image>
             <TextInput placeholder="Full Name" style={styles.textfieldstyle}></TextInput>
            </View>
            
            <View style={styles.textFieldContainer}>
             <Image source={require('../assets/icons/textinput_email_icon.png')} style={styles.textfieldIcon}></Image>
             <TextInput placeholder="Email" style={styles.textfieldstyle}></TextInput>
            </View>
            
            <View style={styles.textFieldContainer}>
             <Image source={require('../assets/icons/textinput_pwd_icon.png')} style={styles.textfieldIcon}></Image>
             <TextInput placeholder="Password" style={styles.textfieldstyle}></TextInput>
            </View>
            
            <View style={styles.textFieldContainer}>
             <Image source={require('../assets/icons/textinput_pwd_icon.png')} style={styles.textfieldIcon}></Image>
             <TextInput placeholder="Confirm Password" style={styles.textfieldstyle}></TextInput>
            </View>

            <Pressable style={styles.signUpBtnContainer}><Text style={styles.btnTextStyle}>Sign Up</Text></Pressable>

            <Pressable style={styles.signinTextStyleContainer} onPress={()=>navigation.navigate('Login')}>
                <Text>Already have an account?</Text>
                <Text style={styles.signinSpanTextStyle}>Sign In!</Text>
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
        marginBottom: 24
      },
      textFieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 26,
        marginTop: 16,
        borderWidth: 1,
        width: 360,
        height: 60,
        borderRadius: 10

      },
      textfieldIcon: {
        marginLeft: 16
      },
      textfieldstyle: {
        marginLeft: 14.5
      },
      signUpBtnContainer: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#EC455F",
        width: 360,
        height: 60,
        marginLeft: 26,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center'
      },
      btnTextStyle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600'
      },
      signinTextStyleContainer:{
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 180
      },
      signinSpanTextStyle:{
        color: "#EC455F",
        fontWeight: '500'
      } 

});