import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import * as Colors from '../constants/Colors';

const {width} = Dimensions.get('window');

const CommonBtn = ({
  title,
  onPress,
  backgroundColor,
  color,
  borderRadius,
  fonts,
  middle,
  disabled,
  arrowDisable = true,
  isLoading,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor ? backgroundColor : '#888',
          borderRadius: borderRadius ? borderRadius : 9,
          paddingVertical: 12,
          borderColor: borderColor ? borderColor : Colors.PRIMARY_COLOR,
        },
      ]}>
      {isLoading ? (
        <ActivityIndicator
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: width * 0.33,
          }}
          size={30}
          color={'#FFFFFF'}
        />
      ) : (
        <>
          {middle && <View></View>}
          <Text style={[styles.btnTxt, {color: color ? color : '#00D24A'}]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter',
    lineHeight: 19,
  },
});

export default CommonBtn;
