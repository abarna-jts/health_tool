import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import asthuma_icon from '../assets/img/small-boy-2.png';
import boy_icon from '../assets/img/002.png';
import emoji_very_good from '../assets/img/emoji-1.png';  // Add path to your emoji images
import emoji_good from '../assets/img/emoji-2.png';
import emoji_bad from '../assets/img/emoji-3.png';
import emoji_very_bad from '../assets/img/emoji-4.png';

function AsthmaTest() {
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

    const questions1 = [
        "How is your asthma today?", // 1
        "How much of a problem is your asthma when you run, exercise or play sports?", // 2
        "Do you cough because of your asthma?", // 3
        "Do you wake up during the night because of your asthma?", // 4
    ];

    const questions2 = [
        "During the last 4 weeks, how many days did your child have any daytime asthma symptoms?", // 5
        "During the last 4 weeks, how many days did your child wheeze during the day because of asthma?", // 6
        "During the last 4 weeks, how many days did your child wake up during the night because of asthma?", // 7
    ];

    const options1 = [
        { label: "No, none of the time", value: 3, emoji: emoji_very_good },
        { label: "Yes, some of the time", value: 2, emoji: emoji_good },
        { label: "Yes, most of the time", value: 1, emoji: emoji_bad },
        { label: "Yes, all of the time", value: 0, emoji: emoji_very_bad },
    ];

    const options2 = [
        { label: "Very Good", value: 1, emoji: emoji_very_good },
        { label: "Good", value: 0, emoji: emoji_good },
        { label: "Bad", value: 0, emoji: emoji_bad },
        { label: "Very Bad", value: 0, emoji: emoji_very_bad },
    ];

    const options3 = [
        { label: "It’s not a problem", value: 1, emoji: emoji_very_good },
        { label: "It’s a little problem but it’s okay", value: 0, emoji: emoji_good },
        { label: "It’s a problem and I don’t like it", value: 0.0, emoji: emoji_bad },
        { label: "It’s a big problem, I can’t do what I want to do", value: 0.0, emoji: emoji_very_bad },
    ];

    const options4 = [
        { label: "Not at all", value: 5, emoji: emoji_very_good },
        { label: "1-3 days", value: 4, emoji: emoji_good },
        { label: "4-10 days", value: 3, emoji: emoji_bad },
        { label: "11-18 days", value: 2, emoji: emoji_bad },
        { label: "19-24 days", value: 1, emoji: emoji_very_bad },
        { label: "Everyday", value: 0, emoji: emoji_very_bad },
    ];

    return (
        <>
            <section className="pt-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Asthma Control Test</div>
                            </div>
                            <div className="para-desc text-justify">
                                <p>
                                    The Asthma Control Test Tool is a measure of patients' asthma
                                    control that helps facilitate access to medical help.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="cards-list d-flex justify-content-center gap-3">
                {/* Male Card */}
                <div
                    className={`card ${selectedCard === "card1" ? "clicked" : ""}`}
                    onClick={handleButton1Click}
                    style={{
                        backgroundColor:
                            selectedCard === "card1" ? "rgba(107, 173, 147, 0.3)" : "transparent",
                    }}
                >
                    <div className="card_image">
                        <img src={asthuma_icon} alt="Male" className="img-fluid" />
                    </div>
                    <div className="card_title">
                        <p>Asthma Control Test</p>
                    </div>
                </div>

                {/* Female Card */}
                <div
                    className={`card ${selectedCard === "card2" ? "clicked" : ""}`}
                    onClick={handleButton2Click}
                    style={{
                        backgroundColor:
                            selectedCard === "card2" ? "rgba(107, 173, 147, 0.3)" : "transparent",
                    }}
                >
                    <div className="card_image">
                        <img src={boy_icon} alt="Female" className="img-fluid" />
                    </div>
                    <div className="card_title">
                        <p>Asthma Control Test</p>
                    </div>
                </div>
            </div>

            {/* Conditional Content */}
            <div className="mt-4 text-center">

                {visibleBox === "box1" &&
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="box-class first_section">
                                    <div className="heading text-start">
                                        <h3>{heading}</h3>
                                    </div>
                                    <ul>
                                        <li>Let your child respond to the first four questions (1 to 4). If your child needs help reading
                                            or understanding the question, you may help, but let your child select the response</li>
                                        <li>Complete the remaining three questions (5 to 7) on your own and without letting your child’s
                                            response influence your answers. There are no right or wrong answers.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="box-class first_section">
                                    <div className="heading text-start">
                                        <h4>Have your child complete these questions.</h4>
                                        <ol>
                                            {questions1.map((question, index) => {
                                                // Define the options for each question based on the index
                                                let selectedOptions;
                                                if (index === 0) {
                                                    selectedOptions = options2; // For 1st question, use options2
                                                } else if (index === 1) {
                                                    selectedOptions = options3; // For 2nd question, use options3
                                                } else {
                                                    selectedOptions = options1; // For 3rd and 4th questions, use options1
                                                }

                                                return (
                                                    <li key={index}>
                                                        {question}
                                                        <div className="options question_card">
                                                            {selectedOptions.map((option, i) => (
                                                                <div className="emoji-card " key={i}>
                                                                    <button>
                                                                        <img src={option.emoji} alt={option.label} />
                                                                        <div className="mark-card">
                                                                            {option.label}
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ol>
                                    </div>
                                </div>
                                <div className="box-class first_section">
                                    <div className="heading text-start">
                                        <h4>Parent: Please complete the following questions on your own</h4>
                                        <ol>
                                            {questions2.map((question, index) => (
                                                <li key={index}>
                                                    {question}
                                                    <div className="options question_card">
                                                        {options4.map((option, i) => (
                                                            <div className="emoji-card2" key={i}>
                                                                <button key={i}>
                                                                    <img src={option.emoji} alt={option.label} />
                                                                    <div className="mark-card">
                                                                        {option.label}
                                                                    </div>
                                                                </button>
                                                            </div>

                                                        ))}
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }


                {visibleBox === "box2" &&
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="box-class first_section">
                                    <div className="heading text-start">
                                        <h3>{heading}</h3>
                                    </div>
                                    <ul>
                                        <li>Let your child respond to the first four questions (1 to 4). If your child needs help reading
                                            or understanding the question, you may help, but let your child select the response</li>
                                        <li>Complete the remaining three questions (5 to 7) on your own and without letting your child’s
                                            response influence your answers. There are no right or wrong answers.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="box-class first_section">
                                    <div className="heading text-start">
                                        <h4>Have your child complete these questions.</h4>
                                        <ol>
                                            {questions1.map((question, index) => (
                                                <li key={index}>
                                                    {question}
                                                    <div className="options">
                                                        {options1.map((option, i) => (
                                                            <button key={i} className="btn btn-outline-primary">
                                                                <img src={option.emoji} alt={option.label} style={{ width: 20, height: 20 }} />
                                                                {option.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                                <div className="box-class first_section">
                                    <div className="heading text-start">
                                        <h4>Parent: Please complete the following questions on your own</h4>
                                        <ol>
                                            {questions2.map((question, index) => (
                                                <li key={index}>
                                                    {question}
                                                    <div className="options">
                                                        {options2.map((option, i) => (
                                                            <button key={i} className="btn btn-outline-primary">
                                                                <img src={option.emoji} alt={option.label} style={{ width: 20, height: 20 }} />
                                                                {option.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div >
        </>
    );
}

export default AsthmaTest;
