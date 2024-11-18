import React, { useState } from "react";

function Pregnancy() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [result, setResult] = useState(null);

    const calculateDates = () => {
        if (!day || !month || !year) {
            alert("Please select the full date of your last menstrual period.");
            return;
        }

        const lmp = new Date(year, month - 1, day); // month - 1 because month is zero-indexed in JavaScript Date

        // Calculate Ovulation Date
        const ovulationDate = new Date(lmp);
        ovulationDate.setDate(ovulationDate.getDate() + 14);

        // Calculate Fertile Window
        const fertileStartDate = new Date(ovulationDate);
        fertileStartDate.setDate(fertileStartDate.getDate() - 3);
        const fertileEndDate = new Date(ovulationDate);
        fertileEndDate.setDate(fertileEndDate.getDate() + 1);

        // Calculate Due Date (280 days or 40 weeks after LMP)
        const dueDate = new Date(lmp);
        dueDate.setDate(dueDate.getDate() + 280);

        setResult({
            ovulationDate: formatDate(ovulationDate),
            fertileStartDate: formatDate(fertileStartDate),
            fertileEndDate: formatDate(fertileEndDate),
            dueDate: formatDate(dueDate),
        });
    };

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    // Arrays for day, month, and year options
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
    return (
        <>
            <section className="pt-3 pb-3">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="title text-center text-nowrap">
                                <div className="nd-title">Best Time To Get Pregnant</div>
                            </div>
                            <div className="para-desc text-justify">
                                <p><strong>Overview:</strong> If you want to get pregnant, you must start to take care of your health to ensure easy pregnancy and free of complications.</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-7 ">
                            <div className="pregnancy-time">
                                <div>


                                    <label htmlFor="lmp">Date of Last Menstrual Period*</label><br />
                                    <div className="row my-3">
                                        <div className="col-md-3">
                                            <select value={day} className=" date-label" onChange={(e) => setDay(e.target.value)} required>
                                                <option value="">Day</option>
                                                {days.map(d => <option key={d} value={d}>{d}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <select value={month} className=" date-label" onChange={(e) => setMonth(e.target.value)} required>
                                                <option value="">Month</option>
                                                {months.map(m => <option key={m} value={m}>{m}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <select value={year} className=" date-label" onChange={(e) => setYear(e.target.value)} required>
                                                <option value="">Year</option>
                                                {years.map(y => <option key={y} value={y}>{y}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <button onClick={calculateDates} className="btn btn-primary">
                                        Calculate
                                    </button>

                                    {result && (
                                        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                                            <p>Ovulation Day: {result.ovulationDate}</p>
                                            <p>Fertile Window: {result.fertileStartDate} to {result.fertileEndDate}</p>
                                            <p>Pregnancy Due Date: {result.dueDate}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Pregnancy