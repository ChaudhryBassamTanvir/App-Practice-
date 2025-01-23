import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.cardHeading}>FancyCard</Text>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  cardHeading: {
    fontSize: 20,
    paddingHorizontal: 8,
    paddingTop: 8,
    color: '#FFFFFF',
  },
  card: {},
  cardElevated: {},
});
