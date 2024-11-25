import React, { useState } from "react";
import { FaClock, FaArrowsAltH } from "react-icons/fa";

function Heart_rate() {

    const [age, setAge] = useState("");
    const [MaxHeartRate, SetHeartRate] = useState(null);
    const [ModerateExeFrom, SetModerateExeFrom] = useState(null);
    const [ModerateExeTo, SetModerateExeTo] = useState(null);
    const [VigorousExeFrom, SetVigorousExeFrom] = useState(null);
    const [VigorousExeTo, SetVigorousExeTo] = useState(null);


    const calculateHeartRate = (e) => {
        e.preventDefault();

        const MaxHeartRate = 220 - age;
        SetHeartRate(MaxHeartRate);

        const ModerateExerciseFrom = Math.round(50 / 100 * MaxHeartRate);
        const ModerateExerciseTo = Math.round(70 / 100 * MaxHeartRate);
        SetModerateExeFrom(ModerateExerciseFrom);
        SetModerateExeTo(ModerateExerciseTo);

        const VigorousExeFrom = Math.round(70 / 100 * MaxHeartRate);
        const VigorousExeTo = Math.round(85 / 100 * MaxHeartRate);
        SetVigorousExeFrom(VigorousExeFrom);
        SetVigorousExeTo(VigorousExeTo);
    }



    return (
        <>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Target heart rate</div>
                            </div>
                            <div className="para-desc text-justify">
                                <p><strong>Overview:</strong> Enter your age and click ‘calculate’ to find out your maximum heart rate and your Target Heart Rate range for different levels of exercise intensity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="heart_rate">
                                <div className="box-calculation justify-content-center">
                                    <div className="col-md-10">
                                        <form className="text-center">

                                            <label>Enter Your Age</label>
                                            <div className="form-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter your Age"
                                                    name="age"
                                                    onChange={(e) => setAge(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-primary" onClick={calculateHeartRate}>Calculate IBW</button>
                                        </form>


                                    </div>

                                </div>
                                {MaxHeartRate && (
                                <div className="container">
                                    <div className="row">
                                        <div className="result-box mt-3 mb-3">
                                            <div className="col-md-12">
                                                
                                                    <>
                                                        <div className="col-md-12">
                                                            
                                                            <div className="result-inner-box text-center">
                                                                <div className="result-header">
                                                                    <p>Maximum Heart Rate</p>
                                                                </div>
                                                                <div className="score-box">
                                                                    <h4>{MaxHeartRate}</h4>
                                                                    <div className="score">
                                                                        <FaClock></FaClock>
                                                                        <p>Beats per Minutes</p>
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                            </div>

                                                        </div>
                                                        
                                                        <div className="col-md-12 exercise-box">
                                                            <div className="col-md-5 my-3">
                                                                <div className="result-inner-box text-center">
                                                                    <div className="result-header">
                                                                        <p>Moderate Exercise</p>
                                                                    </div>
                                                                    <div className="score-box">
                                                                        <h4>{ModerateExeFrom} <FaArrowsAltH className="arrow" /> {ModerateExeTo}</h4>
                                                                        <div className="score">
                                                                            <FaClock></FaClock>
                                                                            <p>Beats per Minutes</p>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                
                                                                </div>

                                                            </div>

                                                            <div className="col-md-5 my-3">
                                                                <div className="result-inner-box text-center">
                                                                    <div className="result-header">
                                                                        <p>Vigorous Exercise</p>
                                                                    </div>
                                                                    <div className="score-box">
                                                                        <h4>{VigorousExeFrom} <FaArrowsAltH className="arrow" /> {VigorousExeTo}</h4>
                                                                        <div className="score">
                                                                            <FaClock></FaClock>
                                                                            <p>Beats per Minutes</p>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                
                                                                </div>

                                                            </div>
                                                        </div>

                                                        

                                                    </>

                                                
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                                )}


                                {/* {ModerateExeFrom && (
                                    
                                )} */}

                                {/* {VigorousExeFrom && (
                                   
                                )} */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Heart_rate