import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const WeatherRecommendationCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon name="close" size={65} color="red" />
      </View>
      <Text style={styles.recommendationText}>Something went wrong.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    margin: 20,
  },
  recommendationText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default WeatherRecommendationCard;
