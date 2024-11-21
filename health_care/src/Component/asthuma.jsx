import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import asthuma_icon from '../assets/img/small-boy-2.png';
import boy_icon from '../assets/img/002.png';
import { useState, useEffect } from "react";
import emoji_5 from '../assets/img/emoji-1.png'
import emoji_4 from '../assets/img/emoji-2.png'
import emoji_3 from '../assets/img/emoji-3.png'
import emoji_2 from '../assets/img/emoji-4.png'
import emoji_1 from '../assets/img/emoji-5.png'
import rate_emoji_1 from '../assets/img/rate_emoji3.png'
import rate_emoji_2 from '../assets/img/rate_emoji2.png'
import rate_emoji_3 from '../assets/img/rate_emoji1.png'
import Modal from "react-modal";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Asthuma() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [visibleBox, setVisibleBox] = useState(null);
    const [heading, setHeading] = useState("");
    const [selectedCard, setSelectedCard] = useState(null);

    // Define click handler functions for each button
    const handleButton1Click = () => {
        setVisibleBox("box1");
        setHeading("How to take the Childhood Asthma Control Test?");
        setSelectedCard("card1");
    };

    const handleButton2Click = () => {
        setVisibleBox("box2");
        setHeading("Asthma Control Test (ACT) for children over 12 years and adults");
        setSelectedCard("card2");

    };

    const [score1, setScore1] = useState(null);
    const [score2, setScore2] = useState(null);
    const [score3, setScore3] = useState(null);
    const [score4, setScore4] = useState(null);
    const [score5, setScore5] = useState(null);
    const [score6, setScore6] = useState(null);
    const [score7, setScore7] = useState(null);

    const calculateTotal = () => {
        return score1 + score2 + score3 + score4 + score5 + score6 + score7;
    };

    const allQuestionsAnswered = [score1, score2, score3, score4, score5, score6, score7].every(score => score !== null);
    const totalScore_asthuma = calculateTotal();

    // Function to determine the color based on score range
    const getScoreColor = () => {
        if (totalScore_asthuma >= 20 && totalScore_asthuma <= 27) return "green";
        if (totalScore_asthuma >= 13 && totalScore_asthuma <= 19) return "#e58c01";
        if (totalScore_asthuma >= 0 && totalScore_asthuma <= 12) return "red";
        return "black";
    };

    // Function to determine the emoji image path based on score range
    const getScoreEmoji = () => {
        if (totalScore_asthuma >= 20 && totalScore_asthuma <= 27) return rate_emoji_1;
        if (totalScore_asthuma >= 13 && totalScore_asthuma <= 19) return rate_emoji_2;
        if (totalScore_asthuma >= 0 && totalScore_asthuma <= 12) return rate_emoji_3;
        return "";
    };

    const getStatus = () => {
        if (totalScore_asthuma >= 20 && totalScore_asthuma <= 27) return "Great, Well-controlled.";
        if (totalScore_asthuma >= 13 && totalScore_asthuma <= 19) return "Partly controlled.";
        if (totalScore_asthuma >= 0 && totalScore_asthuma <= 12) return "Poorly controlled.";
        return "";
    };

    const getSuggestion = () => {
        if (totalScore_asthuma >= 20 && totalScore_asthuma <= 27) return "Continue with your current approach for managing your health.";
        if (totalScore_asthuma >= 13 && totalScore_asthuma <= 19) return "Try to see your doctor soon for a review.";
        if (totalScore_asthuma >= 0 && totalScore_asthuma <= 12) return "See your doctor as soon as possible for further evaluation.";
        return "";
    };


    // box2 function for calculate total score
    const Box2Content = () => {
        // State for storing selected answers for each question
        const [score1, setScore1] = useState(null);
        const [score2, setScore2] = useState(null);
        const [score3, setScore3] = useState(null);
        const [score4, setScore4] = useState(null);
        const [score5, setScore5] = useState(null);

        // Function to calculate total score
        const calculateTotal = () => {
            return score1 + score2 + score3 + score4 + score5;
        };

        const totalScore_asthuma = calculateTotal();

        // Function to determine the color based on score range
        const getScoreColor = () => {
            if (totalScore_asthuma >= 20 && totalScore_asthuma <= 25) return "green";
            if (totalScore_asthuma >= 16 && totalScore_asthuma <= 19) return "#e58c01";
            if (totalScore_asthuma >= 0 && totalScore_asthuma <= 15) return "red";
            return "black";
        };

        // Function to determine the emoji based on score range
        const getScoreEmoji = () => {
            if (totalScore_asthuma >= 20 && totalScore_asthuma <= 25) return rate_emoji_1;
            if (totalScore_asthuma >= 16 && totalScore_asthuma <= 19) return rate_emoji_2;
            if (totalScore_asthuma >= 0 && totalScore_asthuma <= 15) return rate_emoji_3;
            return "";
        };

        // Function to determine the status based on score range
        const getStatus = () => {
            if (totalScore_asthuma >= 20 && totalScore_asthuma <= 25) return "Great, Well-controlled.";
            if (totalScore_asthuma >= 16 && totalScore_asthuma <= 19) return "Partly controlled.";
            if (totalScore_asthuma >= 0 && totalScore_asthuma <= 15) return "Poorly controlled.";
            return "";
        };

        // Function to provide suggestions based on the score range
        const getSuggestion = () => {
            if (totalScore_asthuma >= 20 && totalScore_asthuma <= 25) return "Continue with your current approach for managing your health.";
            if (totalScore_asthuma >= 16 && totalScore_asthuma <= 19) return "Try to see your doctor soon for a review.";
            if (totalScore_asthuma >= 0 && totalScore_asthuma <= 15) return "See your doctor as soon as possible for further evaluation.";
            return "";
        };
    }

    const allQuestionsAnswered1 = 
    score1 !== null &&
    score2 !== null &&
    score3 !== null &&
    score4 !== null &&
    score5 !== null;

