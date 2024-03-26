/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// import React from 'react';
// import { Button, Text, View } from 'react-native'; // Import necessary modules

// // Define HomeScreen component
// const HomeScreen = ({navigation}) => {
//   return (
//     <View>

//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', {name: 'Jane'})
//     }
//     />
//     <Text> hello world</Text>
//     </View>
//   );
// };

// Define ProfileScreen component
// const ProfileScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

// Export the components
// export { HomeScreen};


// HomeScreen.js
import React from 'react';

import { View, Text,Button } from 'react-native';
const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to Home Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile' , {name :'jane'})}
        />
      </View>
    );
  };
  
  export default HomeScreen;