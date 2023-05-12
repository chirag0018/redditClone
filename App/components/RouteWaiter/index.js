import {View, Text} from 'react-native';
import React from 'react';
import {Loader} from '../Loader';
import ShowError from '../ShowError';
import {Colors} from '../../constants/Colors';

const RouteWaiter = ({loading, data, error, children}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      {loading === true ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Loader />
        </View>
      ) : error !== '' ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ShowError text={error} />
        </View>
      ) : data?.length === 0 || data === null || data === undefined ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: Colors.black, fontSize: 15}}>No Data</Text>
        </View>
      ) : (
        children
      )}
    </View>
  );
};

export default RouteWaiter;
