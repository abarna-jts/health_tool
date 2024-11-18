import React, {useState, useEffect} from "react";

function SleepDisorder(){
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
                                <h5 style={{ color: "#16192c" }}>Total Score: {totalScore}</h5>
                                <ul>
                                    {totalScore >= 25 && (
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
                                    {totalScore >= 9 && totalScore < 25 && (
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
                                    {totalScore >= 1 && totalScore < 9 && (
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
                                    {totalScore === 0 && (
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
            `}</style>
        </>
    );
}

export default SleepDisorder