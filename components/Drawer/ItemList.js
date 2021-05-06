import React from 'react';

import {StyleSheet, Text, Pressable} from 'react-native';
import Colors from '../Colors/Colors';

export default function ItemList({title}) {
  function onPressFunction() {
    console.log('fffff');
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
      {({pressed}) => <Text style={styles.title}>{title}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 300,
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
