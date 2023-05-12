import {ActivityIndicator} from 'react-native';
import React from 'react';

import {Colors} from '../../constants/Colors';

export const Loader = () => {
  return <ActivityIndicator color={Colors.darkBlue} size="large" />;
};
