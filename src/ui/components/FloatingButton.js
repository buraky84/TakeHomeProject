import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export const FloatingButton = ({title, buttonPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={buttonPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    backgroundColor: '#5217CF',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(20, 18, 30, 0.3)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
  },
  buttonText: {
    fontFamily: 'ApercuArabicPro-Regular',
    fontSize: 38,
    color: '#FFFFFF',
  },
});
