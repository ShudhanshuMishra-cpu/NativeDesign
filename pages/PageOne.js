/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
// PageOne.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import deskimg from '../assest/login2.png';
// import LoginPage from './LoginPage';
const styles = {
  main:{
width: '100%',
height: '100%',
  },
    deskimg: {
      //   width: '100%',
      //   aspectRatio: 16 / 9,
      width: '100%',
      height: '40%',
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      scnk:{
        width: '100%',
        height:'max-content',
      },
      upperText:{
        width: '100%',
      },
      fds:{

          fontSize: 40,
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 20,
          // Add other styles as needed
        },
        lowerText: {
          width: '100%',
          flexDirection: 'row', // Default is 'column', changing to 'row' to mimic flexbox
          justifyContent: 'center',
        },
        oyt:{
          marginTop: 10,

          width: '95%',
          fontSize: 19,
          color: 'black',
          textAlign: 'center',
        },
        nextBtn: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: 10,
          marginBottom: 15,
          marginRight: 15,
        },
        colf: {
          // background: '#F5C754',
          color: 'black',
          borderRadius:20 ,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }
  };
  

const PageOne = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.deskimg}>
        <Image source={deskimg} style={styles.image} />
      </View>
      <View style={styles.scnk}>
        <View style={styles.upperText}>
          <Text style={styles.fds} >Optimizing Industry with AI</Text>
        </View>
        <View style={styles.lowerText}>
          <Text style={styles.oyt}>Streamline your operations with cutting-edge artificial intelligence design for peak efficiency.</Text>
        </View>
      </View>
      <View style={styles.nextBtn}>
        <TouchableOpacity   onPress={()=> navigation.navigate("LoginPage")} >
          <Text  style={[styles.colf, { backgroundColor: '#F5C754' }]}  >Get  Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PageOne;