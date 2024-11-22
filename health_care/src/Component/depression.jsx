import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaCheckCircle } from "react-icons/fa";

function Depression() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const questions = [
        "Little interest or pleasure in doing things",
        "Feeling down, depressed, or hopeless",
        "Trouble falling or staying asleep, or sleeping too much",
        "Feeling tired or having little energy",
        "Poor appetite or overeating",
        "Feeling bad about yourself - or that you are a failure or have let yourself or your family down.",
        "Trouble concentrating on things, such as reading the newspaper or watching television",
        "Moving or speaking so slowly that other people could have noticed or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
        "Thoughts that you would be better off dead, or of hurting yourself"
    ];

    const options = [
        { label: "Not at all", value: 0, emoji: "😢" },
        { label: "A little", value: 1, emoji: "😟" },
        { label: "Somewhat", value: 2, emoji: "🙂" },
        { label: "Much", value: 3, emoji: "😊" }
    ];

    const [responses, setResponses] = useState(Array(questions.length).fill(null));
    const totalScore_depression = responses.reduce((acc, curr) => acc + (curr ?? 0), 0);

    const handleOptionChange = (questionIndex, value) => {
        const updatedResponses = [...responses];
        updatedResponses[questionIndex] = value;
        setResponses(updatedResponses);
    };

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


    const sendResultsToEmail = async (e) => {
        e.preventDefault();
        if (!email || !name) {
            alert("Please provide your name and email.");
            return;
        }

        const data = { 
            email, name, 
            totalScore_depression,
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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const closeSuccessModal = () => setIsSuccessModalOpen(false);

    return (
        <>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center">
                                <div className="nd-title">Find out if you have depression</div>
                            </div>
                            <div className="para-desc text-justify">
                                <p><strong>Description:</strong> Disclaimer: this is not a diagnostic test, please check with your doctor to get diagnosed</p>
                                <p><strong>Intro: </strong>In the last 2 weeks how often you've experienced the following: ​</p>
                            </div>
                            <h6>Answer All the Question, then get the score</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-7">
                            {questions.map((question, questionIndex) => (
                                <div key={questionIndex} className="question-box p-3 mb-3 anxiety-question d_q">
                                    <h5 className="question-title">{questionIndex + 1}. {question}</h5>
                                    <div className="toggle-options row">
                                        {options.map((option, optionIndex) => (
                                            <div key={optionIndex} className="col-6 depression-label">
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
                                    {/* Display the selected value outside the question box with a border */}
                                    {responses[questionIndex] !== null && (
                                        <div className="selected-value-box">
                                            {responses[questionIndex]}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {/* Display the total box only after all questions are answered */}
                            {allQuestionsAnswered && (
                                <>
                                    <div id="completion-status" className={`completion-status text-center mt-3 total-box`}>
                                        <h5 style={{ color: "#16192c" }}>Ready by: {totalScore_depression}</h5>
                                        <p>
                                            {totalScore_depression >= 20
                                                ? "Your results indicate that you may be experiencing symptoms of severe depression. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life. Visit your doctor for proper diagnosis."
                                                : totalScore_depression >= 15
                                                    ? "Your results indicate that you may be experiencing symptoms of moderately severe depression. Based on your answers, living with these symptoms is causing difficulty managing relationships and even the tasks of everyday life. Visit your doctor for proper diagnosis."
                                                    : totalScore_depression >= 10
                                                        ? "Your results indicate that you may be experiencing some symptoms of moderate depression. While your symptoms are not likely having a major impact on your life, it is important to monitor them. Visit your doctor for proper diagnosis."
                                                        : totalScore_depression >= 5
                                                            ? "Your results indicate that you may be experiencing some symptoms of mild depression. While your symptoms are not likely having a major impact on your life, it is important to monitor them. Visit your doctor for proper diagnosis."
                                                            : "Your results indicate that you have none, or very few symptoms of depression."
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
                    </div>
                </div>
            </section>
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

            {/* Success Modal */}
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

export default Depression;
