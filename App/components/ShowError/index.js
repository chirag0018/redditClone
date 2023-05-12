import {Text} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

const ShowError = ({text}) => {
  return (
    <Text
      style={[
        {
          fontSize: 16,
          color: Colors.black,
        },
      ]}>
      {text}
    </Text>
  );
};

export default ShowError;
