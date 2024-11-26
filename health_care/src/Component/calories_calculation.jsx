import { useState, useEffect } from 'react';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import weight_icon from '../assets/img/weight_icon.png';
import calories_icon from '../assets/img/calories-icon.png';
import ideal_weight from '../assets/img/ideal_weight.png';
import suggested_calories from '../assets/img/suggested_calories.png';
import reduce_cal from '../assets/img/reduce_cal.png';
import Modal from "react-modal";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaCheckCircle } from "react-icons/fa";

const CalorieCalculator = () => {
    const [weight, setWeight] = useState('');
    const [heightCm, setHeightCm] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [activityLevel, setActivityLevel] = useState(null); // Default activity level
    const [bmi, setBmi] = useState(null);
    const [bmiCategory, setBmiCategory] = useState('');
    const [calories, setCalories] = useState(null);
    const [idealWeight, setIdealWeight] = useState(null);
    const [caloriesForIdealWeight, setCaloriesForIdealWeight] = useState(null);
    const [caloriesAdjustment, setCaloriesAdjustment] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'weight') setWeight(value);
        if (name === 'heightCm') setHeightCm(value);
        if (name === 'age') setAge(value);
        if (name === 'gender') setGender(value);
        if (name === 'activityLevel') setActivityLevel(value);
    };

    const calculateValues = (e) => {
        e.preventDefault();

        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(heightCm);
        const ageNum = parseFloat(age);
        // Check if height is below a reasonable threshold for cm (e.g., 100 cm)
        if (heightNum < 100) {
            alert("Please enter your height in centimeters (cm) for accurate calculations.");
            return;
        }
        // Validate input values
        if (isNaN(weightNum) || isNaN(heightNum) || isNaN(ageNum) || isNaN(activityLevel) || !gender) {
            alert("Please enter valid values for all fields.");
            return;
        }

        const heightInMeters = heightNum / 100; // Convert height from cm to meters

        // Calculate BMI
        const bmiValue = weightNum / (heightInMeters * heightInMeters);
        let bmiCategoryValue = '';
        if (bmiValue < 18.5) {
            bmiCategoryValue = 'Underweight';
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            bmiCategoryValue = 'Normal weight';
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            bmiCategoryValue = 'Overweight';
        } else {
            bmiCategoryValue = 'Obese';
        }

        setBmi(bmiValue.toFixed(2));
        setBmiCategory(bmiCategoryValue);

        // Calculate Calories (Harris-Benedict equation)
        let calorieResult;
        if (gender === 'male') {
            calorieResult = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) + 5;
        } else if (gender === 'female') {
            calorieResult = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) - 161;
        }

        calorieResult *= parseFloat(activityLevel); // Adjust for activity level
        setCalories(calorieResult.toFixed(2));

        // Calculate Ideal Weight (IBW)
        let idealWeightResult;
        if (gender === 'male') {
            idealWeightResult = 22 * (heightInMeters * heightInMeters); // For men
        } else if (gender === 'female') {
            const heightInMetersAdjusted = (heightNum - 10) / 100; // Subtract 10 cm for women
            idealWeightResult = 22 * (heightInMetersAdjusted * heightInMetersAdjusted); // For women
        }

        setIdealWeight(idealWeightResult.toFixed(2));

        // Calculate Calories for Ideal Weight
        let idealCaloriesResult;
        if (gender === 'male') {
            idealCaloriesResult = (10 * idealWeightResult) + (6.25 * heightNum) - (5 * ageNum) + 5;
        } else if (gender === 'female') {
            idealCaloriesResult = (10 * idealWeightResult) + (6.25 * heightNum) - (5 * ageNum) - 161;
        }

        idealCaloriesResult *= parseFloat(activityLevel); // Adjust for activity level
        setCaloriesForIdealWeight(idealCaloriesResult.toFixed(2));

        // Suggestion for calories control
        const calorieDifference = calorieResult - idealCaloriesResult;
        if (calorieDifference > 0) {
            setCaloriesAdjustment(`To achieve your ideal weight, reduce your intake by ${Math.abs(calorieDifference).toFixed(2)} kcal.`);
        } else if (calorieDifference < 0) {
            setCaloriesAdjustment(`To achieve your ideal weight, you can increase your intake by ${Math.abs(calorieDifference).toFixed(2)} kcal.`);
        } else {
            setCaloriesAdjustment("You are already at your ideal calorie intake.");
        }

    };

    const sendResultsToEmail = async (e) => {
        e.preventDefault();
        if (!email || !name) {
            alert("Please provide your name and email.");
            return;
        }

        const data = {
            email, name,
            bmi, calories,
            caloriesForIdealWeight,
            idealWeight,
            caloriesAdjustment,
            weight,
            heightCm,
            age,
            gender,
            activityLevel,
        };

        try {
            const response = await fetch('https://health-tool.jorim.net/backend-gmail/weight-mail.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const resultText = await response.text();
            if (resultText.trim() === 'success') {
                setIsModalOpen(false);
                setIsSuccessModalOpen(true);
            } else {
                alert(`Error sending email: ${resultText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the email.');
        }
    };

    useEffect(() => {
        if (bmi) {
            const completionElement = document.getElementById("completion-status");
            if (completionElement) {
                completionElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [bmi]);

    const openWhatsapp = () => {
        const url = 'https://wa.me/9150036318?text=Your%20Pregnancy%20Test%20Result!';
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    const openFacebook = () => {
        const url = 'https://www.facebook.com/';
        window.open(url, '_blank', 'noopener,noreferrer');
    }


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const closeSuccessModal = () => setIsSuccessModalOpen(false);

    return (
        <>
            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7 ">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Calories Calculate</div>
                            </div>
                            <div className="para-desc text-justify">
                                <p><strong>Overview:</strong> Is a calculation based on the number of calories consumed / male (female / female) on several factors such as weight, height, age, and type of daily physical activity.</p>
                            </div>
                        </div>



                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="box-calculation justify-content-center">
                                <form onSubmit={calculateValues}>

                                    <div className="col-md-12 form-group">
                                        <label>Weight (in kg)</label>
                                        <input
                                            type="number"
                                            name="weight"
                                            className="form-control"
                                            value={weight}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12 form-group">
                                        <label>Height (in cm)</label>
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

                                    <div className="col-md-12 form-group">
                                        <label>Age</label>
                                        <input
                                            type="number"
                                            name="age"
                                            className="form-control"
                                            placeholder="Enter your age"
                                            value={age}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12 form-group">
                                        <label>Gender</label>
                                        <div className="form-group">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                className="gender_input"
                                                onChange={handleChange}
                                                required
                                            />
                                            <label>Male</label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                className="gender_input"
                                                onChange={handleChange}
                                                required
                                            />
                                            <label>Female</label>
                                        </div>
                                    </div>


                                    <div className="col-md-12 form-group">
                                        <label>Exercise Level:</label>
                                        <div className="form-group">
                                            <select
                                                className="form-select"
                                                name="activityLevel"
                                                value={activityLevel}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Option</option>
                                                <option value="1.2">Sedentary (little or no exercise)</option>
                                                <option value="1.375">Lightly active (1-3 days per week)</option>
                                                <option value="1.55">Moderately active (3-5 days per week)</option>
                                                <option value="1.725">Very active (6-7 days per week)</option>
                                                <option value="1.9">Super active (twice a day, intense)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="btn-center">
                                        <button type="submit" className="btn btn-primary">Calculate BMI & Calories</button>
                                    </div>

                                    <div className="result">
                                        {calories &&
                                            <>
                                                <h5 className="text-center pt-2 pb-2" style={{ color: "#0d8c60" }}><strong>Result: You consume at a rate {calories} calories a day</strong></h5>
                                                <div className="social-container">
                                                    <h5><strong>Share your Score</strong></h5>
                                                    <ul className="social-icons" style={{ display: 'flex', listStyle: 'none', padding: 0, justifyContent: "center", alignItems: "center" }}>
                                                        <li style={{ margin: '0 10px' }}>
                                                            <button onClick={openModal}>
                                                                <SiGmail size={24} />
                                                            </button>
                                                        </li>
                                                        <li style={{ margin: '0 10px' }}>
                                                            <button onClick={openWhatsapp} target="_blank" rel="noopener noreferrer">
                                                                <FaWhatsapp size={24} />
                                                            </button>
                                                        </li>
                                                        <li style={{ margin: '0 10px' }}>
                                                            <button onClick={openFacebook} target="_blank" rel="noopener noreferrer">
                                                                <FaFacebook size={24} />
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </>

                                        }
                                    </div>

                                </form>
                            </div>

                        </div>
                        <div className="row d-flex pt-3 justify-content-center calories_total">
                            {bmi &&
                                <>
                                    {/* <div className="total-box calories " id='completion-status'>
                                        <img src={weight_icon} alt="" className='icon' />
                                        <div className="result-text">
                                            <h6>BMI:{bmi}</h6>
                                            <h6> ({bmiCategory})</h6>
                                        </div>

                                    </div> */}

                                    <div className="result-inner-box text-center total-box calories" id='completion-status'>
                                        <div className="result-header">
                                            <h6>BMI:{bmi}</h6>
                                        </div>
                                        
                                                <img src={weight_icon} alt="" />
                                                <h6> ({bmiCategory})</h6>
                                            </div>

                                        

                                </>

                            }
                            {calories &&
                                <>
                                    {/* <div className="col-md-3"> */}
                                    <div className="result-inner-box text-center total-box calories">
                                        <div className="result-header">
                                            <h6>Current Calories </h6>
                                        </div>
                                        <img src={calories_icon} alt="" />
                                        
                                            <h6>Your Daily Calorie Requirement:{calories} kcal</h6>
                                        


                                    </div>
                                    {/* </div> */}
                                </>
                            }
                            {idealWeight &&
                                <>
                                    {/* <div className="col-md-3"> */}
                                    <div className="result-inner-box text-center total-box calories">
                                        <div className="result-header">
                                            <h6>Ideal Weight (Kg)</h6>
                                        </div>
                                        <img src={ideal_weight} alt="" />
                                        
                                            <h6>Your Ideal Weight: {idealWeight} kg</h6>
                                        

                                    </div>
                                    {/* </div> */}
                                </>
                            }
                            {caloriesForIdealWeight &&
                                <>
                                    {/* <div className="col-md-3"> */}
                                    <div className="result-inner-box text-center total-box calories ">
                                        <div className="result-header">
                                            <h6>Calories for ideal weight</h6>
                                        </div>
                                        <img src={suggested_calories} alt="" />
                                       
                                            <h6>Calories for Ideal Weight: {caloriesForIdealWeight} kcal</h6>
                                        

                                    </div>
                                    {/* </div> */}
                                </>
                            }
                            {caloriesAdjustment &&
                                <>
                                    {/* <div className="col-md-3"> */}
                                    <div className="result-inner-box text-center total-box calories">
                                        <div className="result-header">
                                            <h6>Calories Adjustment</h6>
                                        </div>
                                        <img src={reduce_cal} alt="" />
                                        
                                            <h6>{caloriesAdjustment}</h6>
                                        

                                    </div>
                                    {/* </div> */}
                                </>
                            }
                        </div>
                    </div>


                </div>
            </section>

            <style jsx>{`
            @keyframes zoomInOut {
                        0% {
                            transform: scale(0.8);
                            opacity: 0;
                        }
                        100% {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }

                    @keyframes zoomOut {
                        0% {
                            transform: scale(1);
                            opacity: 1;
                        }
                        100% {
                            transform: scale(0.8);
                            opacity: 0;
                        }
                    }

                    .successModalContent {
                        animation: zoomInOut 0.5s ease-out forwards;
                    }
            `}

            </style>


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

            <Modal
                isOpen={isSuccessModalOpen}
                onRequestClose={closeSuccessModal}
                contentLabel="Success Message"
                ariaHideApp={false}
                style={{
                    content: {
                        width: "350px",
                        height: "250px",
                        margin: "auto",
                        padding: "20px",
                        textAlign: "center",
                    },
                }}
            >
                <div className="successModalContent">
                    <FaCheckCircle size={40} color="green" />
                    <h2>Email Sent!</h2>
                    <p>Your results have been sent successfully to your email.</p>
                    <button onClick={closeSuccessModal} className="btn btn-primary mt-3">
                        Close
                    </button>
                </div>
            </Modal>

        </>

    );
};

export default CalorieCalculator;
