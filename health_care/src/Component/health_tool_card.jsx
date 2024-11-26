import React from "react";
import '../css/home.css';
import asthuma from '../assets/img/asthuma.png';
import asthuma_icon from '../assets/img/asthuma.svg';
import bmi from '../assets/img/bmi.png';
import BMI from '../assets/img/BMI.svg';
import calories from '../assets/img/calories.png';
import Calories from '../assets/img/Calories-.svg';
import pilgrim from '../assets/img/pilgrim.png';
import pilgrims from '../assets/img/Hajj-tool.svg';
import pregnancy_icon from '../assets/img/pregnancy.svg';
import anxiety_img from '../assets/img/anxiety.png';
import anxiety from '../assets/img/anxiety.svg';

import Eating_Disorder from '../assets/img/Eating-Disprder.svg';
import eating_disorder from '../assets/img/eating_disorder.png';
import depression from '../assets/img/depressiontest.svg'
import ideal_weight from '../assets/img/IdealBodyWeight.svg'
import nomophobia from '../assets/img/NMPQ ICON.svg'
import diabetes from '../assets/img/Prediabetes-Risk-Test.svg'
import pregnancy_due from '../assets/img/PregnancyDueDate.svg'
import visual from '../assets/img/VisualAcuityTest.svg'
import heart_rate from '../assets/img/heart_rate.png'


function Health_tool_card() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="title-card text-center">
                            <h3>Health Test Tool</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="sample-card">
                        <ul class="cards">
                            <li>
                                <a href="" class="card">
                                    <img src={asthuma} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={asthuma_icon} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Asthuma Control Test</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="" class="card">
                                    <img src={bmi} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={BMI} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Body Mass Index (BMI) Calculator</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="" class="card">
                                    <img src={calories} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={Calories} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Calorie Calculate</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="" class="card">
                                    <img src={pilgrim} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={pilgrims} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Checklist Of Pilgrims Health Preparations</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            

                        </ul>


                        <ul class="cards">
                            <li>
                                <a href="" class="card">
                                    <img src={asthuma} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={pregnancy_icon} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Best Time To Get Pregnant</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="" class="card">
                                    <img src={anxiety_img} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={anxiety} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Do you suffer from anxiety?</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="" class="card">
                                    <img src={eating_disorder} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={Eating_Disorder} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Eating Disorder Test</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="" class="card">
                                    <img src={pilgrim} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={Calories} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Find out if you have a Sleep disorder?</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            

                        </ul>

                        <ul class="cards">
                            <li>
                                <a href="" class="card">
                                    <img src={asthuma} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={depression} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Find out if you have depression</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="" class="card">
                                    <img src={anxiety_img} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={ideal_weight} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Ideal Body Weight (IBW) Calculator</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="" class="card">
                                    <img src={eating_disorder} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={nomophobia} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Nomophobia</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="" class="card">
                                    <img src={pilgrim} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={diabetes} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Prediabetes Risk Test</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            

                        </ul>

                        <ul class="cards" style={{justifyContent:"center"}}>
                            <li>
                                <a href="" class="card">
                                    <img src={asthuma} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={pregnancy_due} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Pregnancy Due Date Calculator</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="" class="card">
                                    <img src={anxiety_img} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={visual} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Visual Acuity Test</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="" class="card">
                                    <img src={eating_disorder} class="card__image" alt="" />
                                    <div class="card__overlay">
                                        <div class="card__header">
                                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                            <img class="card__thumb" src={heart_rate} alt="" />
                                            <div class="card__header-text">
                                                <h3 class="card__title">Target Heart Rate</h3>
                                                
                                            </div>
                                        </div>
                                        <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                    </div>
                                </a>
                            </li>

                            

                            

                        </ul>


                    </div>
                    
                </div>




            </div>
            {/* </div> */}


        </>
    )
}

export default Health_tool_card