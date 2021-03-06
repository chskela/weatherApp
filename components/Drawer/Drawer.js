import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import CityList from './CityList';
import DrawerForm from './DrawerForm';

export default function Drawer({refDrawer}) {
  return (
    <View style={[styles.container, styles.navigationContainer]}>
      <DrawerForm />
      <Text style={styles.paragraph}>List of cities</Text>
      <CityList refDrawer={refDrawer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 20,
    textAlign: 'center',
  },
});
