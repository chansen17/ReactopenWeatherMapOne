import React from 'react';
import './Form.css'

const Form = (props) => (
    <div>
        <form onSubmit={props.getWeather}>
            <div className="form-input">
                <input type="text" name="city" placeholder="Please enter city" required/>
            </div>
            <div className="form-input">
                <input type="text" name="country" placeholder="Please enter country" required/>
            </div>
            <div className="form-input">
                <button>Get weather</button>
            </div>
        </form>
    </div>
);

export default Form;