# Weather App
 
A simple weather app built with React. Search for any city and see its current temperature, conditions, and more. The card's image and icon change based on the weather.
 
## Features
 
- Search weather by city name
- Shows temperature, weather description, min/max temperature, and "feels like"
- Dynamic background image and icon based on humidity and temperature
- Error message for invalid city names or network failures
- Material UI components for a clean look
## Note
 
This is a simple beginner-level project. The weather information shown may not always be accurate, since it depends entirely on the data returned by the OpenWeatherMap API, which can have faults or delays. Error handling is in place (invalid city names and network failures show an error message), and the icons and images change according to the weather conditions.
 
## Tech Stack
 
- React
- Vite
- Material UI and MUI Icons
- OpenWeatherMap API

## How It Works
 
1. `Searchbox` takes the city name and calls the OpenWeatherMap API.
2. On success, it passes the weather data up to `Weatherapp` through the `newInfo` prop.
3. On failure (city not found or no internet), it passes `{ msg: 0 }` instead.
4. `Infobox` reads that state and shows either the weather card or an error alert.
 


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
