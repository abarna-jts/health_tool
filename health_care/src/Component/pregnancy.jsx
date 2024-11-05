import React, { useState } from "react";

function Pregnancy() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [score3, setScore3] = useState(0);
    const [score4, setScore4] = useState(0);

    const calculateTotal = () => {
        return score1 + score2 + score3 + score4;
    };

    return (
        <>
            <div className="question1">
                <p>Question 1</p>
                <button onClick={() => setScore1(3)}>Option 3</button>
                <button onClick={() => setScore1(2)}>Option 2</button>
                <button onClick={() => setScore1(1)}>Option 1</button>
                <button onClick={() => setScore1(0)}>Option 0</button>

                <p>Question 2</p>
                <button onClick={() => setScore2(3)}>Option 3</button>
                <button onClick={() => setScore2(2)}>Option 2</button>
                <button onClick={() => setScore2(1)}>Option 1</button>
                <button onClick={() => setScore2(0)}>Option 0</button>

                <p>Question 3</p>
                <button onClick={() => setScore3(3)}>Option 3</button>
                <button onClick={() => setScore3(2)}>Option 2</button>
                <button onClick={() => setScore3(1)}>Option 1</button>
                <button onClick={() => setScore3(0)}>Option 0</button>

                <p>Question 4</p>
                <button onClick={() => setScore4(3)}>Option 3</button>
                <button onClick={() => setScore4(2)}>Option 2</button>
                <button onClick={() => setScore4(1)}>Option 1</button>
                <button onClick={() => setScore4(0)}>Option 0</button>
            </div>
            <div className="total">
                <p>Total Score: {calculateTotal()}</p>
            </div>
        </>
    );
}

export default Pregnancy;
