import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {drop, weather} from '../../assets';
import color from '../constants/color';
import {moderateScale} from 'react-native-size-matters';

export const Weather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.greenIcon} />
        <Text style={styles.meidumText}>LATEST APP TESTING</Text>
      </View>
      <View style={styles.weatherSection}>
        <View>
          <Text style={styles.smallText}>Denver</Text>
          <Text style={styles.bigText}>22 C</Text>
          <View style={styles.subHeading}>
            <Image source={drop} style={styles.smallIcon} />
            <Text style={styles.smallText}>94 %</Text>
          </View>
        </View>
        <View>
          <Image style={styles.largeIcon} source={weather} />
          <Text style={styles.smallText}>Overcast clouds</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(10),
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(10),
  },
  subHeading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(40),
  },
  greenIcon: {
    height: 12,
    width: 12,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    marginRight: 10,
  },
  smallText: {
    color: color.white,
    fontSize: moderateScale(18),
  },
  meidumText: {
    color: color.white,
    fontSize: moderateScale(24),
    fontWeight: '500',
  },
  bigText: {
    color: color.white,
    fontSize: moderateScale(60),
    fontWeight: '500',
  },
  smallIcon: {
    height: moderateScale(16),
    width: moderateScale(16),
    marginRight: moderateScale(10),
  },
  largeIcon: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
});
