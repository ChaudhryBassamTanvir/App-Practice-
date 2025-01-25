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
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 400,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 150,
    width: 'auto',
  },
  bodyContainer: {padding: 10},
  footerContainer: {
    fontSize: 24,
    color: '#000000',
    backgroundColor: '#FFFFFF',
    height: 40,
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  buttonReadMore: {color: '#000000', fontWeight: 'bold'},
});
