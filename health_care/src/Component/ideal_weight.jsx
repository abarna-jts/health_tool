import React, { useState } from "react";
import Modal from "react-modal";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function IdealBodyWeight() {
    const [height, setHeight] = useState('');
    const [ibw, setIbw] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
    const [email, setEmail] = useState('');
    const [name, setName] = useState(''); // Email state for the form input
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    // Function to handle opening the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const closeSuccessModal = () => setIsSuccessModalOpen(false);

    // Function to handle the email sending logic
    const sendResultsToEmail = async (e) => {
        e.preventDefault();
        if (!email || !name) {
            alert("Please provide your name and email.");
            return;
        }
        
        const data = { 
            email, name, 
            height,
            ibw,
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
    const calculateIBW = (e) => {
        e.preventDefault();

        // Check if the height seems to be in inches (typically less than 100 cm)
        if (height < 100) {
            alert("Please enter your height in centimeters, not inches.");
            return;
        }

        // Convert height to meters
        const heightInMeters = height / 100;
        // Calculate IBW with target BMI of 22
        const idealWeight = 22 * (heightInMeters ** 2);
        // Set IBW to state, rounded to 2 decimal places
        setIbw(idealWeight.toFixed(2));
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
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center">
                                <div className="nd-title">Ideal Body Weight (IBW) Calculator</div>
                            </div>
                            <div className="para-desc text-justify">
                                <p><strong>Overview:</strong> The ideal weight calculator computes ideal body weight (kg) based on height (cm).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="box-calculation" style={{justifyContent:"center"}}>
                                <div className="col-md-8">
                                <form onSubmit={calculateIBW}>
                                    <div className="col-md-12 text-center">
                                        <label>Height (in cm)</label>
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter your height in cm"
                                                value={height}
                                                name="height"
                                                onChange={(e) => setHeight(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="btn-center">
                                        <button type="submit" className="btn btn-primary">Calculate IBW</button>
                                    </div>
                                    
                                </form>
                                </div>
                                
                            </div>

                            {ibw && (
                                <div className="result mt-4 text-center">
                                    <h4>Your Ideal Body Weight: {ibw} kg</h4>
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
                            )}
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

export default IdealBodyWeight;
