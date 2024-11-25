import React, { useState } from "react";
import Modal from "react-modal";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaCheckCircle } from "react-icons/fa";

function Pregnancy() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [result, setResult] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const calculateDates = () => {
        if (!day || !month || !year) {
            alert("Please select the full date of your last menstrual period.");
            return;
        }
         // Convert month name to numeric index
         const monthIndex = months.indexOf(month);
    
         if (monthIndex === -1) {
             alert("Invalid month selected.");
             return;
         }

        const lmp = new Date(year, monthIndex - 1, day); // month - 1 because month is zero-indexed in JavaScript Date

        // Calculate Ovulation Date
        const ovulationDate = new Date(lmp);
        ovulationDate.setDate(ovulationDate.getDate() + 14);

        // Calculate Fertile Window
        const fertileStartDate = new Date(ovulationDate);
        fertileStartDate.setDate(fertileStartDate.getDate() - 3);
        const fertileEndDate = new Date(ovulationDate);
        fertileEndDate.setDate(fertileEndDate.getDate() + 1);

        // Calculate Due Date (280 days or 40 weeks after LMP)
        const dueDate = new Date(lmp);
        dueDate.setDate(dueDate.getDate() + 280);

        setResult({
            ovulationDate: formatDate(ovulationDate),
            fertileStartDate: formatDate(fertileStartDate),
            fertileEndDate: formatDate(fertileEndDate),
            dueDate: formatDate(dueDate),
        });
    };

    const sendResultsToEmail = async (e) => {
        e.preventDefault();
        console.log("send button");
    
        // Ensure result is defined before proceeding
        if (!result) {
            alert("No calculated data available to send.");
            return;
        }
    
        const { ovulationDate, fertileStartDate, fertileEndDate } = result;
    
        try {
            const response = await fetch('https://health-tool.jorim.net/backend-gmail/pregnancy-mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    name,
                    ovulationDate,
                    fertileStartDate,
                    fertileEndDate,
                    day,
                    month,
                    year,
                }),
            });
    
            const result = await response.text(); // or `response.json()` if your PHP script returns JSON
            // console.log(result);
    
            
            if (result.trim() === 'success') {
                setIsModalOpen(false);
                setIsSuccessModalOpen(true);
            } else {
                alert(`Error sending email: ${result}`);
            }
    
            closeModal(); // Close the modal
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
    

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const closeSuccessModal = () => setIsSuccessModalOpen(false);

    // Arrays for day, month, and year options
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const years = Array.from({ length: 3 }, (_, i) => new Date().getFullYear() - i);

    return (
        <>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Best Time To Get Pregnant</div>
                            </div>
                            <div className="para-desc text-justify">
                                <p><strong>Overview:</strong> If you want to get pregnant, you must start to take care of your health to ensure easy pregnancy and free of complications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-7 ">
                            <div className="pregnancy-time">
                                <div>
                                    <label htmlFor="lmp">Date of Last Menstrual Period*</label><br />
                                    <div className="row my-3">
                                        <div className="col-md-3">
                                            <select value={day} className="date-label" name="day" onChange={(e) => setDay(e.target.value)} required>
                                                <option value="">Day</option>
                                                {days.map(d => <option key={d} value={d}>{d}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <select value={month} className="date-label" name="month" onChange={(e) => setMonth(e.target.value)} required>
                                                <option value="">Month</option>
                                                {months.map(m => <option key={m} value={m}>{m}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <select value={year} className="date-label" name="year" onChange={(e) => setYear(e.target.value)} required>
                                                <option value="">Year</option>
                                                {years.map(y => <option key={y} value={y}>{y}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="btn-center">
                                        <button onClick={calculateDates} className="btn btn-primary">
                                            Calculate
                                        </button>
                                    </div>
                                    

                                    
                                </div>
                                
                            </div>
                            {result && (
                                        <>
                                        <div className="row pregnancy-row">
                                        <div className="col-md-4">
                                                <div className="result-inner-box text-center" style={{ marginTop: '20px', fontWeight: 'bold' }}>
                                                    <div className="result-header">
                                                        <p>Ovulation Day </p>
                                                    </div>
                                                    <div className="score-box">
                                                        <p>{result.ovulationDate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-4">
                                                <div className="result-inner-box text-center" style={{ marginTop: '20px', fontWeight: 'bold' }}>
                                                    <div className="result-header">
                                                        <p>Fertile Window </p>
                                                    </div>
                                                    <div className="score-box">
                                                        <p>{result.fertileStartDate} to {result.fertileEndDate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-4">
                                                <div className="result-inner-box text-center" style={{ marginTop: '20px', fontWeight: 'bold' }}>
                                                    <div className="result-header">
                                                        <p>Pregnancy Due Date</p>
                                                    </div>
                                                    <div className="score-box">
                                                        <p>{result.dueDate}</p>
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

export default Pregnancy;