useEffect(() => {
    if (allQuestionsAnswered) {
        const completionElement = document.getElementById("completion-status");
        if (completionElement) {
            completionElement.scrollIntoView({ behavior: "smooth" });
        }
    }
}, [allQuestionsAnswered]);

    useEffect(() => {
        if (allQuestionsAnswered1) {
            const completionElement = document.getElementById("completion-status");
            if (completionElement) {
                completionElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [allQuestionsAnswered1]);

    

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
            totalScore_asthuma,
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
    return (
        <>
            {/* <div className="container-fluid nav-hamburger">
                <div className="container">
                    <div className="nav-title">
                        <h1>Health Tools</h1>
                    </div>
                </div>  
            </div>   */}
            <div className="section desc_sec">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Asthma Control Test</div>
                            </div>
                            <div className="para-desc text-center">
                                <p>The Asthma Control Test Tool is a measure of patients' asthma control that helps facilitate access to medical help.</p>
                            </div>
                        </div>
                    </div>



                    <div className="cards-list">
                        <div 
                            className={`card ${selectedCard === "card1" ? "clicked" : ""}`}
                            onClick={handleButton1Click}
                            style={{ backgroundColor: selectedCard === "card1" ? "rgb(107 173 147 / 30%)" : "transparent" }}
                        >
                            <div className="card_image">
                                <img src={asthuma_icon} className="img-fluid" alt="Asthma Icon" />
                            </div>
                            <div className="card_title">
                                <p>Asthma Control Test</p>
                            </div>
                        </div>

                        <div 
                            className={`card ${selectedCard === "card2" ? "clicked" : ""}`}
                            onClick={handleButton2Click}
                            style={{ backgroundColor: selectedCard === "card2" ? "rgb(107 173 147 / 30%)" : "transparent" }}
                        >
                            <div className="card_image">
                                <img src={boy_icon} className="img-fluid" alt="Boy Icon" />
                            </div>
                            <div className="card_title">
                                <p>Asthma Control Test</p>
                            </div>
                        </div>
                    </div>

                    {visibleBox === "box1" && (
                        <>
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="box-class first_section">
                                        <div className="heading">
                                            <h3>{heading}</h3>
                                        </div>
                                        <ul>
                                            <li>Let your child respond to the first four questions (1 to 4). If your child needs help reading
                                                or understanding the question, you may help, but let your child select the response</li>
                                            <li>Complete the remaining three questions (5 to 7) on your own and without letting your child’s
                                                response influence your answers. There are no right or wrong answers.</li>
                                        </ul>
                                    </div>
                                    <div className="question_section first_section">
                                        <div className="heading">
                                            <h4>Have your child complete these questions.</h4>
                                        </div>
                                        <div className="question 1">
                                            <p>1- How is your asthma today?</p>
                                            <div className="question_card">
                                                <div className="emoji-card" style={{ backgroundColor: score1 === 3 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button 
                                                        onClick={() => setScore1(3)}
                                                    >
                                                        <img src={emoji_5} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(3)</h6>
                                                            <p>Very Good</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card" style={{ backgroundColor: score1 === 2 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button 
                                                        onClick={() => setScore1(2)} 
                                                    >
                                                        <img src={emoji_4} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(2)</h6>
                                                            <p>Good</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card" style={{ backgroundColor: score1 === 1 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button 
                                                        onClick={() => setScore1(1)}
                                                    >
                                                        <img src={emoji_3} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(1)</h6>
                                                            <p>Bad</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card" style={{ backgroundColor: score1 === 0 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button 
                                                        onClick={() => setScore1(0)}
                                                    >
                                                        <img src={emoji_1} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(0)</h6>
                                                            <p>Very Bad</p>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="question 2">
                                            <p>2- How much of a problem is your asthma when you run, exercise or play sports?</p>
                                            <div className="question_card">
                                                <div className="emoji-card" style={{ backgroundColor: score2 === 3 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore2(3)}>
                                                        <img src={emoji_5} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(3)</h6>
                                                            <p style={{ minHeight: 48 }}>It’s not a problem</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card" style={{ backgroundColor: score2 === 2 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore2(2)}>
                                                        <img src={emoji_4} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(2)</h6>
                                                            <p>It’s a little problem but it’s okay</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card" style={{ backgroundColor: score2 === 1 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore2(1)}>
                                                        <img src={emoji_3} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(1)</h6>
                                                            <p>It’s a problem and I don’t like it</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card" style={{ backgroundColor: score2 === 0 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore2(0)}>
                                                        <img src={emoji_1} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(0)</h6>
                                                            <p>It’s a big problem, I can’t do what I want to do</p>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="question 3">
                                            <p>3- Do you cough because of your asthma?</p>
                                            <div className="question_card">
                                                <div className="emoji-card" style={{ backgroundColor: score3 === 3 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore3(3)}>
                                                        <img src={emoji_5} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(3)</h6>
                                                            <p>No, none of the time</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card" style={{ backgroundColor: score3 === 2 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore3(2)}>
                                                        <img src={emoji_4} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(2)</h6>
                                                            <p>Yes, some of the time</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card" style={{ backgroundColor: score3 === 1 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore3(1)}>
                                                        <img src={emoji_3} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(1)</h6>
                                                            <p>Yes, most of the time</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card" style={{ backgroundColor: score3 === 0 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore3(0)}>
                                                        <img src={emoji_1} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(0)</h6>
                                                            <p>Yes, all of the time</p>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="question 4">
                                            <p>4- Do you wake up during the night because of your asthma?</p>
                                            <div className="question_card">
                                                <div className="emoji-card" style={{ backgroundColor: score4 === 3 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore4(3)}>
                                                        <img src={emoji_5} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(3)</h6>
                                                            <p>No, none of the time</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card" style={{ backgroundColor: score4 === 2 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore4(2)}>
                                                        <img src={emoji_4} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(2)</h6>
                                                            <p>Yes, some of the time</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card" style={{ backgroundColor: score4 === 1 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore4(1)}>
                                                        <img src={emoji_3} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(1)</h6>
                                                            <p>Yes, most of the time</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card" style={{ backgroundColor: score4 === 0 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore4(0)}>
                                                        <img src={emoji_1} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(0)</h6>
                                                            <p>Yes, all of the time</p>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="question_section2 first_section">
                                        <div className="heading">
                                            <h4>Parent: Please complete the following questions on your own</h4>
                                        </div>
                                        <div className="question 5">
                                            <p>5- During the last 4 weeks, how many days did your child have any daytime asthma symptoms?</p>
                                            <div className="question_card">
                                                <div className="emoji-card2" style={{ backgroundColor: score5 === 5 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore5(5)}>
                                                        <img src={emoji_5} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(5)</h6>
                                                            <p>Not at all</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score5 === 4 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore5(4)}>
                                                        <img src={emoji_4} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(4)</h6>
                                                            <p>1-3 days</p>
                                                        </div>
                                                    </button>
                                                </div>
                                                <div className="emoji-card2" style={{ backgroundColor: score5 === 3 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore5(3)}>
                                                        <img src={emoji_3} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(3)</h6>
                                                            <p>4-10 days</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score5 === 2 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore5(2)}>
                                                        <img src={emoji_3} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(2)</h6>
                                                            <p>11-18 days</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score5 === 1 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore5(1)}>
                                                        <img src={emoji_1} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(1)</h6>
                                                            <p>19-24 days</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score5 === 0 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore5(0)}>
                                                        <img src={emoji_1} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(0)</h6>
                                                            <p>Everyday</p>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="question 6">
                                            <p>6- During the last 4 weeks, how many days did your child wheeze during the day because of asthma?</p>
                                            <div className="question_card">
                                                <div className="emoji-card2" style={{ backgroundColor: score6 === 5 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore6(5)}>
                                                        <img src={emoji_5} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(5)</h6>
                                                            <p>Not at all</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score6 === 4 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore6(4)}>
                                                        <img src={emoji_4} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(4)</h6>
                                                            <p>1-3 days</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score6 === 3 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore6(3)}>
                                                        <img src={emoji_3} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(3)</h6>
                                                            <p>4-10 days</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score6 === 2 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore6(2)}>
                                                        <img src={emoji_3} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(2)</h6>
                                                            <p>11-18 days</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score6 === 1 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore6(1)}>
                                                        <img src={emoji_1} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(1)</h6>
                                                            <p>19-24 days</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score6 === 0 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore6(0)}>
                                                        <img src={emoji_1} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(0)</h6>
                                                            <p>Everyday</p>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="question 7">
                                            <p>7- During the last 4 weeks, how many days did your child wake up during the night because of asthma?</p>
                                            <div className="question_card">
                                                <div className="emoji-card2" style={{ backgroundColor: score7 === 5 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore7(5)}>
                                                        <img src={emoji_5} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(5)</h6>
                                                            <p>Not at all</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score7 === 4 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore7(4)}>
                                                        <img src={emoji_4} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(4)</h6>
                                                            <p>1-3 days</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score7 === 3 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore7(3)}>
                                                        <img src={emoji_3} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(3)</h6>
                                                            <p>4-10 days</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score7 === 2 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore7(2)}>
                                                        <img src={emoji_3} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(2)</h6>
                                                            <p>11-18 days</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score7 === 1 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore7(1)}>
                                                        <img src={emoji_1} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(1)</h6>
                                                            <p>19-24 days</p>
                                                        </div>
                                                    </button>
                                                </div>

                                                <div className="emoji-card2" style={{ backgroundColor: score7 === 0 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                                    <button onClick={() => setScore7(0)}>
                                                        <img src={emoji_1} alt="" />
                                                        <div className="mark-card">
                                                            <h6>(0)</h6>
                                                            <p>Everyday</p>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {allQuestionsAnswered && (
                                            <>
                                            <div id="completion-status" className="row " style={{ justifyContent: "center", color: getScoreColor() }}>
                                                <div className="col-md-5">
                                                    <div className="total-box">
                                                        <img src={getScoreEmoji()} alt="Rating Emoji" style={{ width: "150px", height: "auto" }} />
                                                        <h1>{totalScore_asthuma}</h1>
                                                        <h5>{getStatus()}</h5>
                                                        <p className="text-center">{getSuggestion()}</p>
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


                        </>

                    )}

                    {visibleBox === "box2" && (
                        <>
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                            <div className="box-class box-class2 first_section">
                                <div className="heading">
                                    <h3>{heading}</h3>
                                </div>
                                <ul>
                                    <li>Answer each question carefully and remember there are no right or wrong answers</li>
                                </ul>
                            </div>
                            <div className="question_section2 first_section">
                                {/* box-2 question-1 */}
                                <div className="question 1">
                                    <p>1- In the past 4 weeks, how much of the time did your asthma keep you from getting as much done at work, school or at home?</p>
                                    <div className="question_card">
                                        <div className="emoji-card2" style={{ backgroundColor: score1 === 5 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore1(5)}>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>None of the time</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score1 === 4 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore1(4)}>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>A little of the time</p>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="emoji-card2" style={{ backgroundColor: score1 === 3 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore1(3)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>Some of the time</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score1 === 2 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore1(2)}>
                                                <img src={emoji_2} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>Most of the time</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score1 === 1 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore1(1)}>
                                                <img src={emoji_1} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>All the time</p>
                                                </div>
                                            </button>
                                        </div>


                                    </div>
                                </div>
                                {/* box-2 question-1 */}

                                <div className="question 2">
                                    <p>2- During the past 4 weeks, how often have you had shortness of breath?</p>
                                    <div className="question_card">
                                        <div className="emoji-card2" style={{ backgroundColor: score2 === 5 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore2(5)}>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>Not at all</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score2 === 4 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore2(4)}>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>Once or twice a week</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score2 === 3 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore2(3)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>to 6 times a week</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score2 === 2 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore2(2)}>
                                                <img src={emoji_2} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>Once a day</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score2 === 1 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore2(1)}>
                                                <img src={emoji_1} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>More than once a day</p>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                <div className="question 3">
                                    <p>3- During the past 4 weeks, how often did your asthma symptoms (wheezing, coughing, shortness of breath, chest tightness or pain)
                                        wake you up at night or earlier than usual in the morning?</p>
                                    <div className="question_card">
                                        <div className="emoji-card2" style={{ backgroundColor: score3 === 5 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore3(5)}>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>Not at all</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score3 === 4 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore3(4)}>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>Once or twice a week</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score3 === 3 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore3(3)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>Once a week</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score3 === 2 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore3(2)}>
                                                <img src={emoji_2} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>2 or 3 nights a week</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score3 === 1 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore3(1)}>
                                                <img src={emoji_1} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>4 or more nights a week</p>
                                                </div>
                                            </button>
                                        </div>

                                    </div>
                                </div>

                                <div className="question 4">
                                    <p>4- During the past 4 weeks, how often have you used your rescue inhaler or nebulizer medication (such as albuterol)?</p>
                                    <div className="question_card">
                                        <div className="emoji-card2" style={{ backgroundColor: score4 === 5 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore4(5)}>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>Not at all</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score4 === 4 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore4(4)}>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>Once a week or less</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score4 === 3 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore4(3)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>2 or 3 times per week</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score4 === 2 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore4(2)}>
                                                <img src={emoji_2} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>1 or 2 times per day</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score4 === 1 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore4(1)}>
                                                <img src={emoji_1} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>3 or more times per day</p>
                                                </div>
                                            </button>
                                        </div>

                                    </div>
                                </div>

                                <div className="question 5">
                                    <p>5- How would you rate your asthma control during the past 4 weeks?</p>
                                    <div className="question_card">
                                        <div className="emoji-card2" style={{ backgroundColor: score5 === 5 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore5(5)}>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>Completely controlled</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score5 === 4 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore5(4)}>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>Well controlled</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score5 === 3 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore5(3)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>Somewhat controlled</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score5 === 2 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore5(2)}>
                                                <img src={emoji_2} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>Poorly controlled</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2" style={{ backgroundColor: score5 === 1 ? 'rgb(107 173 147 / 30%)' : 'transparent' }}>
                                            <button onClick={() => setScore5(1)}>
                                                <img src={emoji_1} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>Not controlled at all</p>
                                                </div>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                {allQuestionsAnswered1 &&(
                                    <>
                                    <div id="completion-status" className="row" style={{ justifyContent: "center", color: getScoreColor() }}>
                                        <div className="col-md-5">
                                            <div className="total-box">
                                                <img src={getScoreEmoji()} alt="Rating Emoji" style={{ width: "150px", height: "auto" }} />
                                                <h1>{totalScore_asthuma}</h1>
                                                <h5>{getStatus()}</h5>
                                                <p className="text-center">{getSuggestion()}</p>
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
                            
                            

                        </>

                    )}
                </div>
            </div>
            
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
    )
}

export default Asthuma