import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';

import Header from '../Header/Header';
import Section from '../Section/Section';
import useFetchData from '../../hooks/useFetchData';
import {selectCurrentCity} from '../../app/currentCitySlice';
import usePosition from '../../hooks/usePosition';

export default function MainScreen({refDrawer}) {
  const city = useSelector(selectCurrentCity);
  const {position, error} = usePosition();

  if (error) {
    return;
  }

  const {data, isLoading, isError} = useFetchData(position, city);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return;
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Header refDrawer={refDrawer} />
        <Section title={`${data.name}, ${data.sys.country}`}>
          <Text style={styles.highlight}>Temperature: </Text>
          {Math.ceil(data.main.temp)} C
        </Section>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});
