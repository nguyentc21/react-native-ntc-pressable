import React, { useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';

import type {
  TouchableOpacityProps,
  TouchableHighlightProps,
  TouchableWithoutFeedbackProps,
  PressableProps,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  PressableStateCallbackType,
} from 'react-native';

export const TouchableOpacityThrottle = (
  props: TouchableOpacityProps & { throttleTime?: number }
) => {
  const isDisabledRef = useRef(false);
  const timeoutDisabledBtnIdRef = useRef<ReturnType<typeof setTimeout>>();
  const { throttleTime = 300, ..._props } = props;
  useEffect(() => {
    return () => {
      if (timeoutDisabledBtnIdRef.current) {
        clearTimeout(timeoutDisabledBtnIdRef.current);
      }
    };
  }, []);
  const _onPress = (e: GestureResponderEvent) => {
    if (!props.onPress) return;
    if (!throttleTime) {
      props.onPress(e);
      return;
    }
    if (!isDisabledRef.current) {
      isDisabledRef.current = true;
      timeoutDisabledBtnIdRef.current = setTimeout(() => {
        isDisabledRef.current = false;
        timeoutDisabledBtnIdRef.current = undefined;
      }, throttleTime);
      props.onPress(e);
    }
  };
  const _disabled =
    _props.disabled ||
    (!props.onPress &&
      !props.onPressIn &&
      !props.onPressOut &&
      !props.onLongPress);
  return (
    <TouchableOpacity {..._props} disabled={_disabled} onPress={_onPress} />
  );
};

export const TouchableHighlightThrottle = (
  props: TouchableHighlightProps & { throttleTime?: number }
) => {
  const isDisabledRef = useRef(false);
  const timeoutDisabledBtnIdRef = useRef<ReturnType<typeof setTimeout>>();
  const { throttleTime = 300, ..._props } = props;
  useEffect(() => {
    return () => {
      if (timeoutDisabledBtnIdRef.current) {
        clearTimeout(timeoutDisabledBtnIdRef.current);
      }
    };
  }, []);
  const _onPress = (e: GestureResponderEvent) => {
    if (!props.onPress) return;
    if (!throttleTime) {
      props.onPress(e);
      return;
    }
    if (!isDisabledRef.current) {
      isDisabledRef.current = true;
      timeoutDisabledBtnIdRef.current = setTimeout(() => {
        isDisabledRef.current = false;
        timeoutDisabledBtnIdRef.current = undefined;
      }, throttleTime);
      props.onPress(e);
    }
  };
  const _disabled =
    _props.disabled ||
    (!props.onPress &&
      !props.onPressIn &&
      !props.onPressOut &&
      !props.onLongPress);
  return (
    <TouchableHighlight {..._props} disabled={_disabled} onPress={_onPress} />
  );
};

export const TouchableWithoutFeedbackThrottle = (
  props: TouchableWithoutFeedbackProps & { throttleTime?: number }
) => {
  const isDisabledRef = useRef(false);
  const timeoutDisabledBtnIdRef = useRef<ReturnType<typeof setTimeout>>();
  const { throttleTime = 300, ..._props } = props;
  useEffect(() => {
    return () => {
      if (timeoutDisabledBtnIdRef.current) {
        clearTimeout(timeoutDisabledBtnIdRef.current);
      }
    };
  }, []);
  const _onPress = (e: GestureResponderEvent) => {
    if (!props.onPress) return;
    if (!throttleTime) {
      props.onPress(e);
      return;
    }
    if (!isDisabledRef.current) {
      isDisabledRef.current = true;
      timeoutDisabledBtnIdRef.current = setTimeout(() => {
        isDisabledRef.current = false;
        timeoutDisabledBtnIdRef.current = undefined;
      }, throttleTime);
      props.onPress(e);
    }
  };
  const _disabled =
    _props.disabled ||
    (!props.onPress &&
      !props.onPressIn &&
      !props.onPressOut &&
      !props.onLongPress);
  return (
    <TouchableWithoutFeedback
      {..._props}
      disabled={_disabled}
      onPress={_onPress}
    />
  );
};

export type PressableThrottleType = PressableProps & {
  style?: StyleProp<ViewStyle>;
  throttleTime?: number;
  opacity?: number;
};
export const PressableThrottle = (props: PressableThrottleType) => {
  const isDisabledRef = useRef(false);
  const timeoutDisabledBtnIdRef = useRef<ReturnType<typeof setTimeout>>();
  const { throttleTime = 300, ..._props } = props;
  useEffect(() => {
    return () => {
      if (timeoutDisabledBtnIdRef.current) {
        clearTimeout(timeoutDisabledBtnIdRef.current);
      }
    };
  }, []);
  const _onPress = (e: GestureResponderEvent) => {
    if (!props.onPress) return;
    if (!throttleTime) {
      props.onPress(e);
      return;
    }
    if (!isDisabledRef.current) {
      isDisabledRef.current = true;
      timeoutDisabledBtnIdRef.current = setTimeout(() => {
        isDisabledRef.current = false;
        timeoutDisabledBtnIdRef.current = undefined;
      }, throttleTime);
      props.onPress(e);
    }
  };
  const _getStyle = ({
    pressed,
  }: PressableStateCallbackType): StyleProp<ViewStyle> => [
    _props.style,
    !!pressed && { opacity: !!props.opacity ? props.opacity : 0.3 },
  ];
  const _disabled =
    _props.disabled ||
    (!props.onPress &&
      !props.onPressIn &&
      !props.onPressOut &&
      !props.onLongPress);
  return (
    <Pressable
      {..._props}
      disabled={_disabled}
      style={_getStyle}
      onPress={_onPress}
    />
  );
};
