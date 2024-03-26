/* eslint-disable prettier/prettier */
import React from 'react';
import {
  LineChart,

} from "react-native-chart-kit";

import { View, Text, Dimensions } from 'react-native';

const Chart = () => {
  return (
    <View style={{flex:1}}>
     <LineChart
  data={{
    labels: ["January", "February", "March", "April" , "May" , "June" , "July"],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,   Math.random() * 100,   Math.random() * 100, Math.random() * 100
        ]
      }
    ]
  }}
  width={Dimensions.get("window").width} // from react-native
  height={220}
  yAxisLabel="$"
  yAxisSuffix="k"
  // withHorizontalLabels={false}
  yAxisInterval={1} // optional, defaults to 1
  chartConfig={{
    // backgroundColor: "rgba(245, 40, 145, 0)", // Set background color to transparent
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(17, 92, 204, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      // borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "blue",
    },
    propsForBackgroundLines: {
      strokeOpacity: 0, // Hide grid lines
    },
  }}
  bezier
  style={{
    marginVertical: 8,
    // borderRadius: 16
backgroundColor: "green"}}
/>
    </View>
  );
};


export default Chart;





// import React from 'react';
// import { View } from 'react-native';
// import { LineChart, Grid } from '@react-native-svg-charts';

// const SplineLineChart = () => {
//   const data = [20, 45, 28, 80, 99, 43];

//   return (
//     <View style={{ height: 200, padding: 20 }}>
//       <LineChart
//         style={{ flex: 1 }}
//         data={data}
//         svg={{ stroke: 'rgb(134, 65, 244)', strokeWidth: 2 }}
//         contentInset={{ top: 20, bottom: 20 }}
//         curve={shape.curveNatural}
//       >
//         <Grid />
//       </LineChart>
//     </View>
//   );
// };

// export default SplineLineChart;




// import React from 'react';
// import { View } from 'react-native';
// import { LineChart, Grid } from 'expo-chart-kit';

// const SplineLineChart = () => {
//   const data = [20, 45, 28, 80, 99, 43];

//   return (
//     <View style={{ height: 200, padding: 20 }}>
//       <LineChart
//         data={{
//           labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//           datasets: [
//             {
//               data: data,
//               strokeWidth: 2,
//             },
//           ],
//         }}
//         width={300}
//         height={200}
//         chartConfig={{
//           backgroundGradientFrom: '#ffffff',
//           backgroundGradientTo: '#ffffff',
//           color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//         }}
//         bezier
//       />
//     </View>
//   );
// };

// export default SplineLineChart;


























// import React from 'react';
// import { View } from 'react-native';
// import { LineChart } from 'react-native-svg-charts';
// import * as shape from 'd3-shape';
// const LineChartExample = () => {
//   const data = [10, 15, 7, 20, 12, 25, 15, 10];

//   return (
//     // <View style={{ flex: 1, backgroundColor: 'green' }}>
//       <LineChart
//         style={{ flex: 1 }}
//         data={data}
//         svg={{ stroke: 'rgb(134, 65, 244)', strokeWidth: 2 }}
//         contentInset={{ top: 20, bottom: 20 }}
//         curve={shape.curveNatural} // Use curveNatural for a smooth curve
//       />
//     // </View>
//   );
// };

// export default LineChartExample;