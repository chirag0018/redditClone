import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';

import {Colors} from '../../constants/Colors';
import {time_ago} from '../../config/timeAgo';

const ShowList = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.white,
        padding: 10,
        flexDirection: 'row',
      }}
      onPress={() => navigation.navigate('WebViewScreen')}>
      <View style={{width: '25%'}}>
        <Image
          source={{uri: item.data.thumbnail}}
          style={{height: 80, width: 80}}
        />
      </View>

      <View
        style={{
          width: '75%',
          paddingHorizontal: 5,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: Colors.black,
            }}>
            {item.data.title}
          </Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 5,
            }}>
            <TextComp text={item.data.author} />
            <TextComp text={`score: ${item.data.score}`} />
            <TextComp text={`${item.data.num_comments} comments`} />
          </View>
        </View>

        <View>
          <Text
            style={{textAlign: 'right', fontSize: 12, color: Colors.darkGray}}>
            {time_ago(item.data.created)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TextComp = ({text}) => {
  return (
    <Text
      style={{
        fontSize: 11,
        color: Colors.darkGray,
        width: '30%',
        marginRight: '2%',
      }}>
      {text}
    </Text>
  );
};

export default ShowList;
