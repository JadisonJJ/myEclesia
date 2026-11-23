import React, { useEffect } from "react";

import {
  Animated,
  Text,
} from "react-native";

import { styles } from "./styles";

import { SnackbarProps } from "./types";

export default function Snackbar({

  visible,

  message,

  type = "success",

  onDismiss,

}: SnackbarProps) {

  const opacity = React.useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {

    if (visible) {

      Animated.timing(opacity, {

        toValue: 1,

        duration: 250,

        useNativeDriver: true,

      }).start();

      const timer = setTimeout(() => {

        onDismiss?.();

      }, 2500);

      return () => clearTimeout(timer);

    }

  }, [visible, onDismiss]);

  if (!visible) return null;

  return (

    <Animated.View

      style={[

        styles.container,

        styles[type],

        { opacity },

      ]}

    >

      <Text style={styles.text}>

        {message}

      </Text>

    </Animated.View>

  );

}