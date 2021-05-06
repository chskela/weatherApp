import React from 'react';
import {FlatList} from 'react-native';

import ItemList from './ItemList';

const DATA = ['Shoci', 'Moscow'];

export default function CityList() {
  const renderItem = ({item}) => <ItemList title={item} key={item} />;

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
