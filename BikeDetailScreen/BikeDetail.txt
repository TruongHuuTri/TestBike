import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function BikeDetailScreen({ route }) {
  const { bike } = route.params;

  const [liked, setLiked] = useState(bike.liked); // Trạng thái thích

  const handleAddToCart = () => {
    alert(`${bike.name} đã được thêm vào giỏ hàng!`);
  };

  // Tính giá đã giảm
  const discountedPrice = bike.price - bike.price * (bike.discount / 100);

  return (
    <View style={styles.container}>
      <Image source={{ uri: bike.image }} style={styles.bikeImage} />
      <Text style={styles.bikeTitle}>{bike.name}</Text>

      {/* Adjusted price container */}
      <View style={styles.priceContainer}>
        <Text style={styles.bikeDiscount}>{bike.discount}% OFF</Text>
        <Text style={styles.bikeDiscountedPrice}>
          ${discountedPrice.toFixed(2)}
        </Text>
        <Text style={styles.bikeOriginalPrice}>${bike.price.toFixed(2)}</Text>
      </View>

      <Text style={styles.bikeDescriptionTitle}>Description</Text>
      <Text style={styles.bikeDescription}>{bike.description}</Text>

      <TouchableOpacity
        style={styles.heartButton}
        onPress={() => setLiked(!liked)} // Đổi trạng thái liked
      >
        <Text style={liked ? styles.heartLiked : styles.heartUnliked}>
          {liked ? '❤️' : '🤍'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleAddToCart}>
        <Text style={styles.addToCartText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f3f3', // Màu nền nhẹ
  },
  bikeImage: {
    width: '100%',
    height: 250, // Điều chỉnh chiều cao cho hình ảnh
    resizeMode: 'contain',
    backgroundColor: '#fee8e5',
    borderRadius: 10,
  },
  bikeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bikeDiscountedPrice: {
    fontSize: 16,
    color: '#e53935',
    marginLeft: 5, // Small margin to separate from discount
  },
  bikeOriginalPrice: {
    fontSize: 16,
    color: 'gray',
    textDecorationLine: 'line-through', // Gạch ngang cho giá gốc
    marginVertical: 5, // Margin above and below the original price
    marginLeft: 50,
  },
  bikeDescriptionTitle: {
    fontSize: 20,
    marginVertical: 5,
    fontWeight: 'bold',
    color: '#555', // Màu chữ mô tả
  },
  bikeDescription: {
    fontSize: 16,
    marginVertical: 5,
    color: '#555', // Màu chữ mô tả
  },
  bikeDiscount: {
    fontSize: 16,
    color: 'green', // Màu chữ giảm giá
    marginRight: 5, // Small margin to separate from discounted price
  },
  priceContainer: {
    flexDirection: 'row', // Align items in a row
    width: '100%', // Make sure it takes full width
    alignItems: 'center', // Center items vertically
    justifyContent: 'flex-start', // Align items to the start
    marginVertical: 10, // Vertical space for the price container
  },
  heartButton: {
    marginVertical: 10,
  },
  heartLiked: {
    fontSize: 32,
    color: 'salmon',
  },
  heartUnliked: {
    fontSize: 32,
    color: 'gray',
  },
  addToCartButton: {
    backgroundColor: '#e53935',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
  },
});
