import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default Section = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionDescription}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 8,
  },
});
