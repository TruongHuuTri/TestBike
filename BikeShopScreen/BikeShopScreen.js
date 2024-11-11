// BikeShopScreen.js
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setBikes } from '../redux/bikesSlice';

export default function BikeShopScreen({ navigation }) {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bike.bikes);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    axios
      .get('https://6731c1777aaf2a9aff11e3cd.mockapi.io/bike')
      .then((response) => {
        dispatch(setBikes(response.data));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to load bikes');
        setLoading(false);
      });
  }, [dispatch]);

  // Phân loại xe
  const filteredBikes =
    selectedCategory === 'All'
      ? bikes
      : bikes.filter((bike) => bike.type === selectedCategory);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#e53935" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={{ color: '#e53935' }}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>The World's Best Bikes</Text>
        {/* Add button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddBike')}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        {['All', 'Roadbike', 'Mountain'].map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
          >
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* FlatList to display bikes in two columns */}
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        data={filteredBikes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bikeItem}>
            <TouchableOpacity
              onPress={() => navigation.navigate('BikeDetail', { bike: item })}
            >
              <TouchableOpacity style={styles.heartButton}>
                <Text style={item.liked ? styles.heartLiked : styles.heartUnliked}>
                  {item.liked ? '❤️' : '🤍'}
                </Text>
              </TouchableOpacity>
              <Image source={{ uri: item.image }} style={styles.bikeImage} />
              <View style={styles.bikeInfoContainer}>
                <Text style={styles.bikeTitle}>{item.name}</Text>
                <Text style={styles.bikePrice}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f3f3',
    padding: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e53935',
  },
  addButton: {
    backgroundColor: '#e53935',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#e53935',
    borderRadius: 10,
    color: '#e53935',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  selectedCategoryButton: {
    backgroundColor: 'salmon',
    color: '#fff',
  },
  bikeItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#fee8e5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
  bikeImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 5,
    marginTop: 20,
  },
  bikeInfoContainer: {
    alignItems: 'center',
  },
  bikeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bikePrice: {
    fontSize: 16,
    color: '#e53935',
    textAlign: 'center',
  },
  heartButton: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  heartLiked: {
    fontSize: 24,
    color: 'salmon',
  },
  heartUnliked: {
    fontSize: 24,
    color: 'gray',
  },
  row: {
    justifyContent: 'space-between',
  },
});
