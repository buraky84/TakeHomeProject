import React from 'react';
import {Text, View} from 'react-native';

export const HeaderContainer = ({title}) => {
  return (
    <View style={{height: 100}}>
      <Text>{title}</Text>
    </View>
  );
};
