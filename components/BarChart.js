/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View  , Dimensions} from 'react-native';
import { BarChart } from 'react-native-chart-kit';


const screenWidth = Dimensions.get('window').width;

const MyBarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: [20, 45, 28, 80, 99, 43],
    }]
  };

  return (
    <View>
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel={'$'}
        chartConfig={{
          // backgroundColor: 'transparent',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          // decimalPlaces: 2,
          color: (opacity = 1) => `rgba(74, 115, 150, ${opacity})`,
          style: {
            borderRadius: 50,
          },
          propsForBackgroundLines: {
            strokeOpacity: 0, // Hide grid lines
          },
        }}
        verticalLabelRotation={30}/>
    </View>
  );
};

export default MyBarChart;


// import React from 'react';
// import { View, Text } from 'react-native';
// import Svg, { Rect, Text as SvgText } from 'react-native-svg';
// import * as d3 from 'd3';

// const MyBarChart = ({ data, width, height, xLabels, yLabels }) => {
//   // Scale for x-axis
//   const xScale = d3.scaleBand()
//     .domain(data.map((_, index) => index))
//     .range([0, width])
//     .padding(0.1);

//   // Scale for y-axis
//   const yScale = d3.scaleLinear()
//     .domain([0, d3.max(data)])
//     .range([0, height]);

//   return (
//     <View style={{ width, height }}>
//       <Svg width={width} height={height}>
//         {data.map((value, index) => (
//           <Rect
//             key={index}
//             x={xScale(index)}
//             y={height - yScale(value)}
//             width={xScale.bandwidth()}
//             height={yScale(value)}
//             fill="rgba(0, 0, 0, 0.5)" // Set the fill color with transparency
//           />
//         ))}
//         {xLabels && xLabels.map((label, index) => (
//           <SvgText
//             key={index}
//             x={xScale(index) + xScale.bandwidth() / 2}
//             y={height + 10}
//             textAnchor="middle"
//             fontSize="12"
//             fill="#000"
//           >
//             {label}
//           </SvgText>
//         ))}
//         {yLabels && yLabels.map((label, index) => (
//           <SvgText
//             key={index}
//             x={-30}
//             y={height - yScale(label)}
//             textAnchor="end"
//             fontSize="12"
//             fill="#000"
//           >
//             {label}
//           </SvgText>
//         ))}
//       </Svg>
//     </View>
//   );
// };

// export default MyBarChart;
