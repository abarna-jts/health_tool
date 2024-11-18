import React, { useState } from "react";
import "../css/sample.css"; // Ensure your CSS file is linked properly

function Sample() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="container">
            
            <form className="radio-form">
            <h6>This is my question no.1</h6>
                <label className={`radio-label ${selectedOption === "option1" ? "selected" : ""}`}>
                    <span className="emoji">{selectedOption === "option1" ? "😢" : "🔘"}</span> Not at all
                    <input
                        type="radio"
                        name="question1"
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={handleChange}
                        className="radio-input"
                    />
                </label>
                <label className={`radio-label ${selectedOption === "option2" ? "selected" : ""}`}>
                    <span className="emoji">{selectedOption === "option2" ? "😟" : "🔘"}</span> A little
                    <input
                        type="radio"
                        name="question1"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleChange}
                        className="radio-input"
                    />
                </label>
                <label className={`radio-label ${selectedOption === "option3" ? "selected" : ""}`}>
                    <span className="emoji">{selectedOption === "option3" ? "🙂" : "🔘"}</span> Somewhat
                    <input
                        type="radio"
                        name="question1"
                        value="option3"
                        checked={selectedOption === "option3"}
                        onChange={handleChange}
                        className="radio-input"
                    />
                </label>
                <label className={`radio-label ${selectedOption === "option4" ? "selected" : ""}`}>
                    <span className="emoji">{selectedOption === "option4" ? "😊" : "🔘"}</span> Much
                    <input
                        type="radio"
                        name="question1"
                        value="option4"
                        checked={selectedOption === "option4"}
                        onChange={handleChange}
                        className="radio-input"
                    />
                </label>
            </form>
        </div>
    );
}

export default Sample;
