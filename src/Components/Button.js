import React from 'react';
import {View, TouchableNativeFeedback, Animated} from 'react-native';
import Colors from '../Colors';

export const CircleButton = ({
  onPress,
  children,
  size = 32,
  style,
  animated,
}) => {
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
  const Container = animated ? Animated.View : View;
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Container style={btnStyle}>{children}</Container>
    </TouchableNativeFeedback>
  );
};

export const RoundedButton = ({onPress, children, size = 32, style}) => {
  const btnStyle = [
    {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: Colors.secondary,
    },
    style,
  ];
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={btnStyle}>{children}</View>
    </TouchableNativeFeedback>
  );
};
