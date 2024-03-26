/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
// /* eslint-disable react/no-unstable-nested-components */
// /* eslint-disable prettier/prettier */
// import * as React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import Icon from 'react-native-ico-material-design';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import LoginPage from './pages/LoginPage.js';
// import PageOne from './pages/PageOne.js';
// import Dashboard from './pages/Dashboard.js';
// import { NavigationContainer } from '@react-navigation/native';
// // import Icon from 'react-native-vector-icons/FontAwesome'; // Change FontAwesome to the desired icon library (FontAwesome, MaterialIcons, etc.)
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import Setting from './pages/Setting.js';
// import Report from './pages/Report.js';
// import ProductsCounted from './pages/ProductsCounted.js';
// import ProductCounts from './pages/ProductCounts.js';

// import Card from './components/Card.js';
// import ProductCountsHours from './pages/ProductCountsHours.js';
// import ProductCountsYears from './pages/ProductCountsYears.js';
// import ProductCountsWeek from './pages/ProductCountsWeek.js';
// import ProductCountsMonths from './pages/ProductCountsMonths.js';
// import EstimatedRevenue from './pages/EstimatedRevenue.js';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const TopTab = createMaterialTopTabNavigator();


// function TopTabFunction() {
//   return (
//     <TopTab.Navigator>
//       <TopTab.Screen name="Days" component={EstimatedRevenue} />
//       <TopTab.Screen name="Settings" component={SettingsScreen} />
//     </TopTab.Navigator>
//   );
// }


// function MainTabScreen() {
//   return (
//     <Tab.Navigator screenOptions={{
//       tabBarActiveTintColor: "black", tabBarInactiveTintColor: "gray"
//     }}>
//       <Tab.Screen options={{
//         tabBarIcon: ({ color, size }) => (
//           <Fontisto name="home" color={color} size={size} />
//         ),
//         headerShown: true
//       }} name='Dashboard' component={Dashboard} />
//       <Tab.Screen options={{
//         tabBarIcon: ({ color, size }) => (
//           <Fontisto name="player-settings" color={color} size={size} />
//         ), headerShown: true
//       }} name="Setting" component={Setting} />
//       <Tab.Screen options={{   
//         tabBarIcon: ({ color, size }) => (
//           <Ionicons name="reader" color={color} size={size} />
//         ),
//         headerShown: true }} name="Report" component={Report} />
//       {/* <Tab.Screen name="Home" component={HomeScreen} /> */}

//     </Tab.Navigator>
//   );
// };



// const MyStack = () => {
//   return (
//     <NavigationContainer     >
//       <Stack.Navigator options={{ headerShown: false }} initialRouteName="PageOne">
//         {/* <Stack.Screen name="Dashboard"  component={Dashboard} options={{ title: 'Dashboard' }} /> */}
//         <Stack.Screen name="PageOne" component={PageOne} />
//         <Stack.Screen options={{ headerShown: false }} name="LoginPage" component={LoginPage} />
//         <Stack.Screen name="Card"> {({ navigation }) => <Card navigation={navigation} />} </Stack.Screen>
//      <Stack.Screen name="ProductsCounted"  component={ProductsCounted} options={{headerShow:true }} />
//      <Stack.Screen name="ProductCounts"  component={ProductCounts} options={{headerShown:false }} />
//      <Stack.Screen name="ProductCountsHours"  component={ProductCountsHours} options={{headerShown:false }} />
//      <Stack.Screen name="ProductCountsYears"  component={ProductCountsYears} options={{headerShown:false }} />
//      <Stack.Screen name="ProductCountsWeek"  component={ProductCountsWeek} options={{headerShown:false }} />
//      <Stack.Screen name="ProductCountsMonths"  component={ProductCountsMonths} options={{headerShown:false }} />
//      <Stack.Screen name="EstimatedRevenue"  component={TopTabFunction} options={{headerShown:false }} />

//         <Stack.Screen options={{ headerShown: false }} name="Home" component={MainTabScreen} />


//       </Stack.Navigator>

//     </NavigationContainer>

//   );
// };



