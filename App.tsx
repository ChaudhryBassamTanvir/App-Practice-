import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import OnPress from './components/Count';
import Count from './components/Count';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView style={styles.containerBg}>
      <ScrollView>
        <Text style={styles.container}>First Practice Project</Text>

        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        {/* <FancyCard /> */}
        <ActionCard />
        <Count />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    // Ensure text is centered vertically
  },
  containerBg: {
    // backgroundColor: '#000000',
    // height: '100%',
  },
});
