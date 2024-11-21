import React, { useState, useRef } from "react";
import v_1 from '../assets/img/v-1.png';
import v_2 from '../assets/img/v-2.png';
import v_3 from '../assets/img/v-3.png';
import v_4 from '../assets/img/v-4.png';
import v_5 from '../assets/img/v-5.png';
import v_6 from '../assets/img/v-6.png';
import v_7 from '../assets/img/v-7.png';
import v_8 from '../assets/img/v-8.png';
import v_9 from '../assets/img/v-9.png';
import v_10 from '../assets/img/v-10.png';
import v_11 from '../assets/img/v-11.png';
import Modal from "react-modal";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


function VisualTest() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // Set initial state for the visual acuity value and message
    const [visualAcuity, setVisualAcuity] = useState('6/60');
    const [message, setMessage] = useState('Visit the doctor for a more accurate test');
    const [activeButton, setActiveButton] = useState(null);  // To track the active button
    const [selectedImage, setSelectedImage] = useState(null);
    const totalScoreRef = useRef(null);

    // Function to update the visual acuity value and message, and set active button background color
    const handleButtonClick = (value, msg, buttonIndex, imgSrc) => {
        setVisualAcuity(value);
        setMessage(msg);  // Set the message dynamically based on the button clicked
        setActiveButton(buttonIndex); // Set the clicked button index as active
        setSelectedImage(imgSrc);
        sendImageToBackend(imgSrc);
        totalScoreRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const sendImageToBackend = async (imgSrc) => {
        try {
            const formData = new FormData();
            formData.append('selectedImage', imgSrc);  // Send the image path or data
    
            const response = await fetch('http://localhost/React%20js/backend-gmail/anxiety-mail.php', {
                method: 'POST',
                body: formData,
            });
    
            if (response.ok) {
                console.log("Image sent successfully");
            } else {
                console.error("Error sending image");
            }
        } catch (error) {
            console.error("Error in sending image to backend:", error);
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
            visualAcuity,
            selectedImage,
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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="title text-center text-nowrap visual-title">
                            <div className="nd-title">Visual Acuity Test</div>
                        </div>
                        <div className="col-md-7 first_section mb-3">
                            <div className="nd-title">Visual Acuity Test</div>
                            <div className="nomo-para mt-2">
                                <h5>Important</h5>
                                <p className="text-justify">This calculator is intended as a convenient screener for visual acuity...</p>
                                <h5>Instructions</h5>
                                <ul>
                                    <li>Ensure proper room lighting and set phone brightness to 100%.</li>
                                    <li>Hold the screen 4 feet (1.2 m) from the patient (approximately the end of a standard hospital bed if patient is sitting upright).</li>
                                    <li>Test each eye independently. The patient should completely cover the opposite eye.</li>
                                    <li>See Pearls/Pitfalls for further instructions.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-7 first_section mt-2">
                            <ul>
                                <li><h6>To assess binocular and monocular visual acuity in cooperative patients.</h6></li>
                                <li><h6>Select lowest line that patient can read correctly.</h6></li>
                            </ul>
                            {/* Buttons with images that update the visual acuity value */}
                            <button
                                className={`my-2 v-bt ${activeButton === 1 ? 'active' : ''}`} // Change class if the button is active
                                onClick={() => handleButtonClick('6/60', 'Visit the doctor for more accurate test', 1, v_1)}
                            >
                                <img src={v_1} alt="" className="img-fluid p-3" />
                            </button>
                            <button
                                className={`my-2 v-bt ${activeButton === 2 ? 'active' : ''}`} // Change class if the button is active
                                onClick={() => handleButtonClick('6/30', 'Visit the doctor for more accurate test', 2, v_2)}
                            >
                                <img src={v_2} alt="" className="img-fluid p-3" />
                            </button>
                            <button
                                className={`my-2 v-bt ${activeButton === 3 ? 'active' : ''}`} // Change class if the button is active
                                onClick={() => handleButtonClick('6/21', 'Visit the doctor for more accurate test', 3, v_3)}
                            >
                                <img src={v_3} alt="" className="img-fluid p-3" />
                            </button>
                            <button
                                className={`my-2 v-bt ${activeButton === 4 ? 'active' : ''}`} // Change class if the button is active
                                onClick={() => handleButtonClick('6/15', 'Visit the doctor for more accurate test', 4 ,v_4)}
                            >
                                <img src={v_4} alt="" className="img-fluid p-3" />
                            </button>
                            <button
                                className={`my-2 v-bt ${activeButton === 5 ? 'active' : ''}`} // Change class if the button is active
                                onClick={() => handleButtonClick('6/12', 'Visit the doctor for more accurate test', 5, v_5)}
                            >
                                <img src={v_5} alt="" className="img-fluid p-3" />
                            </button>
                            <button
                                className={`my-2 v-bt ${activeButton === 6 ? 'active' : ''}`} // Change class if the button is active
                                onClick={() => handleButtonClick('6/9', 'Visit the doctor for more accurate test', 6, v_6)}
                            >
                                <img src={v_6} alt="" className="img-fluid p-3" />
                            </button>
                            <button
                                className={`my-2 v-bt ${activeButton === 7 ? 'active' : ''}`} // Change class if the button is active
                                onClick={() => handleButtonClick('6/7.5', 'Continue to take care of the health of your eyes', 7, v_7)}
                            >
                                <img src={v_7} alt="" className="img-fluid p-3" />
                            </button>
                            <button
                                className={`my-2 v-bt ${activeButton === 8 ? 'active' : ''}`} // Change class if the button is active
                                onClick={() => handleButtonClick('6/6', 'Continue to take care of the health of your eyes', 8, v_8)}
                            >
                                <img src={v_8} alt="" className="img-fluid p-3" />
                            </button>
                            <button
                                className={`my-2 v-bt ${activeButton === 9 ? 'active' : ''}`} // Change class if the button is active
                                onClick={() => handleButtonClick('6/6', 'Continue to take care of the health of your eyes', 9, v_9)}
                            >
                                <img src={v_9} alt="" className="img-fluid p-3" />
                            </button>
                            <button
                                className={`my-2 v-bt ${activeButton === 10 ? 'active' : ''}`} // Change class if the button is active
                                onClick={() => handleButtonClick('6/6', 'Continue to take care of the health of your eyes', 10, v_10)}
                            >
                                <img src={v_10} alt="" className="img-fluid p-3" />
                            </button>
                            <button
                                className={`my-2 v-bt ${activeButton === 11 ? 'active' : ''}`} // Change class if the button is active
                                onClick={() => handleButtonClick('6/6', 'Continue to take care of the health of your eyes', 11, v_11)}
                            >
                                <img src={v_11} alt="" className="img-fluid p-3" />
                            </button>
                        </div>

                        {/* Total score section */}
                        <div ref={totalScoreRef} className="col-md-7 first_section text-center mt-2">
                            <h3>{visualAcuity}</h3>
                            <h6>Visual acuity</h6>
                            <p style={{ color: '#0d8c60' }}>{message}</p>
                            {selectedImage && (
                                <div>
                                <img src={selectedImage} alt="Selected Visual" className="img-fluid mt-2" style={{ maxHeight: "200px" }} />
                                </div>
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

                        <div className="col-md-7 first_section mt-2">
                            <h5>Advice</h5>
                            <ul>
                                <li>Visual acuity worse than 20/25 should be evaluated by a licensed eye professional to determine whether corrective lenses or other treatments may be necessary.</li>
                                <li>Visual acuity is not a measure of a patient’s prescription. This is a separate value that needs to be measured in an office setting.</li>
                            </ul>
                            <h5>Management</h5>
                            <ul>
                                <li>Any patient with sudden changes in visual acuity from baseline or new obscurations in vision requires immediate referral to an ophthalmologist for dilated fundus examination and further testing.</li>
                            </ul>
                        </div>
                    </div>
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
    );
}

export default VisualTest;
