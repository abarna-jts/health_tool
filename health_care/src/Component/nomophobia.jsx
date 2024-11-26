import React, {useState, useEffect} from "react";
import Modal from "react-modal";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaCheckCircle } from "react-icons/fa";

function Nomophobia(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const questions = [
        "I feel stressed without constant access to information through my mobile.",
        "I feel overwhelmed if I don't search for information on mobile as often as I want to",
        "I worry if I am not aware of the news (eg events, weather, etc.) through mobile",
        "I feel stressed if I don't use the mobile phone and/or its apps.",
        "I am very worried when my phone battery is dead.",
        "I get really stressed out if I run out of credit or my monthly cellular data package ends.",
        "I am worried if I don't see a data signal or a Wi-Fi connection, and I constantly check my phone to see if I have a Wi-Fi signal.",
        "I feel afraid of being stranded somewhere if I can't use my mobile.",
        "I feel confused if I don't check my phone for a while.",
        "I feel worried that I could not communicate immediately with my family and/or friends if I did not have my mobile phone with me.",
        "I worry that my family and/or friends won't be able to reach me, if I don't have my cell phone.",
        "I feel stressed that I will not be able to receive text messages and calls if I do not have my mobile phone.",
        "I worry if I don't have my cell phone, because I can't keep in touch with my family and/or friends.",
        "I get nervous if I don't have my cell phone, because I can't tell if someone has tried to call me.",
        "I feel worried that my constant contact with my family and friends will be interrupted, if I do not have my cell phone with me.",
        "I worry that I will not be able to connect to my online identity if I do not have my mobile phone with me.",
        "I feel confused because I won't be able to browse social media if I don't have a mobile phone with me.",
        "I would be nervous because I can't check the notifications about the connection and internet update if I don't have my mobile phone with me.",
        "I am worried that I would not be able to browse my incoming emails, if I did not have my mobile phone with me."
    ];

    const options = [
        { label: "1", value: 1, emoji:"😔"},
        { label: "2", value: 2, emoji:"😟" },
        { label: "3", value: 3, emoji:"😐" },
        { label: "4", value: 4, emoji:"🙂" },
        { label: "5", value: 5, emoji:"😊" },
        { label: "6", value: 6, emoji:"😄" },
        { label: "7", value: 7, emoji:"😁" }
    ];

    const [responses, setResponses] = useState(Array(questions.length).fill(null));
    const totalScore_nomophobia = responses.reduce((acc, curr) => acc + (curr ?? 0), 0);

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
            totalScore_nomophobia,
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

    return(
        <>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Nomophobia</div>
                            </div>
                            
                                <div className="para-desc text-center">
                                    <h6>Nomophobia Questionnaire (NMP-Q)</h6>
                                    <h6>The term Nomophobia refers to the fear of living without using the mobile phone.</h6>
                                    
                                </div>
                                <div className="nomo-para mt-4">
                                    <h6><strong>Test Overview</strong></h6>
                                    <p>Technology has become a necessity in our daily life that cannot be completely dispensed with,
                                        and in order not to negatively affect public health, the concept of digital balance was 
                                        created. It does not represent a complete ban on the use of technology, but rather its 
                                        conscious and moderate use in accordance with our basic needs without affecting our 
                                        health and quality of life.​</p>
                                    <p>And because the most used device is the mobile phone, this test assesses your relationship 
                                        therewith, and whether you have a fear of not being able to use the mobile phone or living without using it.</p>
                                    <p><strong>CAUTION:</strong> This test is not an accurate diagnostic tool, but an indicator of your dependency on mobile. Please indicate how much you agree or disagree with each statement in relation to your smartphone. </p>
                                </div>
                                <h6>Answer All the Question, then get the score</h6>
                        </div>
                        
                        
                    </div>
                </div>
            </section>

            <section className="nomophobia-section">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-7">
                            {questions.map((question, questionIndex) => (
                                <div key={questionIndex} className="question-box p-3 mb-3 anxiety-question n_q">
                                <h5 className="question-title">{questionIndex + 1}. {question}</h5>
                                <div className="toggle-options d-flex flex-wrap">
                                    {options.map((option, optionIndex) => (
                                        <div key={optionIndex} className="option-box d-flex align-items-center mb-2 me-3">
                                            <label
                                                className={`radio-label d-flex align-items-center ${responses[questionIndex] === option.value ? "selected" : ""}`}
                                            >
                                                <span className="emoji me-2">
                                                    {responses[questionIndex] === option.value ? option.emoji : "🔘"}
                                                </span>
                                                <span className="label-text me-2">{option.label}</span>
                                                <input
                                                    type="radio"
                                                    name={`question-${questionIndex}`}
                                                    className="toggle-input visually-hidden"
                                                    value={option.value}
                                                    onChange={() => handleOptionChange(questionIndex, option.value)}
                                                    checked={responses[questionIndex] === option.value}
                                                />
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                {/* {responses[questionIndex] !== null && (
                                    <div className="selected-value-box mt-2 p-2 border rounded">
                                        {responses[questionIndex]}
                                    </div>
                                )} */}
                            </div>
                            ))}
                            {/* Display the total box only after all questions are answered */}
                            {allQuestionsAnswered && (
                            <>
                                <div id="completion-status" className={`completion-status text-justify mt-3 total-box result-inner-box`}>
                                <div className="result-header text-center">
                                    <h5 style={{ color: "#fff" }}>Total Score: {totalScore_nomophobia}</h5>
                                </div>
                               
                                <ul style={{padding:"5px"}}>
                                    {totalScore_nomophobia >= 100 && (
                                        <>
                                            <h6>Severe ,You have a pathological fear of living without using the mobile phone (see your doctor)</h6>
                                            <p>Your relationship with the mobile phone affects you negatively and is unhealthy, which calls for a visit to the doctor as soon as possible.</p>
                                            <p><strong>REMEMBER :</strong>Digital balance is the conscious and moderate use of technology in line with our basic needs, without affecting our health and quality of life.</p>
                                            <p><strong>CAUTION :</strong>This test is not an accurate diagnostic tool, but an indicator of your dependency on mobile.</p>
                                        </>
                                    )}
                                    {totalScore_nomophobia >= 60 && totalScore_nomophobia < 100 && (
                                        <>
                                            <h6>Moderate, The onset of fear of living without the mobile phone (mobile phone addict)</h6>
                                            <p>Your relationship with mobile is unbalanced! Do other activities that do not require the use of mobile phones, such as: walking, practicing hobbies, meditation, communicating with family and friends, going out of the house with less use of mobile phones, and having new experiences.</p>
                                            <p><strong>REMEMBER :</strong>Digital balance is the conscious and moderate use of technology in line with our basic needs, without affecting our health and quality of life.We recommend that you see a doctor</p>
                                            <p><strong>CAUTION :</strong>This test is not an accurate diagnostic tool, but an indicator of your dependency on mobile.</p>
                                        </>
                                    )}
                                    {totalScore_nomophobia >= 0 && totalScore_nomophobia < 60 && (
                                        <>
                                            <h6>Mild, You have a little fear (check your accounts)</h6>
                                            <p>Your relationship with the mobile is starting to lose balance!Pay more attention to the time you spend on mobile phone, and practice other activities that do not require the use of mobile phones such as: walking, practicing hobbies, meditation, communicating with family and friends, going out of the house with less use of mobile phones, and taking on new experiences.</p>
                                            <p><strong>REMEMBER :</strong>Digital balance is the conscious and moderate use of technology in line with our basic needs, without affecting our health and quality of life.</p>
                                            <p><strong>CAUTION :</strong>This test is not an accurate diagnostic tool, but an indicator of your dependency on mobile.</p>
                                        </>
                                    )}
                                    {totalScore_nomophobia === 0 && (
                                        <>
                                            <p>Your sleep score is very poor and the answers you have given indicate that you're
                                                 experiencing a number of symptoms of insomnia. Episodes of insomnia are common,
                                                  in fact, it's estimated that many of us will struggle with it at some time in 
                                                  our lives. There are various things you can do to help you get to sleep. For example:</p>
                                                  <ul>
                                                    <li>Avoid caffeine later in the day</li>
                                                    <li>Avoid heavy meals late at night</li>
                                                    <li>Stick to regular times to go to bed and get up</li>
                                                    <li>Use thick curtains, blinds or an eye mask to stop you being woken up by light</li>
                                                    <li>Try earplugs to stop any noise disturbing you</li>
                                                    <li>Try taking a warm bath an hour before you go to bed</li>
                                                    <li>Try listening to calming music or reading a book</li>
                                                    <li>Avoid watching TV or using mobile devices in the bedroom</li>
                                                 </ul>
                                        </>
                                    )}
                                </ul>
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

export default Nomophobia