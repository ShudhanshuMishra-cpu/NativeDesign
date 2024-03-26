/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import MyBarChart from '../components/BarChart';
import CustomComponent from '../components/productLinks';
import DownloadButton from '../components/DownloadButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductCounts = () => {



  const navigation = useNavigation();

  const navigateToProductCountsDays = () => {
    navigation.navigate('ProductCounts');
  };
  const navigateToProductCountsHours = () => {
    navigation.navigate('ProductCountsHours');
  };
  const navigateToProductCountsWeek = () => {
    navigation.navigate('ProductCountsWeek');
  };
  const navigateToProductCountsMonths = () => {
    navigation.navigate('ProductCountsMonths');
  };
  const navigateToProductCountsYears = () => {
    navigation.navigate('ProductCountsYears');
  };


  const navigateToDashboard = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      <ScrollView>

        <View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row',gap: 25,paddingVertical: 5, alignItems: 'center',}}>
          <TouchableOpacity onPress={navigateToDashboard}>
            <AntDesign name="left" style={{    fontSize: 28,}} color='black' size={20} />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold',fontSize: 36,color: 'black'}}>Product Counts</Text>
        </View>

        <View style={styles.ddccd}>
          <View style={styles.dcd}>
            <TouchableOpacity style={styles.line2} onPress={navigateToProductCountsHours}>
              <Text style={styles.uhuh} >Hours</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.line2} onPress={navigateToProductCountsDays}>

              <Text style={styles.uhuh, styles.active}>Days</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.line2} onPress={navigateToProductCountsWeek}>

              <Text style={styles.uhuh}>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.line2} onPress={navigateToProductCountsMonths}>

              <Text style={styles.uhuh}>Months</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.line2} onPress={navigateToProductCountsYears}>

              <Text style={styles.uhuh}>Years</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pskd}>
          <Text style={styles.Count} > Product Counts</Text>
          <Text style={styles.Digit}>1080</Text>
          <Text style={styles.detail}>Days</Text>
        </View>

        {/* <ScrollView horizontal > */}

        <MyBarChart />
        {/* </ScrollView> */}
        <CustomComponent />

        <DownloadButton />
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  ddccd: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  fvjd:{

  },
  utgy: {
   
  },
  cdcgt: {
   
  },
  active: {
    backgroundColor: '#f2f5f7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  uhuh: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#4A7396',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15,
  },
  dcd: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#E0E8F0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 590,
    paddingVertical: 5,
    // marginHorizontal: 10
  },
  pskd: {
    paddingHorizontal: 5,
  },
  Count: {
    fontSize: 25,
    color: 'black'
  },
  pad: {
    paddingHorizontal: 20,
    // height: windowHeight * 0.8,
  },
  Digit: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black'

  },
  detail: {
    color: '#4a7396',
    paddingHorizontal: 7
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  },
  digit: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProductCounts;
