import React from 'react';
import './Weather.css';

const Weather = (props) => (
    <div>
        {/* without ternary( ?, :) to render only true */}
        { props.city && props.country ? <p><span>Location</span>: {props.city} {props.country}</p> : props.loading } 
        { props.temperature && <p><span>Temperature</span>: {props.temperature}</p>}
        { props.max_temp && <p><span>Max_temp</span>: {props.max_temp}</p>}
        { props.min_temp && <p><span>Min</span>: {props.max_temp}</p>}
        { props.humidity && <p><span>Humidity</span>: {props.humidity}</p>}
        { props.description && <p><span>Description</span>: {props.description}</p>}
        { props.outlook && <p><span>Outlook</span>: {props.outlook}</p>}
        { props.icon && <img className="weatherIcon" src={props.icon} alt={props.city} />}
        { props.error && <p>{props.error}</p> }
    </div>  
);

export default Weather;
