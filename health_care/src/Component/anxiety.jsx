import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Anxiety() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const questions = [
        "Feeling nervous, anxious, or on edge",
        "Not being able to stop or control worrying?",
        "Worrying too much about different things?",
        "Trouble relaxing?",
        "Being so restless that it's hard to sit still?",
        "Becoming easily annoyed or Irritable?",
        "Feeling afraid as if something awful might happen?"
    ];

    const options = [
        { label: "Nearly every day", value: 3, emoji: "😊" },
        { label: "Over half the days", value: 2, emoji: "🙂" },
        { label: "Several days", value: 1, emoji: "😟" },
        { label: "Not at all sure", value: 0, emoji: "😢" }
    ];

    const [responses, setResponses] = useState(Array(questions.length).fill(null));
    const totalScore = responses.reduce((acc, curr) => acc + (curr ?? 0), 0);

    const handleOptionChange = (questionIndex, value) => {
        const updatedResponses = [...responses];
        updatedResponses[questionIndex] = value;
        setResponses(updatedResponses);
    };

    // Check if all questions have been answered
    const allQuestionsAnswered = responses.every(response => response !== null);
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
            totalScore,
            responses,
        };
    
        try {
            const response = await fetch('https://health-tool.jorim.net/backend-gmail/anxiety-mail.php', {
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
    // useEffect(() => {
    //     if (allQuestionsAnswered && ref.current) {
    //         ref.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }, [allQuestionsAnswered]);
    useEffect(() => {
        if (allQuestionsAnswered) {
            const completionElement = document.getElementById("completion-status");
            if (completionElement) {
                completionElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [allQuestionsAnswered]);
    return (
        <>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Do you suffer from anxiety?</div>
                            </div>

                            <div className="para-desc text-justify">
                                <p><strong>Disclaimer:</strong> This is not a diagnostic test. Please check with your doctor to get diagnosed. Over the last 2 weeks, how often have you been bothered by the following problems?</p>
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
                                <div key={questionIndex} className="question-box p-3 mb-3 anxiety-question aq">
                                    <h5 className="question-title">
                                        {questionIndex + 1}. {question}
                                    </h5>
                                    <div className="toggle-options row">
                                        {options.map((option, optionIndex) => (
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
                                        <h5 style={{ color: "#16192c" }}>Ready by: {totalScore}</h5>
                                        <p>
                                            {totalScore >= 13
                                                ? "You have severe anxiety. Please check with your doctor to get the help you need."
                                                : totalScore >= 10
                                                    ? "You have moderate anxiety. Please check with your doctor to get the help you need."
                                                    : totalScore >= 4
                                                        ? "You have mild anxiety. Please check with your doctor to get the help you need."
                                                        : "You don’t have anxiety."
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
            </section>

            {/* Add styles */}
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
        </>
    );
}

export default Anxiety;
