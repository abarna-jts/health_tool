import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import female from '../assets/img/female.png'
import male from '../assets/img/male.png'
import { useState } from "react";
import GaugeChart from 'react-gauge-chart';

function BMI_Calculation() {
    const [visibleBox, setVisibleBox] = useState(null);
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [heightCm, setHeightCm] = useState('');
    const [bmi, setBmi] = useState(null);
    const [bmiCategory, setBmiCategory] = useState('');
    const [bmiSuggestion, setBmiSuggestion] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);

    // Define click handler functions for each button
    const handleButton1Click = () => {
        setVisibleBox("box1");
        setSelectedCard("card1");
    };

    const handleButton2Click = () => {
        setAge('');
        setWeight('');
        setHeightCm('');
        setBmi(null);
        setBmiCategory('');
        setBmiSuggestion('');
        setVisibleBox("box2");
        setSelectedCard("card2");
    };

    // Handle input change for age, weight, and height
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'age') setAge(value);
        if (name === 'weight') setWeight(value);
        if (name === 'heightCm') {
            if (value && value < 100) {
                alert("Please enter your height in centimeters, not inches.");
            }
            setHeightCm(value);
        }
    };

    // Calculate BMI and categorize it
    const calculateBMI = (e) => {
        e.preventDefault();

        // Validate height in cm
        if (!heightCm || heightCm < 100) {
            alert("BMI calculation requires height in centimeters (at least 100 cm). Please enter a valid height.");
            return;
        }

        // Convert height from cm to meters
        const heightInMeters = parseFloat(heightCm) / 100;

        // Calculate BMI using the formula
        const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);

        // Set BMI state
        setBmi(bmiValue.toFixed(2));

        // Determine BMI category and suggestions
        let category = '';
        let suggestion = '';
        if (bmiValue < 18.5) {
            category = 'Underweight';
            suggestion = 'The weight is less than normal-weight, which makes you susceptible to many diseases. Please consult a specialist physician as soon as possible.';
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            category = 'Normal weight';
            suggestion = 'Congratulations! You are not overweight and are not subjected to diseases directly attributed to being overweight.';
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            category = 'Overweight';
            suggestion = 'Aim for a balanced diet with controlled portions, and consider increasing your physical activity.';
        } else {
            category = 'Obesity';
            suggestion = 'You are experiencing obesity. You should consult your doctor and consider starting a health plan immediately.';
        }

        setBmiCategory(category);
        setBmiSuggestion(suggestion);
    };

    // Convert BMI to a percentage for a gauge chart (optional)
    const bmiPercentage = bmi ? (bmi / 40) * 100 : 0;

    return (
        <>
            <section className="section desc_sec">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <div className="title text-center">
                            <div className="nd-title">Body Mass Index (BMI) Calculator</div>
                        </div>
                        
                        <div className="para-desc text-center">
                            <p><strong>Overview:</strong> Calculate your body mass (male\female) according to important factors, such as height and weight. It is considered a useful information to identify the normal weight</p>
                        </div>
                    </div>
                        
                        
                       
                    </div>

                    <div class="cards-list">
                    <div 
                            className={`card ${selectedCard === "card1" ? "clicked" : ""}`}
                            onClick={handleButton1Click}
                            style={{ backgroundColor: selectedCard === "card1" ? "rgb(107 173 147 / 30%)" : "transparent" }}
                        >
                            <div class="card_image">
                                <img src={male} className="img-fluid" />
                            </div>
                            <div class="card_title">
                                <p>Male</p>
                            </div>
                        </div>

                        <div 
                            className={`card ${selectedCard === "card2" ? "clicked" : ""}`}
                            onClick={handleButton2Click}
                            style={{ backgroundColor: selectedCard === "card2" ? "rgb(107 173 147 / 30%)" : "transparent" }}
                        >
                            <div class="card_image">
                                <img src={female} className="img-fluid" />
                            </div>
                            <div class="card_title">
                                <p>Female</p>
                            </div>
                        </div>

                    </div>

                    {visibleBox === "box1" && (
                        <>
                            <section>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-7">
                                            <div className="box-calculation">
                                                <div className="col-md-6">
                                                    <form onSubmit={calculateBMI}>
                                                        <div className="col-md-12">
                                                            <label>Age</label>
                                                            <div className="form-group">
                                                                <input
                                                                    type="number"
                                                                    name="age"
                                                                    className="form-control"
                                                                    placeholder="Enter your Age"
                                                                    value={age}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12 ">
                                                            <label>Weight</label>
                                                            <div className="form-group d-flex">
                                                                <input
                                                                    type="number"
                                                                    name="weight"
                                                                    className="form-control"
                                                                    placeholder="Enter your weight"
                                                                    value={weight}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                                <span className="input-group-text">KG</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <label>Height (in cm)</label>
                                                            <div className="form-group">
                                                                <input
                                                                    type="number"
                                                                    name="heightCm"
                                                                    className="form-control"
                                                                    placeholder="Enter your height in cm"
                                                                    value={heightCm}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <button type="submit" className="btn btn-primary">Calculate BMI</button>

                                                    </form>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="col-md-12 gauge_chart">
                                                        {/* Gauge Chart for BMI */}

                                                        <div>
                                                            <GaugeChart
                                                                id="bmi-gauge"
                                                                nrOfLevels={20}
                                                                percent={bmiPercentage / 100} // Convert to percentage
                                                                colors={["#FF0000", "#FFBF00", "#00FF00"]}
                                                                arcWidth={0.03}
                                                                arcPadding={0.02}
                                                            />
                                                        </div>
                                                        {bmi && (
                                                            <div>
                                                            <p className="text-center"><strong>Your BMI:</strong> {bmi}</p>
                                                            <p className="text-center"><strong>BMI Category:</strong> {bmiCategory}</p>
                                                            <p className="text-justify"><strong>Suggestion: </strong>{bmiSuggestion}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>



                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </>
                    )}

                    {visibleBox === "box2" && (
                        <>
                            <section>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-7">
                                            <div className="box-calculation">
                                                <div className="col-md-6">
                                                    <form onSubmit={calculateBMI}>
                                                        <div className="col-md-12">
                                                            <label>Age</label>
                                                            <div className="form-group">
                                                                <input
                                                                    type="number"
                                                                    name="age"
                                                                    className="form-control"
                                                                    placeholder="Enter your Age"
                                                                    value={age}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <label>Weight</label>
                                                            <div className="form-group d-flex">
                                                                <input
                                                                    type="number"
                                                                    name="weight"
                                                                    className="form-control"
                                                                    placeholder="Enter your weight"
                                                                    value={weight}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                                <span className="input-group-text">KG</span>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <label>Height (in cm)</label>
                                                            <div className="form-group">
                                                                <input
                                                                    type="number"
                                                                    name="heightCm"
                                                                    className="form-control"
                                                                    placeholder="Enter your height in cm"
                                                                    value={heightCm}
                                                                    onChange={handleChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <button type="submit" className="btn btn-primary">Calculate BMI</button>

                                                    </form>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="col-md-12 gauge_chart">
                                                        {/* Gauge Chart for BMI */}

                                                        <div>
                                                            <GaugeChart
                                                                id="bmi-gauge"
                                                                nrOfLevels={20}
                                                                percent={bmiPercentage / 100} // Convert to percentage
                                                                colors={["#FF0000", "#FFBF00", "#00FF00"]}
                                                                arcWidth={0.03}
                                                                arcPadding={0.02}
                                                            />
                                                        </div>
                                                        {bmi && (
                                                            <div>
                                                            <p className="text-center"><strong>Your BMI:</strong> {bmi}</p>
                                                            <p className="text-center"><strong>BMI Category:</strong> {bmiCategory}</p>
                                                            <p className="text-justify"><strong>Suggestion: </strong>{bmiSuggestion}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>



                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </>
                    )}


                </div>
            </section>
        </>
    )

}

export default BMI_Calculation