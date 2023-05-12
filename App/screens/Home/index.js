import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

import axios from 'axios';

import {ErrorTexts} from '../../constants/ErrorTexts';
import ShowList from '../../components/ShowList';
import RouteWaiter from '../../components/RouteWaiter';
import {Colors} from '../../constants/Colors';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios({
      method: 'get',
      url: 'https://api.reddit.com/r/pics/hot.json',
    })
      .then(response => {
        setData(response.data.data.children);
      })
      .catch(error => {
        setError(ErrorTexts.sww);
      })
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <View style={{padding: 10}}>
        <Text
          style={{
            color: Colors.black,
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          reddit/r/programming
        </Text>
      </View>

      <RouteWaiter
        loading={loading}
        error={error}
        data={data}
        children={
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item, index}) => (
              <ShowList item={item} key={index} navigation={navigation} />
            )}
            onRefresh={() => {
              setRefreshing(true);
              fetchData();
            }}
            refreshing={refreshing}
          />
        }
      />
    </View>
  );
};

export default Home;
