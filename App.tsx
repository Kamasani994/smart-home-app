/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import color from './src/constants/color';
import {StatusBar} from './src/components/StatusBar';
import {moderateScale} from 'react-native-size-matters';
import {Weather} from './src/components/Weather';
import {List} from './src/components/List';
import {FAVOURITE_DEVICES} from './src/constants/data';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: color.black}}>
      <View style={styles.container}>
        <StatusBar />
        <ScrollView style={styles.scrollContainer}>
          <Weather />
          <List
            headerText="Favorite scenes"
            settingsEnabled={false}
            data={[]}
          />
          <List
            headerText="Favorite devices"
            data={FAVOURITE_DEVICES}
            settingsEnabled
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
  scrollContainer: {
    paddingVertical: moderateScale(20),
  },
});

export default App;
