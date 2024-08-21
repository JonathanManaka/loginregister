
import { StyleSheet, View, StatusBar,Image,Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <Image source={require('./assets/images/landing_image.png')} style={styles.landingImgStyle}/>
      <Text>Enterprise Team
      Management</Text>
  
      
    </View>
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
    marginTop: 150,
  },  
});
