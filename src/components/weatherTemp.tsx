import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

const WeatherTemperature = ({temperature}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.Text style={[styles.temperature, {opacity: fadeAnim}]}>
      {temperature}°C
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  temperature: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default WeatherTemperature;
