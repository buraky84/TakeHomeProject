import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const HeaderContainer = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#14121E',
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  headerText: {
    fontFamily: 'ApercuArabicPro-Regular',
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 28,
    fontSize: 22,
  },
});
