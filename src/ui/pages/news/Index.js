import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderContainer} from '../../components/HeaderContainer';

export const News = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderContainer title={'News'} />
      <View style={styles.mainContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#14121E', paddingHorizontal: 24},
});
