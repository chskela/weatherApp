import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../Colors/Colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({refDrawer}) {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headerMenu}>
        <View style={styles.menu}>
          <Icon.Button
            name="menu"
            size={30}
            color={Colors.white}
            backgroundColor={Colors.primary}
            onPress={() => refDrawer.current.openDrawer()}
            iconStyle={{marginRight: 0}}
          />
        </View>
        <Text style={styles.sectionTitle}>Weather App</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  headerMenu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    marginRight: 24,
  },
});
