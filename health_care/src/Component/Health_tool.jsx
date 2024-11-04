import { Link } from 'react-router-dom';
import asthuma_icon from '../assets/img/asthuma.svg'
import pregnancy_icon from '../assets/img/pregnancy.svg'
import BMI from '../assets/img/BMI.svg'
import Calories from '../assets/img/Calories-.svg'
import pilgrims from '../assets/img/Hajj-tool.svg'
import anxiety from '../assets/img/anxiety.svg'
import Sleeping_Disorder from '../assets/img/Sleeping-Disorder.svg'
import Eating_Disorder from '../assets/img/Eating-Disprder.svg'

function Health_tool() {
    return (
        <>
            {/* <h2>This is health tool</h2> */}
            <div class="cards-list">
                
                <div class="card 1">
                    <Link to="/asthuma">
                        <div class="card_image">
                            <img src={asthuma_icon} className="img-fluid" />
                        </div>
                        <div class="card_title">
                            <p>Asthma Control Test</p>
                        </div>
                    </Link>
                </div>

                <div class="card 2">
                <Link to="/pregnancy">
                    <div class="card_image">
                        <img src={pregnancy_icon} className="img-fluid" />
                    </div>
                    <div class="card_title">
                        <p>Best Time To Get Pregnant</p>
                    </div>
                    </Link>
                </div>

                <div class="card 3">
                <Link to="/bmi_calculation">
                    <div class="card_image">
                        <img src={BMI} />
                    </div>
                    <div class="card_title">
                        <p>Body Mass Index (BMI) Calculator</p>
                    </div>
                    </Link>
                </div>

                <div class="card 4">
                <Link to="/calories_calculation">
                    <div class="card_image">
                        <img src={Calories} />
                    </div>
                    <div class="card_title title-black">
                        <p>Calorie Calculate</p>
                    </div>
                    </Link>
                </div>
            </div>

            <div class="cards-list">

                <div class="card 1">
                    <div class="card_image">
                        <img src={pilgrims} className="img-fluid" />
                    </div>
                    <div class="card_title">
                        <p>Checklist Of Pilgrims’ Health Preparations</p>
                    </div>
                </div>

                <div class="card 2">
                    <div class="card_image">
                        <img src={anxiety} className="img-fluid" />
                    </div>
                    <div class="card_title">
                        <p>Do you suffer from anxiety?</p>
                    </div>
                </div>

                <div class="card 3">
                    <div class="card_image">
                        <img src={Eating_Disorder} />
                    </div>
                    <div class="card_title">
                        <p>Eating Disorder Test</p>
                    </div>
                </div>

                <div class="card 4">
                    <div class="card_image">
                        <img src={Sleeping_Disorder} />
                    </div>
                    <div class="card_title title-black">
                        <p>Find out if you have a Sleep disorder?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Health_tool