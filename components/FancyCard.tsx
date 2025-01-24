import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.cardHeading}>Explore About Me</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image source={require('../assets/JJ.jpeg')} style={styles.cardImage} />

        <View style={[styles.imageHeading, styles.cardBody]}>
          <Text style={styles.imageTextHeading}>Muhammad and Jibreel</Text>
          <View>
            <Text style={styles.imageText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium quam ea ducimus quidem fuga voluptate consectetur iure
              in nostrum sapiente reiciendis excepturi ex eos consequuntur
              placeat, deserunt tempore laborum iste asperiores accusamus,
              itaque nemo.
            </Text>
          </View>
        </View>
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
  imageHeading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  imageText: {color: '#000000'},
  imageTextHeading: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  card: {
    height: 450,
    width: 380,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: '70%',
    width: '100%',
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 26,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
});
