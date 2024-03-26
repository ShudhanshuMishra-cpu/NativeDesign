import React from 'react';
import { View , Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';


const screenWidth = Dimensions.get('window').width;

const RevenueDaysChart = () => {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
      data: [50, 80, 30, 60, 90],
    }]
  };

  return (
    <View>
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundGradientFrom: 'rgba(255,255,255,0)', // Transparent background
          backgroundGradientTo: 'rgba(255,255,255,0)', // Transparent background
          color: (opacity = 1) => `rgba(74, 115, 150, ${opacity})`, // Bar color
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
          strokeWidth: 2, // Width of the bar outline
          barPercentage: 0.7, // Width of the bars
          propsForBackgroundLines: {
            strokeOpacity: 0, // Hide grid lines
          },
        }}
        verticalLabelRotation={0}
        showValuesOnTopOfBars={true} // Show values on top of bars
      />
    </View>
  );
};

export default RevenueDaysChart;
