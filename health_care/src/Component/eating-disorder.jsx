import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaCheckCircle } from "react-icons/fa";

function EatingDisorder() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const questions = [
        "A close family member has, or has had, an eating disorder", // 1
        "I try to hide my eating", // 2
        "When I eat, I eat a very large amount of food in one go, and I have no control over it", // 3
        "When others critique my eating or pressure me to eat more, this makes me very annoyed", // 4
        "I am not happy unless everything is perfect", // 5
        "I am happy with my eating patterns", // 6
        "I eat to excess before forcing myself to vomit", // 7
        "How long have you had a problem with your sleep?", // 8
        "I control my weight using medications like laxatives or diuretics", // 9
        "Working out for me is all about weight loss, and missing a workout makes me upset",// 10
        "I don’t really believe my family or friends when they say that I’m skinny or underweight", //11
        "I eat to excess before forcing myself to vomit" //12
    ];

    const options1 = [
        { label: "Always", value: 4 , emoji: "😁"},
        { label: "Frequently", value: 3, emoji: "😊" },
        { label: "Sometimes", value: 2, emoji: "🙂" },
        { label: "Occasionally", value: 1, emoji: "😟" },
        { label: "Not at all", value: 0, emoji: "😢" }
    ];

    const options2 = [
        { label: "Yes", value: 1, emoji: "😊" },
        { label: "No", value: 0, emoji: "😢" }
    ];

    const options3 = [
        { label: "True", value: 1, emoji: "😊" },
        { label: "False", value: 0, emoji: "😢" },
    ];

    const options4=[
        {label: "True", value:1, emoji:"😊"},
        {label: "A little", value:0, emoji:"😢"},
    ];


    const [responses, setResponses] = useState(Array(questions.length).fill(null));
    const totalScore_eating = responses.reduce((acc, curr) => acc + (curr ?? 0), 0);

    const handleOptionChange = (questionIndex, value) => {
        const updatedResponses = [...responses];
        updatedResponses[questionIndex] = value;
        setResponses(updatedResponses);
    };
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const closeSuccessModal = () => setIsSuccessModalOpen(false);
    // Check if all questions have been answered
    const allQuestionsAnswered = responses.every(response => response !== null);
    useEffect(() => {
        if (allQuestionsAnswered) {
            const completionElement = document.getElementById("completion-status");
            if (completionElement) {
                completionElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [allQuestionsAnswered]);
    // Select options based on question index
    const getOptionsForQuestion = (questionIndex) => {
        if (questionIndex === 0 || questionIndex === 11) {
            return options2; // First and last questions use options2
        } else if (questionIndex === 2 || questionIndex === 3 || questionIndex === 8 || questionIndex ===6) {
            return options1; // Specific questions use options1
        } else if (questionIndex === 9) {
            return options3;
        } else if (questionIndex === 5){
            return options4;
        }else {
            return options2;
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
            totalScore_eating,
            responses,
        };
    
        try {
            const response = await fetch('https://health-tool.jorim.net/backend-gmail/anxiety-mail.php', {
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

    const openWhatsapp=()=>{
        const url = 'https://wa.me/9150036318?text=Your%20Pregnancy%20Test%20Result!';
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    const openFacebook=()=>{
        const url='https://www.facebook.com/';
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <>
            <section className="pt-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Eating Disorder Test</div>
                            </div>
                            <div className="para-desc text-justify">
                                <p>Eating Disorder Test Tool is one of the most widely used tools for identifying signs and symptoms of eating disorders. The test provides questions to help you initially assess signs and symptoms of anorexia, bulimia, and binge eating disorders.</p>
                            </div>
                            <h6>Answer All the Question, then get the score</h6>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        {questions.map((question, questionIndex) => (
                            <div key={questionIndex} className="question-box p-3 mb-3 anxiety-question">
                                <h5 className="question-title">{questionIndex + 1}. {question}</h5>
                                <div className="toggle-options row">
                                    {getOptionsForQuestion(questionIndex).map((option, optionIndex) => (
                                        <div key={optionIndex} className="col-6">
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
                                    ))}
                                </div>
                                {/* Display selected value for this question */}
                                {responses[questionIndex] !== null && (
                                    <div className="selected-value-box mt-2">
                                        {responses[questionIndex]}
                                    </div>
                                )}
                            </div>
                        ))}
                        {/* Display the total box only after all questions are answered */}
                        {allQuestionsAnswered && (
                            <>
                            <div id="completion-status" className={`completion-status text-center mt-3 total-box`}>
                                <h5 style={{ color: "#16192c" }}>Total Score: {totalScore_eating}</h5>
                                <p style={{ marginBottom: "0.5rem" }}><strong>
                                    {totalScore_eating >= 13 ? "High Risk" : "Minimal Risk"
                                    }</strong></p>
                                <p>
                                    {totalScore_eating >= 13
                                        ? "Your results indicate that you are at high risk of having an eating disorder, we suggest you speak with a doctor."
                                        : "Your results indicate that you are at low risk of having an eating disorder. If you notice that your symptoms aren't improving, you may want to bring them up with a doctor."
                                    }
                                </p>
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
                                        <button onClick={openWhatsapp}>
                                            <FaWhatsapp size={24} />
                                        </button>
                                    </li>
                                    <li style={{ margin: '0 10px' }}>
                                        <button onClick={openFacebook}>
                                            <FaFacebook size={24} />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            </>
                            
                        )}
                    </div>
                </div >
            </div >

            {/* Add the styles directly */}
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

                .selected {
                    font-weight: bold;
                    color: #0d8c60;
                }
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
            `}</style>
            {/* Modal for the Gmail form */}
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
}

export default EatingDisorder;
