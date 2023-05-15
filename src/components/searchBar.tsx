import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface SearchBarProps {
  city: string;
  setCity: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({city, setCity}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          onChangeText={setCity}
          value={city}
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    width: '100%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 16,
    color: '#333',
  },
});

export default SearchBar;
