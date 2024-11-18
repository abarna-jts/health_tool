import React, { useState } from "react";

function Pregnancy() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [dueDate, setDueDate] = useState(null);

    const calculateDueDate = () => {
        if (!day || !month || !year) {
            alert("Please select the full date of your last menstrual period.");
            return;
        }

        // Convert the entered day, month, and year into a Date object
        const lmp = new Date(year, month - 1, day); // month - 1 because months are zero-indexed

        // Calculate Due Date (280 days or 40 weeks after LMP)
        const calculatedDueDate = new Date(lmp);
        calculatedDueDate.setDate(calculatedDueDate.getDate() + 280);

        // Format the result and set the due date
        setDueDate(formatDate(calculatedDueDate));
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
                            <div className="nd-title">Pregnancy Due Date Calculator</div>
                        </div>
                        <p className="text-justify"><strong>Overview:</strong>It is very important to know the due date for a pregnant women in order to be ready for birth psychologically and physically. To calculate your due date, submit your last period date then click on Calculate button.​</p>
                        </div>
                       
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-7">
                            <div className="pregnancy-time">
                                <label htmlFor="lmp">Date of Last Menstrual Period*</label><br />
                                <div className="row my-3">
                                    <div className="col-md-3">
                                        <select value={day} className="date-label" onChange={(e) => setDay(e.target.value)} required>
                                            <option value="">Day</option>
                                            {days.map(d => <option key={d} value={d}>{d}</option>)}
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <select value={month} className="date-label" onChange={(e) => setMonth(e.target.value)} required>
                                            <option value="">Month</option>
                                            {months.map(m => <option key={m} value={m}>{m}</option>)}
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <select value={year} className="date-label" onChange={(e) => setYear(e.target.value)} required>
                                            <option value="">Year</option>
                                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                                        </select>
                                    </div>
                                </div>
                                
                                <button onClick={calculateDueDate} className="btn btn-primary">
                                    Calculate Due Date
                                </button>

                                {dueDate && (
                                    <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                                        <p>Pregnancy Due Date: {dueDate}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pregnancy;
