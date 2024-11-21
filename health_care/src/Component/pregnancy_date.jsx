import React, { useState } from "react";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Modal from "react-modal";

function Pregnancy() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const calculateDueDate = () => {
        if (!day || !month || !year) {
            alert("Please select the full date of your last menstrual period.");
            return;
        }

        // Convert the entered day, month, and year into a Date object
        const lmp = new Date(year, month - 1, day); // month - 1 because months are zero-indexed

        // Calculate Due Date (280 days or 40 weeks after LMP)
        const calculatedDueDate = new Date(lmp);
        calculatedDueDate.setDate(calculatedDueDate.getDate() + 280);

        // Format the result and set the due date
        setDueDate(formatDate(calculatedDueDate));
    };

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const sendResultsToEmail = async (e) => {
        e.preventDefault();
        console.log("send button");

        // Ensure result is defined before proceeding
        if (!dueDate) {
            alert("No calculated data available to send.");
            return;
        }

        try {
            const response = await fetch('https://health-tool.jorim.net/backend-gmail/pregnancy-mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    name,
                    day,
                    month,
                    year,
                    dueDate,
                }),
            });

            const result = await response.text(); // or `response.json()` if your PHP script returns JSON
            console.log(result);

            if (result === 'success') {
                alert('Email sent successfully!');
            } else {
                alert('Error sending email.');
            }

            closeModal(); // Close the modal
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the email.');
        }
    };

    // Function to open modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Arrays for day, month, and year options
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

    return (
        <>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Pregnancy Due Date Calculator</div>
                            </div>
                            <p className="text-justify"><strong>Overview:</strong>It is very important to know the due date for a pregnant woman in order to be ready for birth psychologically and physically. To calculate your due date, submit your last period date then click on Calculate button.​</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-7">
                            <div className="pregnancy-time">
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
                                
                                <button onClick={calculateDueDate} className="btn btn-primary">
                                    Calculate Due Date
                                </button>

                                {dueDate && (
                                    <>
                                    <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                                        <p>Pregnancy Due Date: {dueDate}</p>
                                    </div>
                                    <div className="social-container" style={{ marginTop: '20px' }}>
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

export default Pregnancy;
