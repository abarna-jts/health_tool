import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import asthuma_icon from '../assets/img/small-boy-2.png';
import boy_icon from '../assets/img/002.png';
import { useState } from "react";
import emoji_5 from '../assets/img/emoji-1.png'
import emoji_4 from '../assets/img/emoji-2.png'
import emoji_3 from '../assets/img/emoji-3.png'
import emoji_2 from '../assets/img/emoji-4.png'
import emoji_1 from '../assets/img/emoji-5.png'

function Asthuma() {
    const [visibleBox, setVisibleBox] = useState(null);
    const [heading, setHeading] = useState("");
    // Define click handler functions for each button
    const handleButton1Click = () => {
        setVisibleBox("box1");
        setHeading("How to take the Childhood Asthma Control Test?");
    };

    const handleButton2Click = () => {
        setVisibleBox("box2");
        setHeading("Asthma Control Test (ACT) for children over 12 years and adults");
    };

    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [score3, setScore3] = useState(0);
    const [score4, setScore4] = useState(0);
    const [score5, setScore5] = useState(0);
    const [score6, setScore6] = useState(0);
    const [score7, setScore7] = useState(0);

    const calculateTotal = () => {
        return score1 + score2 + score3 + score4 + score5 + score6 + score7;
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
            <div className="section desc_sec pt-5 p-5">
                <div className="container">
                    <div className="title text-center">
                        <div className="nd-title">Asthma Control Test</div>
                    </div>
                    <div className="para-desc text-center">
                        <p>The Asthma Control Test Tool is a measure of patients' asthma control that helps facilitate access to medical help.</p>
                    </div>

                    <div class="cards-list">
                        <div class="card 1" onClick={handleButton1Click}>
                            <div class="card_image">
                                <img src={asthuma_icon} className="img-fluid" />
                            </div>
                            <div class="card_title">
                                <p>Asthma Control Test</p>
                            </div>
                        </div>

                        <div class="card 1" onClick={handleButton2Click}>
                            <div class="card_image">
                                <img src={boy_icon} className="img-fluid" />
                            </div>
                            <div class="card_title">
                                <p>Asthma Control Test</p>
                            </div>
                        </div>

                    </div>

                    {visibleBox === "box1" && (
                        <>
                            <div className="box-class">
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
                            <div className="question_section">
                                <div className="heading">
                                    <h4>Have your child complete these questions.</h4>
                                </div>
                                <div className="question 1">
                                    <p>1- How is your asthma today?</p>
                                    <div className="question_card">
                                        <div className="emoji-card">
                                            <button  onClick={() => setScore1(3)}>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>Very Good</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card">
                                            <button  onClick={() => setScore1(2)}>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>Good</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card">
                                            <button  onClick={() => setScore1(1)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>Bad</p>
                                                </div>
                                            </button>
                                        </div>


                                        <div className="emoji-card">
                                            <button  onClick={() => setScore1(0)}>
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
                                        <div className="emoji-card">
                                            <button onClick={() => setScore2(3)}>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p style={{ minHeight: 48 }}>It’s not a problem</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card">
                                            <button  onClick={() => setScore2(2)}>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>It’s a little problem but it’s okay</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card">
                                            <button onClick={() => setScore2(1)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>It’s a problem and I don’t like it</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card">
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
                                        <div className="emoji-card">
                                            <button  onClick={() => setScore3(3)}>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>No, none of the time</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card">
                                            <button onClick={() => setScore3(2)}>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>Yes, some of the time</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card">
                                            <button onClick={() => setScore3(1)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>Yes, most of the time</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card">
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
                                        <div className="emoji-card">
                                            <button onClick={() => setScore4(3)}>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>No, none of the time</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card">
                                            <button onClick={() => setScore4(2)}>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>Yes, some of the time</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card">
                                            <button onClick={() => setScore4(1)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>Yes, most of the time</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card">
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
                            


                            <div className="question_section2">
                                <div className="heading">
                                    <h4>Parent: Please complete the following questions on your own</h4>
                                </div>
                                <div className="question 5">
                                    <p>5- During the last 4 weeks, how many days did your child have any daytime asthma symptoms?</p>
                                    <div className="question_card">
                                        <div className="emoji-card2">
                                            <button  onClick={() => setScore5(5)}> 
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>Not at all</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button onClick={() => setScore5(4)}>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>1-3 days</p>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="emoji-card2">
                                            <button onClick={() => setScore5(3)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>4-10 days</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button onClick={() => setScore5(2)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>11-18 days</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button  onClick={() => setScore5(1)}>
                                                <img src={emoji_1} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>19-24 days</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button  onClick={() => setScore5(0)}>
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
                                        <div className="emoji-card2">
                                            <button  onClick={() => setScore6(5)}>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>Not at all</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button onClick={() => setScore6(4)}>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>1-3 days</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button onClick={() => setScore6(3)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>4-10 days</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button onClick={() => setScore6(2)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>11-18 days</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button onClick={() => setScore6(1)}>
                                                <img src={emoji_1} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>19-24 days</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
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
                                        <div className="emoji-card2">
                                            <button onClick={() => setScore7(5)}>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>Not at all</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button  onClick={() => setScore6(4)}>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>1-3 days</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button onClick={() => setScore6(3)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>4-10 days</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button onClick={() => setScore6(2)}>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>11-18 days</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button onClick={() => setScore6(1)}>
                                                <img src={emoji_1} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>19-24 days</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
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
                                <div className="row" style={{justifyContent:"center"}}>
                                    <div className="col-md-3">
                                        <div className="total-box">
                                            <h1>{calculateTotal()}</h1>
                                            <h5>STATUS</h5>
                                            <p className="text-center">Try to see your doctor soon to review your Asthma management plan by Mawid App or click here for more details.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                

                            </div>
                        </>

                    )}

                    {visibleBox === "box2" && (
                        <>
                            <div className="box-class box-class2">
                                <div className="heading">
                                    <h3>{heading}</h3>
                                </div>
                                <ul>
                                    <li>Answer each question carefully and remember there are no right or wrong answers</li>
                                </ul>
                            </div>
                            <div className="question_section2">
                                {/* box-2 question-1 */}
                                <div className="question 1">
                                    <p>1- In the past 4 weeks, how much of the time did your asthma keep you from getting as much done at work, school or at home?</p>
                                    <div className="question_card">
                                        <div className="emoji-card2">
                                            <button >
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>None of the time</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>A little of the time</p>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>Some of the time</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_2} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>Most of the time</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
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
                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>Not at all</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>Once or twice a week</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>to 6 times a week</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_2} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>Once a day</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
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
                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>Not at all</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>Once or twice a week</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>Once a week</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_2} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>2 or 3 nights a week</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
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
                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>Not at all</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>Once a week or less</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>2 or 3 times per week</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_2} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>1 or 2 times per day</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
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
                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_5} alt="" />
                                                <div className="mark-card">
                                                    <h6>(5)</h6>
                                                    <p>Completely controlled</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_4} alt="" />
                                                <div className="mark-card">
                                                    <h6>(4)</h6>
                                                    <p>Well controlled</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_3} alt="" />
                                                <div className="mark-card">
                                                    <h6>(3)</h6>
                                                    <p>Somewhat controlled</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_2} alt="" />
                                                <div className="mark-card">
                                                    <h6>(2)</h6>
                                                    <p>Poorly controlled</p>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="emoji-card2">
                                            <button>
                                                <img src={emoji_1} alt="" />
                                                <div className="mark-card">
                                                    <h6>(1)</h6>
                                                    <p>Not controlled at all</p>
                                                </div>
                                            </button>
                                        </div>

                                    </div>
                                </div>


                            </div>

                        </>
                        
                    )}
                </div>
            </div>

        </>
    )
}

export default Asthuma