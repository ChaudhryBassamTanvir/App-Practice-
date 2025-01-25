import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Chaudhry Bassam Tanvir',
      status: 'App Developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/179320082?v=4',
    },
    {
      uid: 2,
      name: 'Fatima Rasheed',
      status: 'Web Developer',
      imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      uid: 3,
      name: 'Muhammad Abdullah',
      status: 'Software Engineer',
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      uid: 4,
      name: 'Affan Sheikh',
      status: 'SEO Expert',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      uid: 5,
      name: 'Ayesha Khan',
      status: 'UI/UX Designer',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>

      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts.map(item => (
          <View key={item.uid} style={styles.userCard}>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              {' '}
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userStatus}>{item.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8},
  container: {
    paddingHorizontal: 16,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  userName: {},
  userStatus: {},
  userCard: {
    flex: 1,
    flexDirection: 'row',
  },
});
