/* eslint-disable prettier/prettier */
// PageOne.js

import React from 'react';
import {  Text, View ,StyleSheet ,ScrollView ,TouchableOpacity } from 'react-native';
import ReportChart from '../components/ReportChart';
import ReportChartTwo from '../components/ReportChartTwo';
// import Fontisto from 'react-native-vector-icons/Fontisto';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const CustomButton = ({ onPress, title, icon }) => (
  <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
    <View style={styles.jnf} >
    {icon}

    </View>
    <Text style={{color:'black'}}>{title}</Text>
    <Entypo name="chevron-right" size={20} color="black" style={{ marginLeft: 'auto' }} />
  </TouchableOpacity>
);


const Report = ({ navigation }) => {

  const navigateToPage = (page) => {
    navigation.navigate(page);
  };

  return (
<View style={styles.juwe6}>
<ScrollView  >
  
  
  <Text style={styles.deff}>Monthly Performance</Text>
  <Text style={styles.wed}>3,200</Text>
  <Text style={styles.vfd}>1D<Text style={styles.rfsb}> +5% </Text> </Text>

<ReportChart/>

<Text style={styles.deff} >Catagory breakdown</Text>
<Text style={styles.wed}>$12,000</Text>


<ReportChartTwo/>
<Text style={styles.fvted}>Details Reports</Text>
<View style={{ flex: 1 }}>
      <CustomButton
        title="Product Counts"
        onPress={() => navigateToPage('Page15')}
        icon={<Fontisto name="product-hunt" size={30} color="black"  />}
      />
      <CustomButton
        title="Staff Overview"
        onPress={() => navigateToPage('Page16')}
        icon={<MaterialCommunityIcons name="shield-account-outline" size={30} color="black"  />}
      /> 
      <CustomButton
      title="Task Completion"
      onPress={() => navigateToPage('Page17')}
      icon={<Entypo name="check" size={30} color="black"  />}
    />
     <CustomButton
      title="Revenue Insights"
      onPress={() => navigateToPage('Page17')}
      icon={<FontAwesome6 name="money-bill-trend-up" size={30} color="black"  />}
    />
      {/* Add more buttons for other pages as needed */}
    </View>


</ScrollView>
</View>
  );
};


const styles = StyleSheet.create({
 
  deff:{
    color:'black',
    fontWeight:'bold',
    fontSize:38,
  },
  wed:{
    color:'black',
    fontWeight:'bold',
    fontSize:30,
  },
  rfsb:{
color:'#088738',
  },
  jnf:{
    backgroundColor:'#e0e8f0',
    marginRight :10,
   paddingHorizontal:6,
    paddingVertical:6,
    borderRadius: 10
  },
  fvted:{
    fontSize:22,
    color:'black',
    fontWeight:'bold',
    marginVertical:10
  },
  juwe6:{
    paddingHorizontal:10
  ,
backgroundColor:'white'}

});


export default Report;