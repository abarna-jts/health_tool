import React, { useState } from "react";

function Anxiety() {
    const questions = [
        "Question text goes here?",
        "Not being able to stop or control worrying?",
        "Worrying too much about different things?",
        "Trouble relaxing?",
        "Being so restless that it's hard to sit still?",
        "Becoming easily annoyed or Irritable?",
        "Feeling afraid as if something awful might happen?"
    ];

    const options = [
        { label: "Nearly every day", value: 3, emoji: "😊" },
        { label: "Over half the days", value: 2, emoji: "🙂" },
        { label: "Several days", value: 1, emoji: "😟" },
        { label: "Not at all sure", value: 0, emoji: "😢" }
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

    return (
        <>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Do you suffer from anxiety?</div>
                            </div>

                            <div className="para-desc text-justify">
                                <p><strong>Disclaimer:</strong> This is not a diagnostic test. Please check with your doctor to get diagnosed. Over the last 2 weeks, how often have you been bothered by the following problems?</p>
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
                                    <h5 className="question-title">
                                        {questionIndex + 1}. {question}
                                    </h5>
                                    <div className="toggle-options row">
                                        {options.map((option, optionIndex) => (
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
                                <div className={`completion-status text-center mt-3 total-box`}>
                                    <h5 style={{ color: "#16192c" }}>Ready by: {totalScore}</h5>
                                    <p>
                                        {totalScore >= 13
                                            ? "You have severe anxiety. Please check with your doctor to get the help you need."
                                            : totalScore >= 10
                                            ? "You have moderate anxiety. Please check with your doctor to get the help you need."
                                            : totalScore >= 4
                                            ? "You have mild anxiety. Please check with your doctor to get the help you need."
                                            : "You don’t have anxiety."
                                        }
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Add styles */}
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

export default Anxiety;
