import { StatusBar, StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';
import Details from './components/details';
import MonthOverview from './components/monthOverview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MonthOverview />
      {/* <Details /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    display: 'flex',
    alignItems: 'center'
  },
});
