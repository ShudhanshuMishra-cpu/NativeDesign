

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RevenueDownloadButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Download Full Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,

  },
  button: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#3498db', // Change the background color as needed
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RevenueDownloadButton;
