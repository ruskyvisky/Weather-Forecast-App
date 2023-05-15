import {useState} from 'react';
import React from 'react';
import SearchBar from './components/searchBar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import apiKey from '../config/dotenv';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    const api = apiKey;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    console.log(city)
    try {
      const response = await axios.get(url);
      setWeather(response.data.main.temp);
      setError(null);
    } catch (error) {
      setWeather(null);
      setError('Şehir bulunamadı.');
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Weather Forecast App</Text>
      <SearchBar city={city} setCity={setCity} />
      <TouchableOpacity style={styles.button} onPress={getWeather}>
        <Text style={styles.buttonText}>Göster</Text>
      </TouchableOpacity>
      {weather !== null && <Text style={styles.weather}>{weather}°C</Text>}
      {error !== null && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'blue',
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  weather: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  error: {
    color: 'red',
    fontSize: 20,
    marginTop: 20,
  },
});
