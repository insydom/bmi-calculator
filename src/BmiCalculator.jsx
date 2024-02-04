import {useState} from 'react';

function BmiCalculator() {
    
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [BMI, setBMI] = useState();
    const [result, setResult] = useState('');
    

    const BMIResult = (calculatedBMI) => {
        if (calculatedBMI < 16) {
            setResult('Severe Thinness');
        } else if (calculatedBMI >= 16 && calculatedBMI <= 17) {
            setResult('Moderate Thinness');
        } else if (calculatedBMI > 17 && calculatedBMI <= 18.5) {
            setResult('Mild Thinness');
        } else if (calculatedBMI > 18.5 && calculatedBMI <= 25) {
            setResult('Normal');
        } else if (calculatedBMI > 25 && calculatedBMI <= 30) {
            setResult('Overweight');
        } else if (calculatedBMI > 30) {
            setResult('Obese');
        }
    }

    const getBMIColor = (calculatedBMI) => {
        if (calculatedBMI < 17 || calculatedBMI > 25) {
          return 'rgba(217, 23, 23, 0.9)'; // Red for Severe Thinness and Obese
        } else {
          return 'rgba(21, 110, 12, 0.8)'; // Green for other categories
        }
      };

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    }

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const calculatedBMI = weight/((height/100) * (height/100));
        if (calculatedBMI > 0) {
            setBMI(calculatedBMI);
            BMIResult(calculatedBMI);
        }
    }


    return (
        <div className="bmi-container">
            <h1>BMI Calculator</h1>
            <form>
                <input type="number" name="age" id="age" placeholder="Your Age"/>
                <div className="gender-container">
                    <label>Male</label>
                    <input className="first-radio" type="radio" name="gender" id="male" value="Male"/>
                    <label>Female</label>
                    <input type="radio" name="gender" id="female" value="female"/>
                </div>
                <input 
                type="number" 
                name="height" 
                id="height" 
                value={height}
                placeholder="Your Height" 
                onChange={handleHeightChange}/>
                
                <input
                className="weight-input"
                type="number"
                name="weight" 
                id="weight" 
                value={weight}
                placeholder="Your Weight" 
                onChange={handleWeightChange}
                />
                <button type="submit" onClick={handleSubmit}>Calculate BMI</button>
            </form>
            <p>Your BMI is: <span style={{ color: getBMIColor(BMI) }}>{BMI} {result}</span></p>
        </div>
    )
}

export default BmiCalculator;