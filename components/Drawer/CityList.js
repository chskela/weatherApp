import React from 'react';
import {FlatList} from 'react-native';

import ItemList from './ItemList';
import {useSelector} from 'react-redux';
import {selectCity} from '../../app/citysSlice';

export default function CityList({refDrawer}) {
  const citys = useSelector(selectCity);

  const renderItem = ({item}) => (
    <ItemList title={item} key={item} refDrawer={refDrawer} />
  );

  return (
    <FlatList
      data={citys}
      renderItem={renderItem}
      keyExtractor={item => item}
    />
  );
}
