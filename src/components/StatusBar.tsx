import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {shield, calendar, globe, notification} from '../../assets';

export const StatusBar = () => {
  return (
    <View style={styles.container}>
      <Image source={shield} style={[styles.icons, styles.leftIcon]} />
      <Image source={globe} style={[styles.icons, styles.rightIcons]} />
      <Image source={notification} style={[styles.icons, styles.rightIcons]} />
      <Image source={calendar} style={[styles.icons, styles.rightIcons]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  icons: {
    height: moderateScale(24),
    width: moderateScale(24),
  },
  leftIcon: {
    marginRight: 'auto',
  },
  rightIcons: {
    marginLeft: moderateScale(20),
  },
});
