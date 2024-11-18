import React, { useState, useEffect } from "react";

function Depression() {
    const questions = [
        "Little interest or pleasure in doing things",
        "Feeling down, depressed, or hopeless",
        "Trouble falling or staying asleep, or sleeping too much",
        "Feeling tired or having little energy",
        "Poor appetite or overeating",
        "Feeling bad about yourself - or that you are a failure or have let yourself or your family down.",
        "Trouble concentrating on things, such as reading the newspaper or watching television",
        "Moving or speaking so slowly that other people could have noticed or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
        "Thoughts that you would be better off dead, or of hurting yourself"
    ];

    const options = [
        { label: "Not at all", value: 0, emoji: "😢" },
        { label: "A little", value: 1, emoji: "😟" },
        { label: "Somewhat", value: 2, emoji: "🙂" },
        { label: "Much", value: 3, emoji: "😊" }
    ];

    const [responses, setResponses] = useState(Array(questions.length).fill(null));
    const totalScore = responses.reduce((acc, curr) => acc + (curr ?? 0), 0);

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

    return (
        <>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center">
                                <div className="nd-title">Find out if you have depression</div>
                            </div>
                            <div className="para-desc text-justify">
                                <p><strong>Description:</strong> Disclaimer: this is not a diagnostic test, please check with your doctor to get diagnosed</p>
                                <p><strong>Intro: </strong>In the last 2 weeks how often you've experienced the following: ​</p>
                            </div>
                            <h6>Answer All the Question, then get the score</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-7">
                            {questions.map((question, questionIndex) => (
                                <div key={questionIndex} className="question-box p-3 mb-3 anxiety-question">
                                    <h5 className="question-title">{questionIndex + 1}. {question}</h5>
                                    <div className="toggle-options row">
                                        {options.map((option, optionIndex) => (
                                            <div key={optionIndex} className="col-6 depression-label">
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
                                    {/* Display the selected value outside the question box with a border */}
                                    {responses[questionIndex] !== null && (
                                        <div className="selected-value-box">
                                            {responses[questionIndex]}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {/* Display the total box only after all questions are answered */}
                            {allQuestionsAnswered && (
                                <div id="completion-status" className={`completion-status text-center mt-3 total-box`}>
                                    <h5 style={{ color: "#16192c" }}>Ready by: {totalScore}</h5>
                                    <p>
                                        {totalScore >= 20
                                            ? "Your results indicate that you may be experiencing symptoms of severe depression. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life. Visit your doctor for proper diagnosis."
                                            : totalScore >= 15
                                                ? "Your results indicate that you may be experiencing symptoms of moderately severe depression. Based on your answers, living with these symptoms is causing difficulty managing relationships and even the tasks of everyday life. Visit your doctor for proper diagnosis."
                                                : totalScore >= 10
                                                    ? "Your results indicate that you may be experiencing some symptoms of moderate depression. While your symptoms are not likely having a major impact on your life, it is important to monitor them. Visit your doctor for proper diagnosis."
                                                    : totalScore >= 5
                                                        ? "Your results indicate that you may be experiencing some symptoms of mild depression. While your symptoms are not likely having a major impact on your life, it is important to monitor them. Visit your doctor for proper diagnosis."
                                                        : "Your results indicate that you have none, or very few symptoms of depression."
                                        }
                                    </p>
                                </div>
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
            `}</style>
        </>
    );
}

export default Depression;
