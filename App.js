// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="dark" /> */}
      <LoginScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Dimensions.get('screen').height*0.05
  },
});
