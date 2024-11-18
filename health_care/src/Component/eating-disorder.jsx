import React, { useState, useEffect } from "react";

function EatingDisorder() {
    const questions = [
        "A close family member has, or has had, an eating disorder", // 1
        "I try to hide my eating", // 2
        "When I eat, I eat a very large amount of food in one go, and I have no control over it", // 3
        "When others critique my eating or pressure me to eat more, this makes me very annoyed", // 4
        "I am not happy unless everything is perfect", // 5
        "I am happy with my eating patterns", // 6
        "I eat to excess before forcing myself to vomit", // 7
        "How long have you had a problem with your sleep?", // 8
        "I control my weight using medications like laxatives or diuretics", // 9
        "Working out for me is all about weight loss, and missing a workout makes me upset",// 10
        "I don’t really believe my family or friends when they say that I’m skinny or underweight", //11
        "I eat to excess before forcing myself to vomit" //12
    ];

    const options1 = [
        { label: "Always", value: 4 , emoji: "😁"},
        { label: "Frequently", value: 3, emoji: "😊" },
        { label: "Sometimes", value: 2, emoji: "🙂" },
        { label: "Occasionally", value: 1, emoji: "😟" },
        { label: "Not at all", value: 0, emoji: "😢" }
    ];

    const options2 = [
        { label: "Yes", value: 1, emoji: "😊" },
        { label: "No", value: 0, emoji: "😢" }
    ];

    const options3 = [
        { label: "True", value: 1, emoji: "😊" },
        { label: "False", value: 0, emoji: "😢" },
        { label: "I don't work out", value: 0.0, emoji: "😢" }
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
    // Select options based on question index
    const getOptionsForQuestion = (questionIndex) => {
        if (questionIndex === 0 || questionIndex === 11) {
            return options2; // First and last questions use options2
        } else if (questionIndex === 2 || questionIndex === 3 || questionIndex === 6 || questionIndex === 8) {
            return options1; // Specific questions use options1
        } else if (questionIndex === 9) {
            return options3;
        } else {
            return options2;
        }
    };

    return (
        <>
            <section className="pt-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Eating Disorder Test</div>
                            </div>
                            <div className="para-desc text-justify">
                                <p>Eating Disorder Test Tool is one of the most widely used tools for identifying signs and symptoms of eating disorders. The test provides questions to help you initially assess signs and symptoms of anorexia, bulimia, and binge eating disorders.</p>
                            </div>
                            <h6>Answer All the Question, then get the score</h6>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
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
                                {/* Display selected value for this question */}
                                {responses[questionIndex] !== null && (
                                    <div className="selected-value-box mt-2">
                                        {responses[questionIndex]}
                                    </div>
                                )}
                            </div>
                        ))}
                        {/* Display the total box only after all questions are answered */}
                        {allQuestionsAnswered && (
                            <div id="completion-status" className={`completion-status text-center mt-3 total-box`}>
                                <h5 style={{ color: "#16192c" }}>Total Score: {totalScore}</h5>
                                <p style={{ marginBottom: "0.5rem" }}><strong>
                                    {totalScore >= 13 ? "High Risk" : "Minimal Risk"
                                    }</strong></p>
                                <p>
                                    {totalScore >= 13
                                        ? "Your results indicate that you are at high risk of having an eating disorder, we suggest you speak with a doctor."
                                        : "Your results indicate that you are at low risk of having an eating disorder. If you notice that your symptoms aren't improving, you may want to bring them up with a doctor."
                                    }
                                </p>
                            </div>
                        )}
                    </div>
                </div >
            </div >

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

export default EatingDisorder;
