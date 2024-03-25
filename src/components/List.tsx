import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {add, settings} from '../../assets';
import {moderateScale} from 'react-native-size-matters';
import color from '../constants/color';
import {Switch} from './Switch';

interface ListProps {
  headerText: string;
  settingsEnabled: boolean;
  data: Array<any>;
}

export const List = ({headerText, settingsEnabled, data = []}: ListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{headerText}</Text>
        {settingsEnabled && (
          <Image source={settings} style={styles.headerIcon} />
        )}
        <Image source={add} style={styles.headerIcon} />
      </View>
      <View style={styles.buttonContainer}>
        {data.map(val => (
          <Switch name={val.switch_name} status={val.status} room={val.room} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    minHeight: moderateScale(60),
    marginTop: moderateScale(10),
  },
  header: {
    flexDirection: 'row',
    gap: moderateScale(20),
  },
  headerIcon: {
    height: moderateScale(22),
    width: moderateScale(22),
  },
  headerText: {
    color: color.white,
    fontSize: moderateScale(18),
    marginRight: 'auto',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    flexWrap: 'wrap',
  },
});
