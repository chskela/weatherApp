import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


import Colors from '../Colors/Colors';

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default function Header() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Weather App</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: Colors.primary
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});
