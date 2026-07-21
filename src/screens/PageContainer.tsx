import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Dimensions } from "react-native";
import { useScreenStore } from "../store/pageStore";
import styles from "../style/styles";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

type Props = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: Props) => 
{
  const currentScreen = useScreenStore((screen) => screen.currentScreen);
  
  const translateX = useRef(new Animated.Value(SCREEN_WIDTH)).current;

  useEffect(() => 
  {
    translateX.setValue(SCREEN_WIDTH);
    Animated.timing(translateX, {
      toValue: 0,
      duration: 280,
      useNativeDriver: true,
    }).start();
  }, [currentScreen]);

  return (
    <Animated.View style={[styles.page, { transform: [{ translateX }] }] }>
      {children}
    </Animated.View>
  );
};

export default PageContainer;