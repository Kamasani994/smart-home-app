import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {bulb} from '../../assets';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import color from '../constants/color';

interface SwitchProps {
  name: string;
  status: boolean;
  room: string;
}

export const Switch = ({name, status = false, room}: SwitchProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.button}>
        <Image source={bulb} style={styles.icon} />
        <Text style={styles.text}>{status ? 'On' : 'Off'}</Text>
      </View>
      <Text style={styles.text}>Switch {name}</Text>
      <Text style={styles.text}>{room}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    backgroundColor: color.darkgrey,
    borderRadius: 10,
    width: '30%',
    height: verticalScale(100),
    marginBottom: 'auto',
  },
  text: {
    color: color.white,
    fontSize: moderateScale(14),
  },
  icon: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 'auto',
  },
});
