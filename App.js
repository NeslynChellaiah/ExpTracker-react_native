import { StatusBar, StyleSheet, Platform, SafeAreaView } from 'react-native';
import Details from './components/details';
import MonthOverview from './components/monthOverview';
import { SafeAreaProvider } from 'react-native-safe-area-context';


var screen = "main"
export default function App() {
  screen = ""
  const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: (screen === 'main' ? "#171717" : '#5B21B6'),
    },
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
          {/* <MonthOverview /> */}
        <Details />    
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


