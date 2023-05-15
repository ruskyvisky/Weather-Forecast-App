import {useState, useEffect} from 'react';
import React from 'react';
import SearchBar from './components/searchBar';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Keyboard,
} from 'react-native';
import axios from 'axios';
import apiKey from '../config/dotenv';
import WeatherTemperature from './components/weatherTemp';
import WeatherRecommendationCard from './components/weatherRecommendation';
import Error from './components/error';
export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [weatherBg, setWeatherBg] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(
    require('./images/nodata.jpg'),
  );

  const getWeather = async () => {
    const api = apiKey;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    Keyboard.dismiss();
    try {
      const response = await axios.get(url);
      setWeather(response.data.main.temp);
      setWeatherBg(response.data.weather[0].main);
      console.log(weatherBg);
      setError(null);
    } catch (error) {
      setWeather(null);
      setError('Şehir bulunamadı.');
    }
  };
  useEffect(() => {
    if (weatherBg === 'Clear') {
      setBackgroundImage(require('./images/sunny.jpg'));
    } else if (weatherBg === 'Rain') {
      setBackgroundImage(require('./images/rainy.jpg'));
    } else if (weatherBg === 'Clouds') {
      setBackgroundImage(require('./images/cloudy.jpg'));
    } else if (weatherBg === 'Mist') {
      setBackgroundImage(require('./images/mist.jpg'));
    }
  }, [weatherBg]);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.background}>
        <Text style={styles.title}>Weather Forecast App</Text>
        <SearchBar city={city} setCity={setCity} />
        <TouchableOpacity style={styles.button} onPress={getWeather}>
          <Text style={styles.buttonText}>Show</Text>
        </TouchableOpacity>
        {weather !== null && (
          <>
            <WeatherTemperature temperature={weather} />
            <WeatherRecommendationCard weatherCondition={weatherBg} />
          </>
        )}
        {error !== null && <Error />}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#7bd3f7',
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#7bd3f7',
    width: '80%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 20,
    marginTop: 20,
  },
});
