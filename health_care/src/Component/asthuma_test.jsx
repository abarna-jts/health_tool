import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import asthuma_icon from '../assets/img/small-boy-2.png';
import boy_icon from '../assets/img/002.png';

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

    const questions = [
        "How is your asthma today?", // 1
        "How much of a problem is your asthma when you run, exercise or play sports?", // 2
        "Do you cough because of your asthma?", // 3
        "Do you wake up during the night because of your asthma?", // 4
        "During the last 4 weeks, how many days did your child have any daytime asthma symptoms?", // 5
        "During the last 4 weeks, how many days did your child wheeze during the day because of asthma?", // 6
        "During the last 4 weeks, how many days did your child wake up during the night because of asthma?", // 7
        
    ];

    const options1 = [
        { label: "No, none of the time", value: 3 },
        { label: "Yes, some of the time", value: 2 },
        { label: "Yes, most of the time", value: 1},
        { label: "Yes, all of the time", value: 0},
        
    ];

    const options2 = [
        { label: "Very Good", value: 1},
        { label: "Good", value: 0},
        { label: "Bad", value: 0},
        { label: "Very Bad", value: 0}
    ];

    const options3 = [
        { label: "It’s not a problem", value: 1},
        { label: "It’s a little problem but it’s okay", value: 0},
        { label: "It’s a problem and I don’t like it", value: 0.0},
        { label: "It’s a big problem, I can’t do what I want to do", value: 0.0}
        
    ];
    const options4 = [
        { label: "Not at all", value: 5},
        { label: "1-3 days", value: 4},
        { label: "4-10 days", value: 3},
        { label: "11-18 days", value: 2},
        { label: "19-24 days", value: 1},
        { label: "Everyday", value: 0}
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
                                    <li>Answer each question carefully and remember there are no right or wrong answers</li>
                                </ul>
                             </div>
                     </div>
                 </div>
             </div>
                }


            </div>
        </>
    );
}

export default AsthmaTest;
