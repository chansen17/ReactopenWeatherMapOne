import React, { Component } from 'react';
import './App.css';

// components/views
import API_KEY from './api_key';
import Form from './components/Form/Form';
import Title from './components/Title/Title';
import Weather from './components/Weather/Weather';

class App extends Component {

  state = {
    temperature: undefined,
    max_temp: undefined,
    min_temp: undefined,
    city: undefined,
    country: undefined,
    country_code: undefined,
    humidity: undefined,
    description: undefined,
    outlook: undefined,
    icon: undefined,
    error: undefined,
  }
    getWeather = async (e) => {
      e.preventDefault();
      let city = e.target.elements.city.value;
      let country = e.target.elements.country.value;

      const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
      const data = await api_call.json();

      let weatherIconPath = `http://openweathermap.org/img/w/`

      if(city && country) {
        this.setState({
          temperature: Math.floor(data.main.temp),
          max_temp: Math.floor(data.main.temp_max),
          min_temp: Math.floor(data.main.temp_min),
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          outlook: data.weather[0].main,
          icon: weatherIconPath + data.weather[0].icon + '.png',
          error: '',
        });
      } else {
          this.setState({
            temperature: undefined,
            max_temp: undefined,
            min_temp: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            outlook: undefined,
            icon: undefined,
            error: "Please enter a city & country",
          });
      }
      
      console.log(data);
    }

    // componentDidMount = () => {
    //   const json = localStorage.getItem("weather");
    //   const weather = JSON.parse(json);
    //   this.setState({
    //     weather
    //   })
    // }
    
    // componentWillUpdate = () => {
    //   localStorage.setItem("weather", JSON.stringify(this.state));
    // }


  render() {
    return (
      <div className="wrapper">
              <div className="left">
                <Title />
              </div>
              <div className="right">
              <Form getWeather={this.getWeather}/>
              <Weather 
                temperature={this.state.temp}
                max_temp={this.state.max_temp}
                min_temp={this.state.min_temp}
                city={this.state.city}
                country={this.state.country}
                country_code={this.state.country_code}
                humidity={this.state.humidity}
                description={this.state.description}
                outlook={this.state.outlook}
                icon={this.state.icon}
                error={this.state.error}
                loading={this.state.loading}
              />
            </div>
      </div>
    );
  }
}

export default App;
