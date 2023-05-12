import {View, Text} from 'react-native';
import React from 'react';

import {WebView} from 'react-native-webview';

const WebViewScreen = () => {
  return <WebView source={{uri: 'https://youtube.com/'}} style={{flex: 1}} />;
};

export default WebViewScreen;
