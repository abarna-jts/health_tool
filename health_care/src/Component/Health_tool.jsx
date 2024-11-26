import React from "react";
import '../css/health_tool.css';
import { Link } from 'react-router-dom';
import asthuma_icon from '../assets/img/asthuma.svg';
import BMI from '../assets/img/BMI.svg';
import Calories from '../assets/img/Calories-.svg';
import pilgrims from '../assets/img/Hajj-tool.svg';
import anxiety from '../assets/img/anxiety.svg'
import Sleeping_Disorder from '../assets/img/Sleeping-Disorder.svg'
import Eating_Disorder from '../assets/img/Eating-Disprder.svg'
import pregnancy_icon from '../assets/img/pregnancy.svg'
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
                    <div className="col-md-3">
                        <Link to="/asthuma">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={asthuma_icon} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2> Asthma Control Test</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>

                    <div className="col-md-3">
                        <Link to="/bmi_calculation">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={BMI} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Body Mass Index (BMI) Calculator</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>


                    <div className="col-md-3">
                        <Link to="/calories_calculation">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={Calories} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Calorie Calculate</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>

                    <div className="col-md-3">
                        <Link to="/pilgrims">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={pilgrims} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Checklist Of Pilgrims Health Preparations</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>

                    
                    


                </div>



                <div className="row">
                    <div className="col-md-3">
                        <Link to="/pregnancy">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={pregnancy_icon} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Best Time To Get Pregnant</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>

                    <div className="col-md-3">
                        <Link to="/anxiety">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={anxiety} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Do you suffer from anxiety?</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>


                    <div className="col-md-3">
                        <Link to="/eating-disorder">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={Eating_Disorder} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Eating Disorder Test</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>

                    <div className="col-md-3">
                        <Link to="/sleep_disorder">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={Sleeping_Disorder} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Find out if you have a Sleep disorder?</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>
                    


                </div>

                <div className="row">
                    <div className="col-md-3">
                        <Link to="/depression">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={depression} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Find out if you have depression</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>

                    <div className="col-md-3">
                        <Link to="/ideal_weight">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={ideal_weight} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Ideal Body Weight (IBW) Calculator</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>


                    <div className="col-md-3">
                        <Link to="/nomophobia">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={nomophobia} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Nomophobia</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>

                    <div className="col-md-3">
                        <Link to="/diabetes">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={diabetes} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Prediabetes Risk Test</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>
                    


                </div>


                <div className="row">
                    <div className="col-md-3">
                        <Link to="/pregnancy_date">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={pregnancy_due} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Pregnancy Due Date Calculator</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>

                    <div className="col-md-3">
                        <Link to="/visual_test">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={visual} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Visual Acuity Test</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>


                    <div className="col-md-3">
                        <Link to="/heart_rate">
                            <div className="prd-card">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src={heart_rate} className="img-fluid" />
                                    </div>
                                    <div class="content">
                                        <div class="details">
                                            <h2>Target Heart Rate</h2>

                                            <div class="actionBtn">
                                                <button>Start Test</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </div>

                    <div className="col-md-3">
                        <div className="prd-card">
                            <div class="card">
                                <div class="imgBx">
                                    <img src={diabetes} className="img-fluid" />
                                </div>
                                <div class="content">
                                    <div class="details">
                                        <h2>Prediabetes Risk Test</h2>

                                        <div class="actionBtn">
                                            <button>Start Test</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                </div>
                {/* <div className="col-md-8"> */}

            </div>
            {/* </div> */}


        </>
    )
}

export default Health_tool_card