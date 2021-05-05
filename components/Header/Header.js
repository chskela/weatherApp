import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../Colors/Colors';


export default function Header() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Weather App</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    padding: 24,
    backgroundColor: Colors.primary
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});
