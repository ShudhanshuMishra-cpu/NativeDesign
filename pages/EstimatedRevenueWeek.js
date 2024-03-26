/* eslint-disable prettier/prettier */

import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import RevenueDaysChart from '../components/RevenueDaysChart';
import RevenueDownloadButton from '../components/RevenueDownloadButton';
export default function EstimatedRevenueWeek() {
  return (
    <View>
      <ScrollView  >
        <View style={styles.jnjcd}>

          <Text style={styles.kdj}>Daily Revenue</Text>
          <Text style={styles.size}>$25,430</Text>
          <Text style={styles.kdj} >Week  <Text style={styles.green}> +5.2% </Text> </Text>
        </View>

        <RevenueDaysChart />

        <View style={styles.container}>
          {/* First box (flex: 3) */}


          {/* Second box (flex: 1) */}
          <View style={[styles.box, styles.flex1]}>
            <Text style={[styles.text, styles.sxsx]}>Highest Earning Day</Text>
          </View>

          <View style={[styles.box, styles.flex3]}>
            <Text style={[styles.text, styles.jhs]}>Wednesday, 12th Nov: $4800</Text>
          </View>
        </View>

        <View style={styles.container}>
          {/* First box (flex: 3) */}


          {/* Second box (flex: 1) */}
          <View style={[styles.box, styles.flex1]}>
            <Text style={[styles.text, styles.sxsx]}>Average Daily Revenue</Text>
          </View>

          <View style={[styles.box, styles.flex3]}>
            <Text style={[styles.text, styles.jhs]}>$4800</Text>
          </View>
        </View>

        <View style={styles.container}>
          {/* First box (flex: 3) */}


          {/* Second box (flex: 1) */}
          <View style={[styles.box, styles.flex1]}>
            <Text style={[styles.text, styles.sxsx]}>Lowest Earning Day</Text>
          </View>

          <View style={[styles.box, styles.flex3]}>
            <Text style={[styles.text, styles.jhs]}>Monday: $1900</Text>
          </View>
        </View>

<RevenueDownloadButton/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sxsx: {
    color: '#4A7396'
  },
  green: {
    color: '#088738',
  },
  size: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 8
  },
  jnjcd: {
    marginTop: 10,

  },
  kdj: {
    paddingTop: 8,
    fontSize: 16,
  },
  container: {
    flexDirection: 'row',
    marginTop: 20,
    borderTopWidth: 1,   // Apply borderBottom to the container
    borderTopColor: '#E5E8EB',
    padding: 10,
    gap: 7,
    marginHorizontal: 10
  },
  box: {
    // borderWidth: 1,
    // borderColor: '#ccc',
    // padding: 10,
  },
  flex3: {
    flex: 4,
  },
  flex1: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  jhs: {
    color: '#0D141C'
  }

});

