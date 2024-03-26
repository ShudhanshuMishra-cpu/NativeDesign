/* eslint-disable prettier/prettier */
import * as React from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook


export default function TaskCompletion() {

  const navigation = useNavigation();


  const navigateToInventoryDetails = () => {
    navigation.navigate('InventoryDetails');
  };


  return (

    < ScrollView>

      <View style={styles.Main}>

        <View style={styles.container}>
          {/* Image at the top */}
          <Image
            source={{ uri: 'https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15.jpg' }} // Replace with your image source
            style={styles.image}
          />

          {/* Title */}
          <Text style={styles.title}>Inventory Count</Text>

          {/* Paragraph with two parts */}
          <View style={styles.paragraphContainer}>
            {/* Left part of the paragraph */}
            <Text style={styles.leftText}>In Progress Tap to view details </Text>

            {/* Right part with "View Details" button */}
            <View style={styles.rightContainer}>
              <TouchableOpacity style={styles.viewDetailsButton} onPress={navigateToInventoryDetails}>
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

        <View style={styles.container}>
          {/* Image at the top */}
          <Image
            source={{ uri: 'https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15.jpg' }} // Replace with your image source
            style={styles.image}
          />

          {/* Title */}
          <Text style={styles.title}>Staff Tracking</Text>

          {/* Paragraph with two parts */}
          <View style={styles.paragraphContainer}>
            {/* Left part of the paragraph */}
            <Text style={styles.leftText}>In Progress Tap to view details </Text>

            {/* Right part with "View Details" button */}
            <View style={styles.rightContainer}>
              <TouchableOpacity style={styles.viewDetailsButton}>
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <View style={styles.container}>
          {/* Image at the top */}
          <Image
            source={{ uri: 'https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15.jpg' }} // Replace with your image source
            style={styles.image}
          />

          {/* Title */}
          <Text style={styles.title}>Order Processing</Text>

          {/* Paragraph with two parts */}
          <View style={styles.paragraphContainer}>
            {/* Left part of the paragraph */}
            <Text style={styles.leftText}>In Progress Tap to view details </Text>

            {/* Right part with "View Details" button */}
            <View style={styles.rightContainer}>
              <TouchableOpacity style={styles.viewDetailsButton}>
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>

  );
}


const styles = StyleSheet.create({

  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraphContainer: {
    flexDirection: 'row',
    // marginBottom: 5,
  },
  leftText: {
    flex: 2,
    marginRight: 10,
    fontSize: 16,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  rightText: {
    marginBottom: 10,
    fontSize: 16,
  },
  viewDetailsButton: {
    backgroundColor: '#3498db', // Change the background color as needed
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});