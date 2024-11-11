// AddBikeScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBike } from '../redux/bikesSlice';
import axios from 'axios';

export default function AddBikeScreen({ navigation }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [discount, setDiscount] = useState('');
  const [liked, setLiked] = useState(false); // Thêm trạng thái liked nếu cần

  const handleAddBike = async () => {
    // Kiểm tra dữ liệu đầu vào
    if (!name || !image || !price || !type || !description || !discount) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin xe đạp.');
      return;
    }

    const newBike = {
      name,
      image,
      price: parseFloat(price),
      type,
      description,
      discount: parseFloat(discount),
      liked: liked, // Giá trị mặc định hoặc từ người dùng
    };

    try {
      // Gửi yêu cầu POST đến API để thêm xe đạp mới
      const response = await axios.post('https://6731c1777aaf2a9aff11e3cd.mockapi.io/bike', newBike);
      
      // API trả về dữ liệu xe đạp mới đã được thêm, bao gồm id
      const addedBike = response.data;

      // Cập nhật Redux store
      dispatch(addBike(addedBike));

      Alert.alert('Thành công', 'Xe đạp đã được thêm thành công!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Lỗi', 'Không thể thêm xe đạp mới. Vui lòng thử lại.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Type"
        value={type}
        onChangeText={setType}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Discount"
        value={discount}
        onChangeText={setDiscount}
        style={styles.input}
        keyboardType="numeric"
      />

      {/* Nếu bạn muốn thêm toggle cho trạng thái liked, bạn có thể thêm Switch hoặc TouchableOpacity ở đây */}

      <Button title="Add Bike" onPress={handleAddBike} color="#e53935" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f7f3f3',
  },
  input: {
    height: 40,
    borderColor: '#e53935',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
