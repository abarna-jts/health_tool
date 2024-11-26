import React, { useState } from "react";
import { FaClock, FaArrowsAltH } from "react-icons/fa";
import Modal from "react-modal";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaCheckCircle } from "react-icons/fa";

function Heart_rate() {

    const [age, setAge] = useState("");
    const [MaxHeartRate, SetHeartRate] = useState(null);
    const [ModerateExeFrom, SetModerateExeFrom] = useState(null);
    const [ModerateExeTo, SetModerateExeTo] = useState(null);
    const [VigorousExeFrom, SetVigorousExeFrom] = useState(null);
    const [VigorousExeTo, SetVigorousExeTo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);


    const calculateHeartRate = (e) => {
        e.preventDefault();

        const MaxHeartRate = 220 - age;
        SetHeartRate(MaxHeartRate);

        const ModerateExerciseFrom = Math.round(50 / 100 * MaxHeartRate);
        const ModerateExerciseTo = Math.round(70 / 100 * MaxHeartRate);
        SetModerateExeFrom(ModerateExerciseFrom);
        SetModerateExeTo(ModerateExerciseTo);

        const VigorousExeFrom = Math.round(70 / 100 * MaxHeartRate);
        const VigorousExeTo = Math.round(85 / 100 * MaxHeartRate);
        SetVigorousExeFrom(VigorousExeFrom);
        SetVigorousExeTo(VigorousExeTo);
    }

    const sendResultsToEmail = async (e) => {
        e.preventDefault();
    
        // Validate if name and email are provided
        if (!email || !name) {
            alert("Please provide your name and email.");
            return;
        }
    
        
    
        // Prepare the data to send in the email
        const data = {
            email, 
            name, 
            age,
            MaxHeartRate,
            ModerateExeFrom,
            ModerateExeTo,
            VigorousExeFrom,
            VigorousExeTo,
            
            
        };
    
        try {
            const response = await fetch('http://localhost/React%20js/backend-gmail/heart_rate.php', {
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

    const openWhatsApp = () => {
        const url = 'https://wa.me/919150036318?text=Your%20Pregnancy%20Test%20Result!';
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const openFacebook = () => {
        const url = 'https://www.facebook.com/';
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const closeSuccessModal = () => setIsSuccessModalOpen(false);

    return (
        <>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Target heart rate</div>
                            </div>
                            <div className="para-desc text-justify">
                                <p><strong>Overview:</strong> Enter your age and click ‘calculate’ to find out your maximum heart rate and your Target Heart Rate range for different levels of exercise intensity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="heart_rate">
                                <div className="box-calculation justify-content-center">
                                    <div className="col-md-10">
                                        <form className="text-center">

                                            <label>Enter Your Age</label>
                                            <div className="form-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter your Age"
                                                    name="age"
                                                    onChange={(e) => setAge(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-primary" onClick={calculateHeartRate}>Calculate IBW</button>
                                        </form>


                                    </div>

                                </div>
                                {MaxHeartRate && (
                                    <>
                                        <div className="container">
                                            <div className="row">
                                                <div className="result-box mt-3 mb-3">
                                                    <div className="col-md-12">

                                                        <>
                                                            <div className="col-md-12">

                                                                <div className="result-inner-box text-center">
                                                                    <div className="result-header">
                                                                        <p>Maximum Heart Rate</p>
                                                                    </div>
                                                                    <div className="score-box">
                                                                        <h4>{MaxHeartRate}</h4>
                                                                        <div className="score">
                                                                            <FaClock></FaClock>
                                                                            <p>Beats per Minutes</p>
                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                            <div className="col-md-12 exercise-box">
                                                                <div className="col-md-5 my-3">
                                                                    <div className="result-inner-box text-center">
                                                                        <div className="result-header">
                                                                            <p>Moderate Exercise</p>
                                                                        </div>
                                                                        <div className="score-box">
                                                                            <h4>{ModerateExeFrom} <FaArrowsAltH className="arrow" /> {ModerateExeTo}</h4>
                                                                            <div className="score">
                                                                                <FaClock></FaClock>
                                                                                <p>Beats per Minutes</p>
                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                                <div className="col-md-5 my-3">
                                                                    <div className="result-inner-box text-center">
                                                                        <div className="result-header">
                                                                            <p>Vigorous Exercise</p>
                                                                        </div>
                                                                        <div className="score-box">
                                                                            <h4>{VigorousExeFrom} <FaArrowsAltH className="arrow" /> {VigorousExeTo}</h4>
                                                                            <div className="score">
                                                                                <FaClock></FaClock>
                                                                                <p>Beats per Minutes</p>
                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>



                                                        </>


                                                    </div>
                                                </div>

                                            </div>

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
                                                    <button onClick={openWhatsApp} target="_blank" rel="noopener noreferrer">
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


                                )}


                                {/* {ModerateExeFrom && (
                                    
                                )} */}

                                {/* {VigorousExeFrom && (
                                   
                                )} */}

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
    )
}

export default Heart_rate