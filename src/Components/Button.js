import React from 'react';
import {View, TouchableNativeFeedback} from 'react-native';

export const CircleButton = ({onPress, children, size = 32, style}) => {
  const btnStyle = [
    {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: size / 2.0,
      elevation: 3,
    },
    style,
  ];
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={btnStyle}>{children}</View>
    </TouchableNativeFeedback>
  );
};
