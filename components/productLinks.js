/* eslint-disable prettier/prettier */
// Import necessary React Native components
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import img from '../assest/logo1.jpg';
import Fontisto from 'react-native-vector-icons/Fontisto';

// Define your custom component
const CustomComponent = () => {
  return (
    <View>

    <View style={styles.container}>
      {/* First part: Image */}
      <View style={styles.imageContainer}>
        {/* <Image
          source={img} // Replace with your image source
        //   style={styles.image}
        style={{ width: 80, height: 80, marginRight: 10 }}
        /> */}
                  <Fontisto name="line-chart" color='black' size={23} />

      </View>

      {/* Second part: Title and Paragraph */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Products counted</Text>
        <Text style={styles.paragraph}>
         Madame francique , Francis Mango , Ataulfo ,Valencia Pride , Kitt Mango
        </Text>
      </View>

      {/* Third part: Digits */}
      <View style={styles.digitContainer}>
        <Text style={styles.digits}>123</Text>
      </View>
    </View>

    <View style={styles.container}>
      {/* First part: Image */}
      <View style={styles.imageContainer}>
        {/* <Image
          source={img} // Replace with your image source
        //   style={styles.image}
        style={{ width: 80, height: 80, marginRight: 10 }}
        /> */}
                  <Fontisto name="line-chart" color='black' size={23} />

      </View>

      {/* Second part: Title and Paragraph */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Your Title</Text>
        <Text style={styles.paragraph}>
          Your paragraph text goes here. You can add more details or customize as needed.
        </Text>
      </View>

      {/* Third part: Digits */}
      <View style={styles.digitContainer}>
        <Text style={styles.digits}>123</Text>
      </View>
    </View>

    <View style={styles.container}>
      {/* First part: Image */}
      <View style={styles.imageContainer}>
        {/* <Image
          source={img} // Replace with your image source
        //   style={styles.image}
        style={{ width: 80, height: 80, marginRight: 10 }}
        /> */}
                  <Fontisto name="line-chart" color='black' size={23} />

      </View>

      {/* Second part: Title and Paragraph */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Your Title</Text>
        <Text style={styles.paragraph}>
          Your paragraph text goes here. You can add more details or customize as needed.
        </Text>
      </View>

      {/* Third part: Digits */}
      <View style={styles.digitContainer}>
        <Text style={styles.digits}>123</Text>
      </View>
    </View>
    </View>

  );
};

// Define your component styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    // borderWidth: 1,
    // borderColor: '#ccc',
    // borderRadius: 8,
    margin: 10,
  },
  imageContainer: {
    flex: 1,
    // backgroundColor:'yellow',
    marginRight: 10,
alignItems:'center' ,   justifyContent: 'center',
  },
  image: {
    // flex: 1,
    width:'100%',
    // height:'100%',
    objectFit:'cover',
    
    borderRadius: 8,
  },

  textContainer: {
    flex: 5,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
  paragraph: {
    fontSize: 12,
    color: '#4a7396',
  },
  digitContainer: {
    flex: 1,
  },
  digits: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
    textAlign: 'right',
  },
});


export default CustomComponent;
