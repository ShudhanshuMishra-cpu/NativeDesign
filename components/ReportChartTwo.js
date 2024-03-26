/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const ReportChartTwo = () => {
  const data = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        data: [50, 45, 30 ],
        color: (opacity = 1) => `rgba(74, 115, 150, ${opacity})`, // bar color
      },
    ],
  };

  return (
    <View>
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        withHorizontalLabels = {false}
        yAxisLabel="$" // optional
        chartConfig={{
          backgroundGradientFrom: 'white', // transparent background
          backgroundGradientTo: 'white',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // bar color

          propsForBackgroundLines: {
            strokeOpacity: 0, // Hide grid lines
          },
        }}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default ReportChartTwo;
