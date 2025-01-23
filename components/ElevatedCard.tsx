import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View style={{}}>
      <Text style={[styles.colorTxt, styles.cardHeading]}>ElevatedCard</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.colorTxt}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.colorTxt}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.colorTxt}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.colorTxt}>Sky</Text>
        </View>
      </View>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  cardHeading: {
    fontSize: 20,
    paddingHorizontal: 8,
    paddingTop: 8,
    color: '#FFFFFF',
  },
  colorTxt: {
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    borderRadius: 4,
    margin: 8,
    color: '#FFFFFF',
  },
  cardOne: {
    backgroundColor: '#FF0000',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
  cardFour: {
    backgroundColor: '#5ACAFF',
  },
});
