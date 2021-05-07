import React from 'react';
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

export default function MainContent({refDrawer}) {
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
          <View style={styles.container}>
            <Text style={styles.highlight}>Temperature: </Text>
            <Text> {Math.ceil(data.main.temp)} C </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.highlight}>Pressure: </Text>
            <Text> {Math.ceil(data.main.pressure)} mm</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.highlight}>Humidity: </Text>
            <Text> {Math.ceil(data.main.humidity)} %</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.highlight}>Wind speed: </Text>
            <Text> {Math.ceil(data.wind.speed)} m/s</Text>
          </View>
        </Section>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 4,
  },
  highlight: {
    fontWeight: '700',
  },
});
