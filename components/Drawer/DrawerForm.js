import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';

import {addCity} from '../../app/citysSlice';
import Colors from '../Colors/Colors';

export default function DrawerForm() {
  const dispatch = useDispatch();
  const [nameCity, setChangeNameCity] = useState('');
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        onChangeText={setChangeNameCity}
        value={nameCity}
        placeholder="Enter city name"
      />
      <Button
        title="Add city"
        onPress={() => {
          dispatch(addCity(nameCity));
          setChangeNameCity('');
        }}
        color={Colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
  },
});
