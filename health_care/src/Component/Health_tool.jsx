import { Link } from 'react-router-dom';
import asthuma_icon from '../assets/img/asthuma.svg'
import pregnancy_icon from '../assets/img/pregnancy.svg'
import BMI from '../assets/img/BMI.svg'
import Calories from '../assets/img/Calories-.svg'
import pilgrims from '../assets/img/Hajj-tool.svg'
import anxiety from '../assets/img/anxiety.svg'
import Sleeping_Disorder from '../assets/img/Sleeping-Disorder.svg'
import Eating_Disorder from '../assets/img/Eating-Disprder.svg'
import depression from '../assets/img/depressiontest.svg'
import ideal_weight from '../assets/img/IdealBodyWeight.svg'
import nomophobia from '../assets/img/NMPQ ICON.svg'
import diabetes from '../assets/img/Prediabetes-Risk-Test.svg'
import pregnancy_due from '../assets/img/PregnancyDueDate.svg'
import visual from '../assets/img/VisualAcuityTest.svg'
import heart_rate from '../assets/img/heart_rate.png'

function Health_tool() {
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
           
            {/* <h2>This is health tool</h2> */}
            <div class="cards-list">
                
                <div class="card 1">
                    <Link to="/asthuma">
                        <div class="card_image">
                            <img src={asthuma_icon} className="img-fluid" />
                        </div>
                        <div class="card_title card-adjust">
                            <p>Asthma Control Test</p>
                        </div>
                        <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                        
                    </Link>
                </div>

                <div class="card 2">
                <Link to="/bmi_calculation">
                    <div class="card_image">
                        <img src={BMI} />
                    </div>
                    <div class="card_title">
                        <p>Body Mass Index (BMI) Calculator</p>
                    </div>
                    <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                </div>

                <div class="card 3">
                <Link to="/calories_calculation">
                    <div class="card_image">
                        <img src={Calories} />
                    </div>
                    <div class="card_title title-black card-adjust">
                        <p>Calorie Calculate</p>
                    </div>
                    <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                </div>
                <div class="card 4">
                    <Link to="/pilgrims">
                        <div class="card_image">
                            <img src={pilgrims} className="img-fluid" />
                        </div>
                        <div class="card_title">
                            <p>Checklist Of Pilgrims’ Health Preparations</p>
                        </div>
                        <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                    
                </div>
            </div>

            <div class="cards-list">

                
                <div class="card 1">
                <Link to="/pregnancy">
                    <div class="card_image">
                        <img src={pregnancy_icon} className="img-fluid" />
                    </div>
                    <div class="card_title">
                        <p>Best Time To Get Pregnant</p>
                    </div>
                    <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                </div>
                <div class="card 2">
                    <Link to="/anxiety">
                        <div class="card_image">
                            <img src={anxiety} className="img-fluid" />
                        </div>
                        <div class="card_title">
                            <p>Do you suffer from anxiety?</p>
                        </div>
                        <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                    
                </div>

                <div class="card 3">
                    <Link to="/eating-disorder">
                        <div class="card_image">
                            <img src={Eating_Disorder} />
                        </div>
                        <div class="card_title card-adjust">
                            <p>Eating Disorder Test</p>
                        </div>
                        <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                    
                </div>

                <div class="card 4">
                    <Link to="/sleep_disorder">
                        <div class="card_image">
                            <img src={Sleeping_Disorder} />
                        </div>
                        <div class="card_title title-black">
                            <p>Find out if you have a Sleep disorder?</p>
                        </div>
                        <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                    
                </div>
            </div>

            <div class="cards-list">

                
                <div class="card 1">
                <Link to="/depression">
                    <div class="card_image">
                        <img src={depression} className="img-fluid" />
                    </div>
                    <div class="card_title">
                        <p>Find out if you have depression</p>
                    </div>
                    <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                </div>
                <div class="card 2">
                    <Link to="/ideal_weight">
                        <div class="card_image">
                            <img src={ideal_weight} className="img-fluid" />
                        </div>
                        <div class="card_title">
                            <p>Ideal Body Weight (IBW) Calculator</p>
                        </div>
                        <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                    
                </div>

                <div class="card 3">
                    <Link to="/nomophobia">
                        <div class="card_image">
                            <img src={nomophobia} />
                        </div>
                        <div class="card_title card-adjust">
                            <p>Nomophobia</p>
                        </div>
                        <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                    
                </div>

                <div class="card 4">
                    <Link to="/diabetes">
                        <div class="card_image">
                            <img src={diabetes} />
                        </div>
                        <div class="card_title title-black card-adjust">
                            <p>Prediabetes Risk Test</p>
                        </div>
                        <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                    
                </div>
            </div>

            <div class="cards-list">

                
                <div class="card 1">
                <Link to="/pregnancy_date">
                    <div class="card_image">
                        <img src={pregnancy_due} className="img-fluid" />
                    </div>
                    <div class="card_title">
                        <p>Pregnancy Due Date Calculator</p>
                    </div>
                    <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                </div>
                <div class="card 2">
                    <Link to="/visual_test">
                        <div class="card_image">
                            <img src={visual} className="img-fluid" />
                        </div>
                        <div class="card_title card-adjust">
                            <p>Visual Acuity Test</p>
                        </div>
                        <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                    
                </div>

                <div class="card 3">
                    <Link to="/heart_rate">
                        <div class="card_image">
                            <img src={heart_rate} className="img-fluid" />
                        </div>
                        <div class="card_title card-adjust">
                            <p>Target Heart Rate</p>
                        </div>
                        <div className="btn-center">
                            <button className='card-btn' type='button'>Start Test</button>
                        </div>
                    </Link>
                    
                </div>

                
            </div>

            
        </>
    )
}

export default Health_tool