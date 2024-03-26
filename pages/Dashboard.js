/* eslint-disable prettier/prettier */
import React from 'react';
import Card from '../components/Card';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import { ScrollView, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Fontisto from 'react-native-vector-icons/Fontisto';

// const windowHeight = Dimensions.get('window').height;
import Chart from '../components/Chart';
// import TabB from './Tab';
// const Tab = createBottomTabNavigator();

const Dashboard = () => {



    const navigation = useNavigation();
    const navigateToProductCounts = () => {
        navigation.navigate('ProductCounts');
    };
    return (
        <View style={styles.container}>
            <View style={styles.pad}>
                <ScrollView  >
                    <View style={styles.fdiv}>
                        <Text style={styles.Count} >Total Count</Text>
                        <Text style={styles.Digit}>3,200</Text>
                        <Text style={styles.detail}>Last 30 Days <Text style={styles.extra}>+5%</Text> </Text>

                    </View>
                    <View style={styles.chartPading}>

                        {/* <ScrollView horizontal > */}

                            <Chart />

                            {/* <BarChartComponent/>         */}
                            {/* <Text>hello world</Text> */}
                        {/* </ScrollView> */}
                    </View>
                    <View>
                        <Card />
                    </View>
                    <View>
                        <TouchableOpacity onPress={navigateToProductCounts}>
                            <View style={styles.line}>
                                {/* <View style={styles.line2}> */}

                                <View style={styles.line2}>

                                    <Text style={{ fontWeight: 'bold' , color:'black' }}>
                                        Product Counts
                                    </Text>
                                    <Text style={styles.line3}>
                                        View all products counted
                                    </Text>
                                </View>

                                {/* </View> */}
                                <View style={styles.icon}>
                                    <Fontisto name="arrow-right" color='black' size={20} />

                                </View>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.line}>
                            <View style={styles.line2}>

                                <Text style={{ fontWeight: 'bold' , color:'black' }}>
                                    Staff
                                </Text>
                                <Text style={styles.line3}>
                                    View all staff onsite
                                </Text>
                            </View>
                            <View style={styles.icon}>
                                <Fontisto name="arrow-right" color='black' size={20} />

                            </View>
                        </View>
                        <View style={styles.line}>
                            <View style={styles.line2}>

                                <Text style={{ fontWeight: 'bold' , color:'black' }}>
                                    Product Counts
                                </Text>
                                <Text style={styles.line3}>
                                    View all products counted
                                </Text>
                            </View>
                            <View style={styles.icon}>
                                <Fontisto name="arrow-right" color='black' size={20} />

                            </View>
                        </View>
                    </View>

                </ScrollView>


                {/* <TabB/> */}

            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    graph: {
        width: '100%',
        overflow: 'scroll',
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    line2: {
        width: '90%',
    },
    line3: {
        width: '90%',
        color: '#6B6B6B'
    },
    chartPading: {
        paddingTop: 10,
    },
    fdiv: {
        width: '100%', height: 'max-content',
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,


    },

    Count: {
        fontSize: 25,
        color: 'black',
    },
    pad: {
        paddingHorizontal: 20,
        // height: windowHeight * 0.8,
    },
    Digit: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',

    },
    detail: {
        color: '#6B6B6B',
    },
    extra: {
        color: '#3DB070',
    }
});



export default Dashboard;
