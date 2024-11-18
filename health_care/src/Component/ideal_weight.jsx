import React, { useState } from "react";
import GaugeChart from "react-gauge-chart"; // Ensure this is installed via npm or yarn

function IdealBodyWeight() {
    const [height, setHeight] = useState('');
    const [ibw, setIbw] = useState(null);

    const calculateIBW = (e) => {
        e.preventDefault();

        // Check if the height seems to be in inches (typically less than 100 cm)
        if (height < 100) {
            alert("Please enter your height in centimeters, not inches.");
            return;
        }

        // Convert height to meters
        const heightInMeters = height / 100;
        // Calculate IBW with target BMI of 22
        const idealWeight = 22 * (heightInMeters ** 2);
        // Set IBW to state, rounded to 2 decimal places
        setIbw(idealWeight.toFixed(2));
    };

    return (
        <>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center">
                                <div className="nd-title">Ideal Body Weight (IBW) Calculator</div>
                            </div>
                            <div className="para-desc text-justify">
                                <p><strong>Overview:</strong> The ideal weight calculator computes ideal body weight (kg) based on height (cm).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="box-calculation">
                                <form onSubmit={calculateIBW}>
                                    <div className="col-md-12">
                                        <label>Height (in cm)</label>
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter your height in cm"
                                                value={height}
                                                onChange={(e) => setHeight(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Calculate IBW</button>
                                </form>
                            </div>

                            {ibw && (
                                <div className="result mt-4 text-center">
                                    <h4>Your Ideal Body Weight: {ibw} kg</h4>
                                    <button type="submit" className="btn btn-primary">Share Your Score</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default IdealBodyWeight;
