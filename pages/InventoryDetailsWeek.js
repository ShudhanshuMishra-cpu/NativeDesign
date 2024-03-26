/* eslint-disable prettier/prettier */
// PageOne.js

/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Dimensions } from 'react-native';
import Video from 'react-native-video';
import Test from '../assest/week.mp4'; // Assuming Test is the correct path to your video file

const { width } = Dimensions.get('window');


const InventoryDetailsWeek = () => {
    return (
        <View style={{ flex: 1 }}>
          <Video
            source={Test} // Corrected source prop
            style={{ width: width, aspectRatio: 16 / 9 }}
            resizeMode="contain"
            controls={true}
          />
        </View>
      );
    };
export default InventoryDetailsWeek;