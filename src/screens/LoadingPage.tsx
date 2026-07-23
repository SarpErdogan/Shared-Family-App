import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import { colors } from '../style/theme';

const LoadingScreen = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const pulseValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // continuous rotation
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // gentle pulse
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1.15,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Animated.View
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          borderWidth: 4,
          borderColor: colors.primary,
          borderTopColor: 'transparent',
          transform: [{ rotate: spin }, { scale: pulseValue }],
        }}
      />
    </View>
  );
};

export default LoadingScreen;