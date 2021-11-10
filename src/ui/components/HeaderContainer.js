import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const HeaderContainer = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={{color: '#FFFFFF', fontSize: 22, fontWeight: '700'}}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#14121E',
    height: 80,
    justifyContent: 'center',
    paddingLeft: 24,
  },
});
