import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HeaderContainer} from '../../components/HeaderContainer';
import {useDispatch, useSelector} from 'react-redux';
import {TRACK_ACTIONS} from '../../../redux/actionTypes';
import {CoinMarketItem} from './components/CoinMarketItem';
import {FloatingButton} from '../../components/FloatingButton';

export const Track = () => {
  const [sortByNameDirection, setSortByNameDirection] = useState(null);
  const [sortByPriceDirection, setSortByPriceDirection] = useState(null);

  const _applyMarketsDataSorting = data => {
    if (sortByNameDirection) {
      if (sortByNameDirection === 'asc') {
        return data.sort(
          (itemA, itemB) => itemA.baseCurrency > itemB.baseCurrency,
        );
      } else {
        return data.sort(
          (itemA, itemB) => itemB.baseCurrency > itemA.baseCurrency,
        );
      }
    }

    if (sortByPriceDirection) {
      if (sortByPriceDirection === 'asc') {
        return data.sort((itemA, itemB) => itemA.price > itemB.price);
      } else {
        return data.sort((itemA, itemB) => itemB.price > itemA.price);
      }
    }

    return data;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: TRACK_ACTIONS.GET_MARKETS_REQUEST});
  }, []);

  const {isMarketsDataLoading, markets} = useSelector(state => state.track);
  const proccessedMarketsData = _applyMarketsDataSorting(markets);

  return (
    <View style={{flex: 1}}>
      <HeaderContainer title={'Track'} />
      <View style={styles.mainContainer}>
        <View style={styles.mainContainerHeader}>
          <Text style={styles.mainContainerHeaderText}>Portfolio 1</Text>
        </View>
        <View style={styles.contentContainer}>
          <View
            style={{
              flexDirection: 'row',
              height: 47,
              borderBottomWidth: 1,
              borderBottomColor: '#262334',
              paddingTop: 22,
            }}>
            <View style={{flex: 0.25, alignItems: 'flex-start'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.portfolioHeaderText}>COIN</Text>
                <TouchableOpacity
                  onPress={() => {
                    setSortByPriceDirection(null);
                    setSortByNameDirection(
                      !sortByNameDirection || sortByNameDirection === 'asc'
                        ? 'desc'
                        : 'asc',
                    );
                  }}>
                  <Image
                    source={require('../../../assets/images/sort_custom.png')}
                    style={{width: 7, height: 7, marginLeft: 4, marginTop: 3}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 0.35, alignItems: 'flex-end'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.portfolioPriceText}>PRICE</Text>
                <TouchableOpacity
                  onPress={() => {
                    setSortByNameDirection(null);
                    setSortByPriceDirection(
                      !sortByPriceDirection || sortByPriceDirection === 'asc'
                        ? 'desc'
                        : 'asc',
                    );
                  }}>
                  <Image
                    source={require('../../../assets/images/sort_down.png')}
                    style={{width: 7, height: 7, marginLeft: 4, marginTop: 3}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 0.4, alignItems: 'flex-end'}}>
              <Text style={styles.portfolioHoldingsText}>HOLDINGS</Text>
            </View>
          </View>
          {!isMarketsDataLoading ? (
            <FlatList
              keyExtractor={(item, index) => 'coinMarketItem' + index}
              data={proccessedMarketsData}
              renderItem={({item}) => (
                <CoinMarketItem
                  item={item}
                  buttonPress={_holdingsAddItemPressed}
                />
              )}
            />
          ) : (
            <ActivityIndicator style={{marginTop: 20}} color="white" />
          )}
          <FloatingButton title={'+'} buttonPress={_portfolioAddItemPressed} />
        </View>
      </View>
    </View>
  );
};

const _holdingsAddItemPressed = item => {
  console.log(item.name);
};

const _portfolioAddItemPressed = () => {
  console.log('button pressed');
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#14121E'},
  mainContainerHeader: {
    width: null,
    paddingVertical: 31,
    backgroundColor: '#5217CF',
    borderRadius: 12,
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  mainContainerHeaderText: {
    fontFamily: 'ApercuArabicPro-Regular',
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 34,
    fontSize: 27,
    paddingLeft: 16,
  },
  portfolioHeaderText: {
    fontFamily: 'ApercuArabicPro-Bold',
    lineHeight: 14,
    fontSize: 11,
    color: '#FFFFFF',
  },
  portfolioPriceText: {
    fontFamily: 'ApercuArabicPro-Bold',
    lineHeight: 14,
    fontSize: 11,
    color: '#7B7986',
  },
  portfolioHoldingsText: {
    fontFamily: 'ApercuArabicPro-Bold',
    lineHeight: 14,
    fontSize: 11,
    fontWeight: '700',
    color: '#7B7986',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
