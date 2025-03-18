import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../AuthContext";
import { getUserData } from "../../../Firebase/firebbaseFunctions";
import "./Weather.css";
import WindSpeed from "../../../images/WindSpeedIcon.png";
import Humidity from "../../../images/HumidityIcon.png";
import Condition from "../../../images/ConditionIcon.png";
import { StyledButton } from "../../../App";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Weather = () => {
  const { t } = useTranslation(); // Use the useTranslation hook
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState("");
  const [loadingUserData, setLoadingUserData] = useState(true);

  const apiKey = "a2c14fe5aa90033d5c7f2c7e34c5dec6"; // Replace with your actual API key

  const getWeather = async (cityName) => {
    try {
      const currentResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeatherData(currentResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setForecastData(forecastResponse.data);
      setError("");
    } catch (err) {
      setError(t('weather.cityNotFound'));
      setWeatherData(null);
      setForecastData(null);
    }
  };

  const getDateWithSuffix = (day) => {
    const suffix = (day) => {
      if (day > 3 && day < 21) return "th"; // catch 11th-13th
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    return `${day}${suffix(day)}`;
  };

  const getDailyForecast = () => {
    if (!forecastData) return [];

    const dailyForecast = {};
    forecastData.list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const formattedDate = date.getDate(); // Get the day of the month
      const formattedDay = getDateWithSuffix(formattedDate);

      if (!dailyForecast[formattedDay]) {
        dailyForecast[formattedDay] = {
          temperature: item.main.temp,
          condition: item.weather[0].description,
          humidity: item.main.humidity,
          windSpeed: item.wind.speed,
          icon: item.weather[0].icon,
          day: date.toLocaleString("en-US", { weekday: "long" }),
        };
      } else {
        dailyForecast[formattedDay].temperature += item.main.temp;
        dailyForecast[formattedDay].humidity += item.main.humidity;
        dailyForecast[formattedDay].windSpeed += item.wind.speed;
      }
    });

    for (const date in dailyForecast) {
      dailyForecast[date].temperature = (
        dailyForecast[date].temperature / 8
      ).toFixed(2);
      dailyForecast[date].humidity = (dailyForecast[date].humidity / 8).toFixed(
        2
      );
      dailyForecast[date].windSpeed = (
        dailyForecast[date].windSpeed / 8
      ).toFixed(2);
    }

    return Object.entries(dailyForecast).slice(1, 5);
  };

  const dailyForecast = getDailyForecast();

  const getFormattedDate = () => {
    const today = new Date();
    const dayOfWeek = today.toLocaleString("en-US", { weekday: "long" });
    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" });
    const year = today.getFullYear();

    const suffix = (day) => {
      if (day > 3 && day < 21) return "th"; // catch 11th-13th
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return {
      fullDate: `${month} ${day}${suffix(day)}, ${year}`,
      dayOfWeek: dayOfWeek,
    };
  };

  const { fullDate, dayOfWeek } = getFormattedDate();

  const { currentUser } = useAuth();

  const fetchUserData = async () => {
    if (currentUser) {
      try {
        setLoadingUserData(true);
        const userData = await getUserData(currentUser.uid);
        if (userData && userData.city) {
          setCity(userData.city);
          await getWeather(userData.city);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoadingUserData(false);
      }
    } else {
      setLoadingUserData(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [currentUser]);

  return (
    <div className="WeatherContainer">
      <div className="WeatherContainerTitle">{t('weather.title')}</div>
      <div className="TodaysWeatherContainer">
        <div className="TodaysWeatherSubContainer">
          {loadingUserData ? (
            <p>{t('weather.loadingUserData')}</p>
          ) : (
            <>
              <div className="TodayWeatherSubContainerInput">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    setError("");
                  }}
                  placeholder={t('weather.enterCity')}
                />
                <StyledButton
                  variant="contained"
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  onClick={() => getWeather(city)}
                >
                  {t('weather.getWeather')}
                </StyledButton>
              </div>
              {error && <p>{error}</p>}
              {city && weatherData && (
                <div className="WeatherDetails">
                  <div className="WeatherInfo">
                    <p style={{ fontSize: "24px" }}>{fullDate}</p>
                    <p style={{ fontSize: "14px" }}>{dayOfWeek}</p>
                    <p>
                      <img src={WindSpeed} alt={t('weather.windSpeed')} />{" "}
                      <b>{t('weather.windSpeed')}:</b> {weatherData.wind.speed} {t('weather.units.windSpeedUnit')}
                    </p>
                    <p>
                      <img src={Humidity} alt={t('weather.humidity')} /> <b>{t('weather.humidity')}:</b>{" "}
                      {weatherData.main.humidity}{t('weather.units.humidityUnit')}
                    </p>
                    <p>
                      <img src={Condition} alt={t('weather.condition')} /> <b>{t('weather.condition')}:</b>{" "}
                      {weatherData.weather[0].description}
                    </p>
                  </div>
                  <div className="TemperatureInfo">
                    <div className="TemperatureInfoText">
                      {weatherData.main.temp} {t('weather.units.temperatureUnit')}
                    </div>
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                      alt={weatherData.weather[0].description}
                    />
                  </div>
                </div>
              )}
              {!city && <p>{t('weather.pleaseEnterCity')}</p>}
            </>
          )}
        </div>
      </div>

      <div className="WeeksWeather">
        {dailyForecast.length > 0 && (
          <div className="ForecastCardsContainer">
            <div className="ForecastCardsContainerTitle">{t('weather.forecastTitle')}</div>
            <div className="ForecastCards">
              {dailyForecast.map(([date, data]) => (
                <div className="ForecastCard" key={date}>
                  <div className="ForecastDay">
                    <b>{t(`weather.days.${data.day.toLowerCase()}`)}</b>
                  </div>
                  <div className="ForecastDate">{date}</div>
                  <div className="ForecastDetails">
                    <div className="ForecastColumn">
                      <p>
                        <img src={WindSpeed} alt={t('weather.windSpeed')} />{" "}
                        <b>{t('weather.windSpeed')}:</b> {data.windSpeed} {t('weather.units.windSpeedUnit')}
                      </p>
                      <p>
                        <img src={Humidity} alt={t('weather.humidity')} /> <b>{t('weather.humidity')}:</b>{" "}
                        {data.humidity}{t('weather.units.humidityUnit')}
                      </p>
                      <p>
                        <img src={Condition} alt={t('weather.condition')} />{" "}
                        <b>{t('weather.condition')}:</b> {data.condition}
                      </p>
                    </div>
                    <div className="ForecastColumn">
                      <p>
                        <b>{data.temperature} {t('weather.units.temperatureUnit')}</b>
                      </p>
                      <img
                        src={`https://openweathermap.org/img/wn/${data.icon}.png`}
                        alt={data.condition}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;