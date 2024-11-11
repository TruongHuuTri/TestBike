import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  // Accept navigation prop
  return (
    <View style={styles.container}>
      {/* Top Text */}
      <Text style={styles.topText}>A premium online store for sporter</Text>
      <Text style={styles.topText}>and their stylish choice</Text>

      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6RgZqYaaj2yoEYcjn1xLuF6ejkVm5sj0Q2REjJLnMUO7MB-JMtKcmnFw8oA-21~I278VVSigiVjDi7As9CR8e3d0kVdVahjQ~iK24vFqNq26DEEOxvhKmjWhZAptz4w3HeHoO~IRWnv~zcorXAalQ98u9FQT01fBOz5h3Xu-xZ1ccmd6yJnkN~HrEe0q~G2NjvHeZNIHigUZDSaqNOTgHiekyzPG7ia0oc~O9v16nJz15q0JFFhE3vWf4030yzjsSL~8XGw0oRTUWVMMhxxyYnwfZmfvbqe-B5y~Gechq~e5NVwMqeG~LOWh8KvYiOrY-jz0uuelyFgi2DqzkJuPA__',
          }} // Replace with actual image URL
          style={styles.image}
        />
      </View>

      {/* Shop Title */}
      <Text style={styles.shopTitle}>POWER BIKE SHOP</Text>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BikeShop')}>
        {' '}
        {/* Corrected name */}
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
    fontFamily: 'Bahnschrift Condensed',
  },
  imageContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: '#FEE8E5',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  shopTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