// export default MyStack;







import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginPage from './pages/LoginPage';
import PageOne from './pages/PageOne';
import Dashboard from './pages/Dashboard';
import Setting from './pages/Setting';
import Report from './pages/Report';
import ProductsCounted from './pages/ProductsCounted';
import ProductCounts from './pages/ProductCounts';
import ProductCountsHours from './pages/ProductCountsHours';
import ProductCountsYears from './pages/ProductCountsYears';
import ProductCountsWeek from './pages/ProductCountsWeek';
import ProductCountsMonths from './pages/ProductCountsMonths';
import EstimatedRevenue from './pages/EstimatedRevenue';
// import Card from './components/Card';
import EstimatedRevenueHours from './pages/EstimatedRevenueHours';
import EstimatedRevenueWeek from './pages/EstimatedRevenueWeek';
import EstimatedRevenueMonths from './pages/EstimatedRevenueMonths';
import EstimatedRevenueYears from './pages/EstimatedRevenueYears';
import TaskCompletion from './pages/TaskCompletion';
import InventoryDetails from './pages/InventoryDetails';
import InventoryDetailsDays from './pages/InventoryDetailsDays';
import InventoryDetailsWeek from './pages/InventoryDetailsWeek';
import InventoryDetailsMonths from './pages/InventoryDetailsMonths';
import InventoryDetailsYears from './pages/InventoryDetailsYears';
import SignUpPage from './pages/SignUpPage';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabFunction() {
  return (
    <TopTab.Navigator      screenOptions={{
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black', // Change as per your preference
      },
      tabBarIndicatorStyle: {
        backgroundColor: 'blue', // Change as per your preference
      },
    }}>
      <TopTab.Screen name="Hours" component={EstimatedRevenueHours}   />
      <TopTab.Screen name="Days" component={EstimatedRevenue} />

      <TopTab.Screen name="Week" component={EstimatedRevenueWeek} />
      <TopTab.Screen name="Months" component={EstimatedRevenueMonths} />
      <TopTab.Screen name="Years" component={EstimatedRevenueYears} />
    </TopTab.Navigator>
  );
}

// inventory details 

function InventoryDetailsTopTab() {
  return (
    <TopTab.Navigator      screenOptions={{
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black', // Change as per your preference
      },
      tabBarIndicatorStyle: {
        backgroundColor: 'blue', // Change as per your preference
      },
    }}>
      <TopTab.Screen name="Hours" component={InventoryDetails}   />
      <TopTab.Screen name="Days" component={InventoryDetailsDays} />

      <TopTab.Screen name="Week" component={InventoryDetailsWeek} />
      <TopTab.Screen name="Months" component={InventoryDetailsMonths} />
      <TopTab.Screen name="Years" component={InventoryDetailsYears} />
    </TopTab.Navigator>
  );
}


// inventory details end 

function MainTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="player-settings" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="reader" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PageOne">
        <Stack.Screen name="PageOne" component={PageOne} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Card" component={Card} options={{ headerShown: false }} /> */}
        <Stack.Screen name="TaskCompletion" component={TaskCompletion} options={{ headerShown: true }} />
        {/* <Stack.Screen name="InventoryDetails" component={InventoryDetails} options={{ headerShown: true }} /> */}

        <Stack.Screen name="ProductsCounted" component={ProductsCounted} options={{ headerShown: true }} />
        <Stack.Screen name="ProductCounts" component={ProductCounts} options={{ headerShown: false }} />
        <Stack.Screen name="ProductCountsHours" component={ProductCountsHours} options={{ headerShown: false }} />
        <Stack.Screen name="ProductCountsYears" component={ProductCountsYears} options={{ headerShown: false }} />
        <Stack.Screen name="ProductCountsWeek" component={ProductCountsWeek} options={{ headerShown: false }} />
        <Stack.Screen name="ProductCountsMonths" component={ProductCountsMonths} options={{ headerShown: false }} />
        <Stack.Screen name="EstimatedRevenue" component={TopTabFunction} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={MainTabScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InventoryDetails" component={InventoryDetailsTopTab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
