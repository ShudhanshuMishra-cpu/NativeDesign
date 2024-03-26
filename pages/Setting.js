// /* eslint-disable prettier/prettier */
// import React from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import Entypo from 'react-native-vector-icons/Entypo';

// const CustomButton = ({ onPress, title, logo }) => (
//   <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
//     <Image source={logo} style={{ width: 30, height: 30, marginRight: 10 }} />
//     <Text>{title}</Text>
//     <Entypo name="chevron-right" size={20} color="black" style={{ marginLeft: 'auto' }} />
//   </TouchableOpacity>
// );

// const Setting = ({ navigation }) => {
//   const navigateToPage = (page) => {
//     navigation.navigate(page);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <CustomButton title="Page 15" onPress={() => navigateToPage('Page15')} logo={require('../assest/logo1.jpg')} />
//       <CustomButton title="Page 16" onPress={() => navigateToPage('Page16')} logo={require('../assest/logo1.jpg')} />
//       {/* Add more buttons for other pages as needed */}
//     </View>
//   );
// };

// export default Setting;



/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const CustomButton = ({ onPress, title, icon }) => (
  <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
    {icon}
    <Text>{title}</Text>
    <Entypo name="chevron-right" size={20} color="black" style={{ marginLeft: 'auto' }} />
  </TouchableOpacity>
);

const Setting = ({ navigation }) => {
  const navigateToPage = (page) => {
    navigation.navigate(page);
  };

  return (
    <View style={{ flex: 1 }}>
      <CustomButton
        title="Page 15"
        onPress={() => navigateToPage('Page15')}
        icon={<Entypo name="user" size={30} color="black" style={{ marginRight: 10 }} />}
      />
      <CustomButton
        title="Page 16"
        onPress={() => navigateToPage('Page16')}
        icon={<Entypo name="users" size={30} color="black" style={{ marginRight: 10 }} />}
      />
      {/* Add more buttons for other pages as needed */}
    </View>
  );
};

export default Setting;
