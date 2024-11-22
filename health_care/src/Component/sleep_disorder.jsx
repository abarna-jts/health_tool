import React, {useState, useEffect} from "react";
import Modal from "react-modal";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaCheckCircle } from "react-icons/fa";

function SleepDisorder(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const questions = [
        "Thinking about a typical night in the last month, how long does it take you to fall asleep?", // 1
        "Thinking about a typical night in the last month, if you wake up, how long are you awake for in total?", // 2
        "Thinking about the last month, how many nights a week do you have a problem with your sleep?", // 3
        "Thinking about a typical night in the last month, how would you rate your sleep quality?", // 4
        "Thinking about the past month, to what extent has poor sleep affected your mood, energy, or relationships?", // 5
        "Thinking about the past month, to what extent has poor sleep affected your concentration, productivity, or ability to stay awake?", // 6
        "Thinking of a typical night in the past month, how badly sleep generally caused you problems?", // 7
        "How long have you had a problem with your sleep?" // 8
       
    ];

    const options1 = [
        { label: "0-15 minutes", value: 4, emoji: "😁" },
        { label: "16-30 minutes", value: 3, emoji: "😊"  },
        { label: "31-45 minutes", value: 2, emoji: "🙂" },
        { label: "46-60 minutes", value: 1, emoji: "😟" },
        { label: "More than 61 minutes", value: 0 , emoji: "😢"}
    ];

    const options2 = [
        { label: "Not at all", value: 4, emoji: "😁"  },
        { label: "A little", value: 3, emoji: "😊" },
        { label: "Somewhat", value: 2 , emoji: "🙂"},
        { label: "Much", value: 1, emoji: "😟" },
        { label: "Very much", value: 0, emoji: "😢" },
    ];

    const options3 = [
        { label: "0-1 night", value: 4, emoji: "😁" },
        { label: "2 nights", value: 3, emoji: "😊" },
        { label: "3 nights", value: 2 , emoji: "🙂"},
        { label: "4 nights", value: 1, emoji: "😟"},
        { label: "5-7 nights", value:0, emoji: "😢"}
    ];

    const options4 = [
        { label: "Very Good", value: 4, emoji: "😁" },
        { label: "Good", value: 3, emoji: "😊" },
        { label: "Average", value: 2, emoji: "🙂" },
        { label: "Poor", value: 1, emoji: "😟"},
        { label: "Very Poor", value:0, emoji: "😢"}
    ];

    const options5 = [
        { label: "I don't have a problem (or I've had a problem for less than one month)", value: 4, emoji: "😁" },
        { label: "1-2 months", value: 3, emoji: "😊" },
        { label: "3-6 months", value: 2, emoji: "🙂" },
        { label: "7-12 months", value: 1, emoji: "😟"},
        { label: "Longer than a year", value:0, emoji: "😢"}
    ];

    const [responses, setResponses] = useState(Array(questions.length).fill(null));
    const totalScore_sleep = responses.reduce((acc, curr) => acc + (curr ?? 0), 0);

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
    // Select options based on question index
    const getOptionsForQuestion = (questionIndex) => {
        if (questionIndex == 0) {
            return options1; // First two questions use options2
        } else if (questionIndex == 1) {
            return options1; // Remaining questions use options1
        }
        else if (questionIndex == 2) {
            return options3; // Remaining questions use options1
        }
        else if (questionIndex == 3) {
            return options4; // Remaining questions use options1
        }
        else if (questionIndex == 7) {
            return options5; // Remaining questions use options1
        }
       
        else {
            return options2;
        }
    };

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
            totalScore_sleep,
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
                            <div className="title text-center ">
                                <div className="nd-title">Find out if you have a Sleep disorder?</div>
                            </div>
                            
                                <div className="para-desc text-justify">
                                    <p style={{marginBottom:"0.5rem"}}><strong>​​​​​​​​​​​​​​​​​​​Disclaimer: This is not a diagnostic test, please check with your doctor to get diagnosed. </strong><br /></p>
                                    <ul style={{listStyleType:"none", paddingLeft:"0rem"}}>
                                        <li style={{marginBottom:"0.2rem"}}>
                                            Most people experience problems with sleep in their life.
                                        </li>
                                        <li style={{marginBottom:"0.2rem"}}>
                                            The causes can include physical conditions, psychological conditions or a combination of both.
                                        </li>
                                        <li style={{marginBottom:"0.2rem"}}>
                                            This short test will give you a 'sleep score' plus practical tips and advice for improving your sleep.
                                        </li>
                                    </ul>
                                
                                    
                                </div>
                                <h6>Answer All the Question, then get the score</h6>
                        </div>
                        
                        
                    </div>
                </div>
            </section>

            <section>
            <div className="container pb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        {questions.map((question, questionIndex) => (
                            <div key={questionIndex} className="question-box p-3 mb-3 anxiety-question">
                                <h5 className="question-title">{questionIndex + 1}. {question}</h5>
                                <div className="toggle-options row">
                                    {getOptionsForQuestion(questionIndex).map((option, optionIndex) => (
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
                                {responses[questionIndex] !== null && (
                                    <div className="selected-value-box mt-2">
                                        {responses[questionIndex]}
                                    </div>
                                )}
                            </div>
                        ))}
                        {/* Display the total box only after all questions are answered */}
                        {allQuestionsAnswered && (
                            <>
                                <div id="completion-status" className={`completion-status text-justify mt-3 total-box`}>
                                <h5 style={{ color: "#16192c" }}>Total Score: {totalScore_sleep}</h5>
                                <ul>
                                    {totalScore_sleep >= 25 && (
                                        <>
                                            <p>Your sleep score is excellent and indicates that you're not struggling with insomnia 
                                                at the moment. Episodes of insomnia are common, in fact, it's estimated that many of
                                                 us will struggle with it at some time in our lives. Stress and anxiety are common triggers.
                                                  There are various good habits we should all get into to maximise our chances of a 
                                                  good night's sleep. For example:</p>
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
                                    {totalScore_sleep >= 9 && totalScore_sleep < 25 && (
                                        <>
                                            <p>Your sleep score is OK but some of the answers you have given indicate that 
                                                you're experiencing a few symptoms of insomnia. Episodes of insomnia are common,
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
                                    {totalScore_sleep >= 1 && totalScore_sleep < 9 && (
                                        <>
                                            <p>Your sleep score is excellent and indicates that you're not struggling with 
                                                insomnia at the moment. Episodes of insomnia are common, in fact, it's estimated 
                                                that many of us will struggle with it at some time in our lives. Stress and anxiety
                                                 are common triggers. There are various good habits we should all get into to 
                                                 maximise our chances of a good night's sleep. For example:</p>
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
                                    {totalScore_sleep === 0 && (
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
                </div >
            </div >
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
    );
}

export default SleepDisorder