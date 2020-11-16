import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//colors
import { colors } from "../assets/utils";

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
    sys: { country },
  } = currentWeather;

  const { icon, main, description } = details;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <View style={styles.weatherInfo}>
      <Text>
        {name}, {country}
      </Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimay}>{temp}°</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.textSeconday}>{main}</Text>
      {/* <Text>{currentWeather.name}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: "capitalize",
  },
  textPrimay: {
    fontSize: 40,
    color: colors.primary,
  },
  textSeconday: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "500",
    marginTop: 10,
  },
});
