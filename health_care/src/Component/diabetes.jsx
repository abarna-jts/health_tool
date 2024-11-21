import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


function Diabetes() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const questions = [
        {
            id: 1,
            text: "How old are you?",
            options: [
                { label: "Younger than 40 years (0 points)", value: 0, emoji: "😢" },
                { label: "40–49 years (1 point)", value: 1, emoji: "😟" },
                { label: "50–59 years (2 points)", value: 2, emoji: "🙂" },
                { label: "60 years or older (3 points)", value: 3, emoji: "😊" }
            ]
        },
        {
            id: 2,
            text: "Are you a man or a woman?",
            options: [
                { label: "Man (1 point)", value: 1, emoji: "😊" },
                { label: "Woman (0 points)", value: 0, emoji: "😢" }
            ]
        },
        {
            id: 3,
            text: "If you are a woman, have you ever been diagnosed with gestational diabetes?",
            options: [
                { label: "Yes (1 point)", value: 1, emoji: "😊" },
                { label: "No (0 points)", value: 0, emoji: "😢" },
            ]
        },
        {
            id: 4,
            text: "Do you have a mother, father, sister, or brother with diabetes?",
            options: [
                { label: "Yes (1 point)", value: 1, emoji: "😊" },
                { label: "No (0 points)", value: 0, emoji: "😢" }
            ]
        },
        {
            id: 5,
            text: "Have you ever been diagnosed with high blood pressure?",
            options: [
                { label: "Yes (1 point)", value: 1, emoji: "😊" },
                { label: "No (0 points)", value: 0, emoji: "😢" }
            ]
        },
        {
            id: 6,
            text: "Are you physically active?",
            options: [
                { label: "Yes (0 point)", value: 0, emoji: "😢" },
                { label: "No (1 point)", value: 1, emoji: "😊" }
            ]
        },
        {
            id: 7,
            text: "What is your weight category?",
            options: [] // No options needed here since we are using custom selects
        }
    ];

    const heightWeightPoints = {
        "147.32 cm": [
            { range: "0-54 kg", points: 1 },
            { range: "54-64.4 kg", points: 1 },
            { range: "64.9-86.2 kg", points: 2 },
            { range: "86.6+ kg", points: 3 }
        ],
        "149.86 cm": [
            { range: "0-56.1 kg", points: 1 },
            { range: "56.2-66.7 kg", points: 1 },
            { range: "67.1-89.4 kg", points: 2 },
            { range: "89.8+ kg", points: 3 }
        ],
        "152.4 cm": [
            { range: "0-58 kg", points: 1 },
            { range: "58.1-68.9 kg", points: 1 },
            { range: "69.4-92.1 kg", points: 2 },
            { range: "92.5+ kg", points: 3 }
        ],
        "154.94 cm": [
            { range: "0-59.8 kg", points: 1 },
            { range: "59.9-71.2 kg", points: 1 },
            { range: "71.7-95.3 kg", points: 2 },
            { range: "95.7+ kg", points: 3 }
        ],
        "157.48 cm": [
            { range: "0-61.6 kg", points: 1 },
            { range: "61.7-73.9 kg", points: 1 },
            { range: "74.4-98.4 kg", points: 2 },
            { range: "98.9+ kg", points: 3 }
        ],
        "160.02 cm": [
            { range: "0-63.9 kg", points: 1 },
            { range: "64.0-76.2 kg", points: 1 },
            { range: "76.7-101.6 kg", points: 2 },
            { range: "102.1+ kg", points: 3 }
        ],
        "162.56 cm": [
            { range: "0-65.7 kg", points: 1 },
            { range: "65.8-78.5 kg", points: 1 },
            { range: "78.9-104.8 kg", points: 2 },
            { range: "105.2+ kg", points: 3 }
        ],
        "165.1 cm": [
            { range: "0-68 kg", points: 1 },
            { range: "68.0-81.2 kg", points: 1 },
            { range: "81.6-108.4 kg", points: 2 },
            { range: "108.9+ kg", points: 3 }
        ],
        "167.64 cm": [
            { range: "0-70.2 kg", points: 1 },
            { range: "70.3-83.9 kg", points: 1 },
            { range: "84.4-111.6 kg", points: 2 },
            { range: "112.0+ kg", points: 3 }
        ],
        "170.18 cm": [
            { range: "0-72 kg", points: 1 },
            { range: "72.1-86.2 kg", points: 1 },
            { range: "86.6-115.2 kg", points: 2 },
            { range: "115.7+ kg", points: 3 }
        ],
        "172.72 cm": [
            { range: "0-74.3 kg", points: 1 },
            { range: "74.4-88.9 kg", points: 1 },
            { range: "89.4-118.4 kg", points: 2 },
            { range: "118.8+ kg", points: 3 }
        ],
        "175.26 cm": [
            { range: "0-76.6 kg", points: 1 },
            { range: "76.7-91.6 kg", points: 1 },
            { range: "92.1-122 kg", points: 2 },
            { range: "122.5+ kg", points: 3 }
        ],
        "177.8 cm": [
            { range: "0-78.8 kg", points: 1 },
            { range: "78.9-94.3 kg", points: 1 },
            { range: "94.8-125.6 kg", points: 2 },
            { range: "126.1+ kg", points: 3 }
        ],
        "180.34 cm": [
            { range: "0-81.1 kg", points: 1 },
            { range: "81.2-97.1 kg", points: 1 },
            { range: "97.5-129.3 kg", points: 2 },
            { range: "129.7+ kg", points: 3 }
        ],
        "182.88 cm": [
            { range: "0-83.4 kg", points: 1 },
            { range: "83.5-99.8 kg", points: 1 },
            { range: "100.2-132.9 kg", points: 2 },
            { range: "133.4+ kg", points: 3 }
        ],
        "185.42 cm": [
            { range: "0-85.6 kg", points: 1 },
            { range: "85.7-102.5 kg", points: 1 },
            { range: "103-136.5 kg", points: 2 },
            { range: "137.0+ kg", points: 3 }
        ],
        "187.96 cm": [
            { range: "0-87.9 kg", points: 1 },
            { range: "88.0-105.2 kg", points: 1 },
            { range: "105.7-140.6 kg", points: 2 },
            { range: "141.1+ kg", points: 3 }
        ],
        "190.5 cm": [
            { range: "0-90.6 kg", points: 1 },
            { range: "90.7-108.4 kg", points: 1 },
            { range: "108.9-144.2 kg", points: 2 },
            { range: "144.7+ kg", points: 3 }
        ],
        "193.04 cm": [
            { range: "0-111 kg", points: 1 },
            { range: "111.1 - 93.0 kg", points: 1 },
            { range: "111.6-148.3", points: 2 },
            { range: "148.8+ kg", points: 3 }
        ]
        // Add mappings for other heights similarly
    };

    const [responses, setResponses] = useState(Array(questions.length).fill(null));
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [heightWeightPointsTotal, setHeightWeightPointsTotal] = useState(0);

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
        setWeight(""); // Reset weight when height changes
        setHeightWeightPointsTotal(0); // Reset points for height/weight selection
    };

    const handleWeightChange = (e) => {
        const selectedWeight = e.target.value;
        setWeight(selectedWeight);

        // Calculate points for height and weight
        if (height && selectedWeight) {
            const selectedHeightWeight = heightWeightPoints[height].find(
                (item) => item.range === selectedWeight
            );
            setHeightWeightPointsTotal(selectedHeightWeight?.points || 0);
        }
    };

    const handleOptionChange = (questionId, value) => {
        setResponses({
            ...responses,
            [questionId]: value
            
        });
    };

    const calculateTotalPoints = () => {
        const questionPointsTotal = Object.values(responses).reduce((acc, val) => acc + val, 0);
        return questionPointsTotal + heightWeightPointsTotal;
    };


    const sendResultsToEmail = async (e) => {
        e.preventDefault();
    
        // Validate if name and email are provided
        if (!email || !name) {
            alert("Please provide your name and email.");
            return;
        }
    
        // Calculate the total score
        const totalScore_diabetes = calculateTotalPoints();
    
        // Prepare the data to send in the email
        const data = {
            email, 
            name, 
            totalScore_diabetes,
            responses,
            height,  // Add height value
            weight,  // Add weight value
        };
    
        try {
            const response = await fetch('https://health-tool.jorim.net/backend-gmail/anxiety-mail.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
    
            const resultText = await response.text();
            alert(resultText.trim() === 'success' ? 'Email sent successfully!' : `Error sending email: ${resultText}`);
            
            // Close modal if it was opened
            if (isModalOpen) closeModal();
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the email.');
        }
    };
    
    useEffect(() => {
        if (calculateTotalPoints) {
            const completionElement = document.getElementById("completion-status");
            if (completionElement) {
                completionElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [calculateTotalPoints]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <section className="pt-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="title text-center text-nowrap">
                            <div className="nd-title">Prediabetes Risk Test</div>
                        </div>
                        <div className="col-md-7">
                            <div className="para-desc text-justify">
                                <p>It is a test that helps you know if you have or are at risk of developing pre-diabetes, to enable early prevention, control, and avoid complications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-7">
                            {questions.map((question, questionIndex) => (
                                <div key={question.id} className="question-box p-3 mb-3 diabetes-question">
                                    <h5 className="question-title">{questionIndex + 1}. {question.text}</h5>
                                    <div className="toggle-options row">
                                        {question.id === 7 ? (
                                            <>
                                                <div className="col-6 mb-2">
                                                    <label htmlFor="height">Select Height</label>
                                                    <select
                                                        id="height"
                                                        name="height"
                                                        className="form-control"
                                                        value={height}
                                                        onChange={handleHeightChange}
                                                    >
                                                        <option value="">Select Height</option>
                                                        {Object.keys(heightWeightPoints).map((heightOption, index) => (
                                                            <option key={index} value={heightOption}>
                                                                {heightOption}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <label htmlFor="weight">Select Weight</label>
                                                    <select
                                                        id="weight"
                                                        name="weight"
                                                        className="form-control"
                                                        value={weight}
                                                        onChange={handleWeightChange}
                                                        disabled={!height} // Disable weight select if no height is chosen
                                                    >
                                                        <option value="">Select Weight</option>
                                                        {height && heightWeightPoints[height].map((weightOption, index) => (
                                                            <option key={index} value={weightOption.range}>
                                                                {weightOption.range}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <p style={{ color: heightWeightPointsTotal > 0 ? 'green' : 'black' }}>
                                                    Points for Height & Weight: {heightWeightPointsTotal}
                                                    </p>
                                                
                                            </>
                                        ) : (
                                            question.options.map((option, optionIndex) => (
                                                <div key={optionIndex} className="col-6 mb-2">
                                                    <label
                                                    className={`radio-label ${responses[questionIndex] === option.value ? "selected" : ""}`}
                                                >
                                                    <span className="emoji">
                                                        {responses[questionIndex] === option.value ? option.emoji : "🔘"}
                                                    </span>
                                                    {option.label}
                                                    <input
                                                        type="radio"
                                                        name={`question-${questionIndex}`}
                                                        className="radio-input"
                                                        value={option.value}
                                                        onChange={() => handleOptionChange(questionIndex, option.value)}
                                                        checked={responses[questionIndex] === option.value}
                                                    />
                                                </label>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                    {responses[questionIndex] !==null && (
                                        <div className="selected-value-box">
                                            {responses[questionIndex]}
                                            
                                        </div>
                                    )}
                                </div>

                            ))}
                            <div id="completion-status" className={`completion-status text-justify mt-3 total-box mb-3`}>
                                <h5 style={{ color: "#16192c" }}>Total Points: {calculateTotalPoints()}</h5>
                                {calculateTotalPoints() >= 5 && (
                                    <>
                                        <h6>If you scored 5 or higher</h6>
                                        <p>You are at increased risk for having prediabetes and are at high risk for type 2 diabetes However, only your
                                            doctor can tell for sure if you have type 2 diabetes or prediabetes, a condition in which blood sugar
                                            levels are higher than normal but not high enough yet to be diagnosed as type 2 diabetes.</p>
                                        <p>Talk to your doctor to see if additional testing is needed.</p>
                                    </>
                                )}
                                {calculateTotalPoints() > 0 && calculateTotalPoints() < 5 && (
                                    <>
                                        <h6>If you scored 4 or less</h6>
                                        <p>You are not at risk of getting prediabetes Stay healthy and active to lower your risk of developing any diseases.</p>
                                    </>
                                )}
                                {calculateTotalPoints() === 0 && (
                                    <>
                                        <p>Answer all the question</p>
                                    </>
                                )}
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .selected-value-box {
                    margin-top: 10px;
                    padding: 7px 10px;
                    background-color: #ffffff;
                    border: 2px solid #0d8c60;
                    border-radius: 5px;
                    font-size: 14px;
                    font-weight: bold;
                    color: #0d8c60;
                    width: fit-content;
                    position: relative;
                    top: -60px;
                    right: -50px;
                    float: right;
                }

                .radio-label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .radio-input {
                    display: none;
                }

                .emoji {
                    margin-right: 10px;
                    font-size: 14px;
                }

                
            `}</style>

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
    );
}

export default Diabetes;
