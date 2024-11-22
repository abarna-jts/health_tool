import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaCheckCircle } from "react-icons/fa";

function Pilgrims() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedCount, setSelectedCount] = useState(0);
    const [showChronicOptions, setShowChronicOptions] = useState(false);
    const [lastQuestionAnswered, setLastQuestionAnswered] = useState(false); // Track if the last question is answered
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    // Counts for each section
    const question1Count = 2; // Each checkbox in question 1 is worth 5%
    const question2Count = 15; // Each checkbox in question 2 is worth 4%
    const chronicOptionsCount = 4; // Each checkbox in question 3 (Yes selected) is worth 5%

    // Ref for completion-status section
    const completionStatusRef = useRef(null);

    // Calculating the maximum possible completion based on the "No" selection for question 3
    const maxCompletionPercentageNoChronic = (question1Count * 5) + (question2Count * 4);
    const maxCompletionPercentageWithChronic = maxCompletionPercentageNoChronic + (chronicOptionsCount * 5);

    const handleCheckboxChange = (e, weight) => {
        // Update the count based on whether the checkbox is checked or unchecked
        setSelectedCount(prev => e.target.checked ? prev + weight : prev - weight);
    };

    const handleRadioChange = (e) => {
        // Show additional options when "Yes" is selected in question 3
        if (e.target.value === "yes") {
            setShowChronicOptions(true);
            setLastQuestionAnswered(true); // Mark last question as answered
        } else {
            // Reset state and hide options if "No" is selected
            setShowChronicOptions(false);
            // Adjust the selectedCount by removing chronic disease options
            setSelectedCount((prevCount) => Math.min(prevCount, maxCompletionPercentageNoChronic));
            setLastQuestionAnswered(true); // Mark last question as answered
        }
    };

    // Calculate completion percentage and cap it at 100%
    const completionPercentage = Math.min(
        Math.round((selectedCount / (showChronicOptions ? maxCompletionPercentageWithChronic : maxCompletionPercentageNoChronic)) * 100),
        100
    );

    // Scroll to completion-status when the score is updated
    useEffect(() => {
        if (completionPercentage > 0) {
            completionStatusRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [completionPercentage]);


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const closeSuccessModal = () => setIsSuccessModalOpen(false);

    const sendResultsToEmail = async (e) => {
        e.preventDefault();
        if (!email || !name) {
            alert("Please provide your name and email.");
            return;
        }
        
        const data = { 
            email, name, 
            completionPercentage,
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
                        <div className="col-md-8">
                            <div className="title text-center">
                                <div className="nd-title">Checklist Of Pilgrims’ Health Preparations</div>
                            </div>
                             <div className="para-desc text-justify">
                                    <p>Here is a checklist of the basic health needs of pilgrims. Make sure of your level of readiness by selecting the points that you have completed and check them all ahead of your journey to ensure a healthy and safe journey.</p>
                                </div>
                                <h6>Answer All the Question, then get the score</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container pilgrims-sec">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-8">
                            {/* Question 1 */}
                            <div className="first-question 1">
                                <h5>1. Are You in Good Health?</h5>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        onChange={(e) => handleCheckboxChange(e, 5)}
                                    /> The necessary vaccinations have been taken.
                                </label><br />
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        onChange={(e) => handleCheckboxChange(e, 5)}
                                    /> I started exercising before the Hajj season to perform the rituals without excessive stress or fatigue.
                                </label><br />
                            </div>

                            {/* Question 2 */}
                            <div className="first-question 2">
                                <h5>2. Is your bag Packed?</h5>
                                {[ 
                                    "Light-colored sun umbrella",
                                    "Masks",
                                    "You have prepared enough clothes to change regularly",
                                    "Light-colored, loose-fitting, cotton clothes",
                                    "Suitable shoes for walking",
                                    "A water bottle",
                                    "Hand sanitizer",
                                    "Towel",
                                    "Shaving tools",
                                    "Soap",
                                    "Toothpaste",
                                    "Toothbrush",
                                    "Moisturizing creams or ointments",
                                    "A medical kit (wound cleaning, Antipyretic drugs, Painkillers)",
                                    "Plastic bags for dirty clothes"
                                ].map((item, index) => (
                                    <>
                                        <label key={index}>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                onChange={(e) => handleCheckboxChange(e, 4)}
                                            /> {item}
                                        </label><br />
                                    </>
                                    
                                ))}
                            </div>

                            {/* Question 3 */}
                            <div className="first-question 3">
                                <h5>3. Are you a chronic disease patient (diabetes, high blood pressure, epilepsy, etc.)?(Yes/No)</h5>
                                <label>
                                    <input
                                        type="radio"
                                        className="radio-button"
                                        name="chronic-disease"
                                        value="yes"
                                        onChange={handleRadioChange}
                                    /> Yes
                                </label><br />
                                <label>
                                    <input
                                        type="radio"
                                        className="radio-button"
                                        name="chronic-disease"
                                        value="no"
                                        onChange={handleRadioChange}
                                    /> No
                                </label><br />

                                {/* Additional options if "Yes" is selected */}
                                {showChronicOptions && (
                                    <div className="chronic-options mt-2">
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                onChange={(e) => handleCheckboxChange(e, 4)}
                                            /> I consulted a doctor before traveling to ensure that my health condition was stable.
                                        </label><br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                onChange={(e) => handleCheckboxChange(e, 4)}
                                            /> An adequate supply of my medications is prepared.
                                        </label><br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                onChange={(e) => handleCheckboxChange(e, 4)}
                                            /> A medicine kit has been prepared to protect medicine from damage while performing the rituals.
                                        </label><br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                onChange={(e) => handleCheckboxChange(e, 4)}
                                            /> I have a smart bracelet that identifies my health status.
                                        </label><br />
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                onChange={(e) => handleCheckboxChange(e, 4)}
                                            /> I have a detailed report on my health condition, medications, and doses.
                                        </label><br />
                                    </div>
                                )}
                            </div>

                            {/* Completion Status */}
                            <div ref={completionStatusRef} className="completion-status text-justify mt-3 total-box mb-3">
                                <div className="percentage mt-4">
                                    <h5>Ready By: {completionPercentage}%</h5>
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
                            </div>

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

export default Pilgrims;
