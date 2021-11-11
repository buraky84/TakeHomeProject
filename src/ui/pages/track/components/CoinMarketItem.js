import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {numberWithCommas} from '../../../../Util';
import {CommonButton} from '../../../components/CommonButton';

export const CoinMarketItem = ({item, buttonPress}) => {
  const {baseCurrency, price, name} = item;

  return (
    <View
      key={{name}}
      style={{
        flex: 1,
        flexDirection: 'row',
        height: 72,
        alignItems: 'center',
      }}>
      <View style={{flex: 0.2, alignItems: 'flex-start'}}>
        <Text style={styles.assetBaseNameText}>{baseCurrency}</Text>
      </View>
      <View style={{flex: 0.4, alignItems: 'flex-end'}}>
        <Text style={styles.assetPriceText}>${numberWithCommas(price)}</Text>
      </View>
      <View style={{flex: 0.4, alignItems: 'flex-end'}}>
        <CommonButton title="Add" buttonPress={() => buttonPress(item)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  assetBaseNameText: {
    fontFamily: 'ApercuArabicPro-Bold',
    fontWeight: '700',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22,
  },
  assetPriceText: {
    fontFamily: 'ApercuArabicPro-Bold',
    fontWeight: '700',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22,
  },
});
