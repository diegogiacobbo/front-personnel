import React, { } from 'react'
import TemperatureInput from './temperatureInput.jsx'

class Calculator extends React.Component {

    constructor(props) {
        //Local sem elevar estado seria assim.
        //this.handleChange = this.handleChange.bind(this);
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: '22', scale: 'f' };
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }
    
    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }

    handleChange(e) {
        //Local sem elevar estado seria assim.
        //Mas, setamos valor nao mais na variavel local, sim na propriedade 
        // onTemperatureChange que esta dentro do componente TemperatureImput
        //this.setState({ temperature: e.target.value });
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) :
            temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) :
            temperature;
        return (

            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }

}
export default Calculator

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}