import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { useScreenStore } from '../store/pageStore';
import styles from '../style/styles';

type Props = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  const currentScreen = useScreenStore((screen) => screen.currentScreen);
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(16)).current;
  const scale = useRef(new Animated.Value(0.97)).current;

  useEffect(() => {
    opacity.setValue(0);
    translateY.setValue(16);
    scale.setValue(0.97);

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 220,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        speed: 14,
        bounciness: 6,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        speed: 14,
        bounciness: 6,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentScreen]);

  return (
    <Animated.View
      style={[
        styles.page,
        {
          opacity,
          transform: [{ translateY }, { scale }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default PageContainer;