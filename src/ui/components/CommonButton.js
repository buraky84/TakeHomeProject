import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export const CommonButton = ({title, buttonPress}) => {
  return (
    <TouchableOpacity onPress={buttonPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderColor: '#444054',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    fontFamily: 'ApercuArabicPro-Bold',
    fontSize: 13,
    color: '#A8A7AF',
  },
});
