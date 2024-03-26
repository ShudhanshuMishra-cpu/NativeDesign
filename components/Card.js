/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Card = () => {
  const navigation = useNavigation(); 
  const navigateToProductsCounted = () => {
    navigation.navigate('ProductsCounted');
  };

  const navigateToEstimatedRevenue = () => {
    navigation.navigate('EstimatedRevenue');
  };
  const navigateToTaskCompletion = () => {
    navigation.navigate('TaskCompletion');
  };
  return (
    <View>
      <View style={styles.Pcard}>
        <TouchableOpacity style={styles.card}  onPress={navigateToProductsCounted}>
          <View style={styles.upperSection}>
            <Text style={styles.text}>Products Counted</Text>
          </View>
          <View style={styles.lowerSection}>
            <Text style={styles.digit}>250</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <View style={styles.upperSection}>
            <Text style={styles.text}>Staff Onsite</Text>
          </View>
          <View style={styles.lowerSection}>
            <Text style={styles.digit}>10</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.Pcard}>
        <TouchableOpacity style={styles.card}  onPress={navigateToEstimatedRevenue} >
          <View style={styles.upperSection}>
            <Text style={styles.text}>Estimated Revenue</Text>
          </View>
          <View style={styles.lowerSection}>
            <Text style={styles.digit}>$ 250</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}   onPress={navigateToTaskCompletion} >
          <View style={styles.upperSection}>
            <Text style={styles.text}>Tasks Completed</Text>
          </View>
          <View style={styles.lowerSection}>
            <Text style={styles.digit}>21</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Pcard: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 10,
    gap: 10,
  },
  card: {
    width: '40%',
    height: 100,
    backgroundColor: '#88B6E1',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  upperSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
  },
  lowerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black'
  },
  digit: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'

  },
});

export default Card;
