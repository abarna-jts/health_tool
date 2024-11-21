import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import female from '../assets/img/female.png'
import male from '../assets/img/male.png'
import { useState } from "react";
import Modal from "react-modal";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import GaugeChart from 'react-gauge-chart';

function BMI_Calculation() {
    const [visibleBox, setVisibleBox] = useState(null);
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [heightCm, setHeightCm] = useState('');
    const [bmi_cal, setBmi] = useState(null);
    const [bmiCategory, setBmiCategory] = useState('');
    const [bmiSuggestion, setBmiSuggestion] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

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
        if (name === 'heightCm') setHeightCm(value);
    };
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const sendResultsToEmail = async (e) => {
        e.preventDefault();
        if (!email || !name) {
            alert("Please provide your name and email.");
            return;
        }
        
        const data = { 
            email, name, 
            bmi_cal,
            age,
            weight,
            heightCm,
        };
    
        try {
            const response = await fetch('https://health-tool.jorim.net/backend-gmail/weight-mail.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
    
            const resultText = await response.text();
            alert(resultText.trim() === 'success' ? 'Email sent successfully!' : `Error sending email: ${resultText}`);
            if (isModalOpen) closeModal();
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the email.');
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
    const bmiPercentage = bmi_cal ? (bmi_cal / 40) * 100 : 0;

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

                    <div className="cards-list">
                    <div 
                            className={`card ${selectedCard === "card1" ? "clicked" : ""}`}
                            onClick={handleButton1Click}
                            style={{ backgroundColor: selectedCard === "card1" ? "rgb(107 173 147 / 30%)" : "transparent" }}
                        >
                            <div className="card_image">
                                <img src={male} className="img-fluid" />
                            </div>
                            <div className="card_title">
                                <p>Male</p>
                            </div>
                        </div>

                        <div 
                            className={`card ${selectedCard === "card2" ? "clicked" : ""}`}
                            onClick={handleButton2Click}
                            style={{ backgroundColor: selectedCard === "card2" ? "rgb(107 173 147 / 30%)" : "transparent" }}
                        >
                            <div className="card_image">
                                <img src={female} className="img-fluid" />
                            </div>
                            <div className="card_title">
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
                                                        {bmi_cal && (
                                                            <>
                                                                <div>
                                                                    <p className="text-center"><strong>Your BMI:</strong> {bmi_cal}</p>
                                                                    <p className="text-center"><strong>BMI Category:</strong> {bmiCategory}</p>
                                                                    <p className="text-justify"><strong>Suggestion: </strong>{bmiSuggestion}</p>
                                                                </div>
                                                                
                                                                <div className="social-container bmi_share_btn" style={{ marginTop: '0px', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                                                    <h4>Share Your Score</h4>
                                                                    <ul className="social-icons" style={{ display: 'flex', listStyle: 'none', padding: 0, justifyContent: "center", alignItems: "center" }}>
                                                                        <li style={{ margin: '0 10px' }}>
                                                                            <button onClick={openModal}>
                                                                                <SiGmail size={24} />
                                                                            </button>
                                                                        </li>
                                                                        <li style={{ margin: '0 10px' }}>
                                                                            <button href="https://wa.me/9500672261?text=Your%20Pregnancy%20Test%20Result!">
                                                                                <FaWhatsapp size={24} />
                                                                            </button>
                                                                        </li>
                                                                        <li style={{ margin: '0 10px' }}>
                                                                            <button href="https://facebook.com/">
                                                                                <FaFacebook size={24} />
                                                                            </button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </>
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
                                                        {bmi_cal && (
                                                            <>
                                                                <div>
                                                                <p className="text-center"><strong>Your BMI:</strong> {bmi_cal}</p>
                                                                <p className="text-center"><strong>BMI Category:</strong> {bmiCategory}</p>
                                                                <p className="text-justify"><strong>Suggestion: </strong>{bmiSuggestion}</p>
                                                                </div>
                                                                <div className="social-container" style={{ marginTop: '20px' }}>
                                                                <h5><strong>Share your Score</strong></h5>
                                                                <ul className="social-icons" style={{ display: 'flex', listStyle: 'none', padding: 0, justifyContent: "center", alignItems: "center" }}>
                                                                    <li style={{ margin: '0 10px' }}>
                                                                        <button onClick={openModal}>
                                                                            <SiGmail size={24} />
                                                                        </button>
                                                                    </li>
                                                                    <li style={{ margin: '0 10px' }}>
                                                                        <button href="https://wa.me/9500672261?text=Your%20Pregnancy%20Test%20Result!">
                                                                            <FaWhatsapp size={24} />
                                                                        </button>
                                                                    </li>
                                                                    <li style={{ margin: '0 10px' }}>
                                                                        <button href="https://facebook.com/">
                                                                            <FaFacebook size={24} />
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            </>
                                                            
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
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Send Results to Email"
                ariaHideApp={false}
                style={{
                    content: {
                        width: "400px",
                        height: "300px",
                        margin: "auto",
                        padding: "20px",
                    },
                }}
            >
                <h2>Send Your Results to Email</h2>
                <form onSubmit={sendResultsToEmail}>
                    <div className="form-group">
                        <label htmlFor="email">Name</label>
                        <input
                            type="name"
                            id="name"
                            className="form-control my-2"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control my-2"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mx-3">Send</button>
                    <button type="button" onClick={closeModal} className="btn btn-secondary">Close</button>
                </form>
            </Modal>
        </>

        
    )

}

export default BMI_Calculation