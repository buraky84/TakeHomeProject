import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {numberWithCommas} from '../../../../Util';
import {CommonButton} from '../../../components/CommonButton';

export const CoinMarketItem = ({item, buttonPress}) => {
  const {baseCurrency, price, name} = item;

  return (
    <View key={{name}} style={styles.coinMarketItemContainer}>
      <View style={styles.assetNameContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../../../assets/images/bitcoin.png')}
            style={styles.itemImage}
          />
          <Text style={styles.assetBaseNameText}>{baseCurrency}</Text>
        </View>
      </View>
      <View style={styles.assetPriceContainer}>
        <Text style={styles.assetPriceText}>${numberWithCommas(price)}</Text>
      </View>
      <View style={styles.assetHoldingsContainer}>
        <CommonButton title="Add" buttonPress={() => buttonPress(item)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coinMarketItemContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 72,
    alignItems: 'center',
  },
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
  itemImage: {width: 24, height: 24, marginRight: 6},
  assetNameContainer: {flex: 0.3, alignItems: 'flex-start'},
  assetPriceContainer: {flex: 0.35, alignItems: 'flex-end'},
  assetHoldingsContainer: {flex: 0.35, alignItems: 'flex-end'},
});
