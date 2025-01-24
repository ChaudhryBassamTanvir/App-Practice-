import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in Typescript</Text>
        </View>

        <Image
          source={require('../assets/London.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            magni, rerum omnis fugit repudiandae quod repellendus hic rem dolore
            nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laborum placeat doloremque officia expedita dolore ea corporis minus
            perferendis atque soluta.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://github.com/ChaudhryBassamTanvir')
            }>
            <Text style={styles.buttonReadMore}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 100,
  },
  bodyContainer: {},
  footerContainer: {
    fontSize: 24,
    color: '#000000',
    backgroundColor: '#FF0000',
    height: 40,
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  buttonReadMore: {color: '#FFFFFF', fontWeight: 'bold'},
});
