/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const ReportChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(74, 115, 150, ${opacity})`, // line color
        strokeWidth: 2, // line width
      },
    ],
  };

  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        bezier
        withDots={true} // hide dots
        withVerticalLabels={true} // hide y-axis labels
        withHorizontalLabels={false} // show x-axis labels
        chartConfig={{
          backgroundGradientFrom: 'white', // transparent background
          backgroundGradientTo: 'white',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // line color


          propsForBackgroundLines: {
            strokeOpacity: 0, // Hide grid lines
          },
        }}
        style={{ marginTop: 10 }}
        
      />
    </View>
  );
};

export default ReportChart;
