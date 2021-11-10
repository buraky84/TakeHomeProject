import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {HeaderContainer} from '../../components/HeaderContainer';

export const Track = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderContainer title={'Track'} />
      <View style={styles.mainContainer}>
        <View style={styles.mainContainerHeader}>
          <Text style={styles.mainContainerHeaderText}>Portfolio 1</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 47,
              borderBottomWidth: 1,
              borderBottomColor: '#262334',
            }}>
            <View style={{flex: 0.2}}>
              <Text style={styles.portfolioHeaderText}>COIN</Text>
            </View>
            <View style={{flex: 0.6}}>
              <Text style={styles.portfolioHeaderText}>PRICE</Text>
            </View>
            <View style={{flex: 0.2}}>
              <Text style={styles.portfolioHeaderText}>HOLDINGS</Text>
            </View>
          </View>
            <ScrollView style={{flex: 1}}>

            </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#14121E', paddingHorizontal: 24},
  mainContainerHeader: {
    width: null,
    height: 96,
    backgroundColor: '#5217CF',
    borderRadius: 12,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  mainContainerHeaderText: {
    fontFamily: 'ApercuArabicPro-Regular',
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 34,
    fontSize: 27,
  },
  portfolioHeaderText: {
    fontFamily: 'ApercuArabicPro-Bold',
    lineHeight: 14,
    fontSize: 11,
    color: '#FFFFFF',
  },
});
