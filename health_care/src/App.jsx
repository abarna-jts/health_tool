import './App.css'
import Header from './Component/header';
import Health_tool from './Component/Health_tool';
import Asthuma from './Component/asthuma';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Pregnancy from './Component/pregnancy';
import BMI_Calculation from './Component/bmi_calculation';
import Calories from './Component/calories_calculation';

function App() {
 
  return (
    <>
     
      <Router>
      <Header></Header>
      {/* <Health_tool></Health_tool> */}
            <Routes>
                <Route path="/" element={<Health_tool />} />
                <Route path="/asthuma" element={<Asthuma />} />
                <Route path="/pregnancy" element={<Pregnancy />} />
                <Route path="/bmi_calculation" element={<BMI_Calculation />} />
                <Route path="/calories_calculation" element={<Calories />} />
                {/* Other routes */}
            </Routes>
        </Router>
    </>
  )

}

export default App
