import React from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../Colors/Colors';
import {setCurrentCity} from '../../app/currentCitySlice';
import {removeCity} from '../../app/citysSlice';

export default function ItemList({title, refDrawer}) {
  const dispatch = useDispatch();
  function onPressFunction() {
    dispatch(setCurrentCity(title));
    refDrawer.current.closeDrawer();
  }

  return (
    <Pressable
      onPress={onPressFunction}
      style={({pressed}) => [
        styles.item,
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : Colors.lighter,
        },
        styles.wrapperCustom,
      ]}>
      {({pressed}) => (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Icon.Button
            name="delete-outline"
            size={30}
            color={Colors.primary}
            backgroundColor={Colors.lighter}
            onPress={() => {
              dispatch(removeCity(title));
            }}
            iconStyle={{marginRight: 0}}
          />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 270,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.light,
    marginBottom: 4,
  },
  title: {
    fontSize: 20,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 16,
  },
});
