import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/themed';
import LottieView from 'lottie-react-native';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Splash = () => {
  
  
  const navigation = useNavigation();
  useEffect(() => {
    const timeoutId = setTimeout(() =>{
      navigation.replace('BottomTav');
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={style.container}>
      <LottieView  source={ require('../assets/loading.json') }
      autoPlay={true}
      loop={true}
      style={style.loadingAnimation}/>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Loading...</Text>
    </View>
    
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    
  },
  loadingAnimation:{
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  img:{
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});

export default Splash;