import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.cardHeading}>Explore About Me</Text>

      <View>
        <Image source={require('../assets/JJ.jpeg')} style={styles.cardImage} />
      </View>
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
  cardImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover', // Ensures the image scales properly
  },
});
