/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CustomButton = ({ onPress, title, icon,number }) => (
  <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
   <View style={styles.jnf} >
    {icon}

    </View>
  
    <Text  style={{color:'black'}}>{title}</Text>
    <Text style={{ marginLeft: 'auto', fontWeight: 'bold', fontSize: 16 }}>{number}</Text>
      </TouchableOpacity>
);




const ProductsCounted = ({ navigation }) => {
  const navigateToPage = (page) => {
    navigation.navigate(page);
  };

  return (
    <View style={{ flex: 1 }}>
      <CustomButton
      title="Madame Francique"
      onPress={() => navigateToPage('Page17')}
      icon={<AntDesign name="like2" size={30} color="black"  />} number={'150'} />
      <CustomButton
      title="Francis Mango"
      onPress={() => navigateToPage('Page17')}
      icon={<AntDesign name="like2" size={30} color="black"  />} number={'300'} />

<CustomButton
      title="Ataulfo"
      onPress={() => navigateToPage('Page17')}
      icon={<AntDesign name="like2" size={30} color="black"  />} number={'120'} />
      <CustomButton
      title="Revenue Insights"
      onPress={() => navigateToPage('Page17')}
      icon={<AntDesign name="like2" size={30} color="black"  />} number={'17'} />


      <View style={{display:'flex',flexDirection:'row' ,justifyContent: 'space-between',padding:10}}>
        <Text>Total Counts</Text>
        <Text>31</Text>
      </View>
      <Text style={{color:'blue',textAlign:'right'}}>View Complete Report...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  jnf:{
    backgroundColor:'#e0e8f0',
    marginRight :10,
   paddingHorizontal:6,
    paddingVertical:6,
    borderRadius: 10
  }
})

export default ProductsCounted;
