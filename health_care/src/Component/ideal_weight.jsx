import React, { useState } from "react";
import Modal from "react-modal";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

function IdealBodyWeight() {
    const [height, setHeight] = useState('');
    const [ibw, setIbw] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
    const [email, setEmail] = useState('');
    const [name, setName] = useState(''); // Email state for the form input

    // Function to handle opening the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

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
            const response = await fetch('http://localhost/React%20js/backend-gmail/weight-mail.php', {
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
                            <div className="box-calculation">
                                <form onSubmit={calculateIBW}>
                                    <div className="col-md-12">
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
                                    <button type="submit" className="btn btn-primary">Calculate IBW</button>
                                </form>
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
                            )}
                        </div>
                    </div>
                </div>
            </section>

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

export default IdealBodyWeight;
