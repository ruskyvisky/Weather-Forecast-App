import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WeatherRecommendationCard = ({weatherCondition}) => {
  let icon = null;
  let recommendation = '';

  switch (weatherCondition) {
    case 'Rain':
      icon = <Icon name="umbrella" size={50} color="black" />;
      recommendation = 'Take an umbrella';
      break;
    case 'Clear':
      icon = <Icon name="sun-o" size={50} color="black" />;
      recommendation = 'You should use sunscreen.';
      break;
    case 'Clouds':
      icon = <Icon name="cloud" size={50} color="black" />;
      recommendation = 'You should wear a jacket.';
      break;
    case 'Mist':
      icon = <Icon name="cloud-fog" size={50} color="black" />;
      recommendation = 'Be careful on the road.';
      break;
    default:
      icon = <Icon name="question-circle" size={50} color="black" />;
      recommendation = 'No information available.';
      break;
  }

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.recommendationText}>{recommendation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 20,
  },
  recommendationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WeatherRecommendationCard;
