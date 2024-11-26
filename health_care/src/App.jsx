import './App.css'
import Header from './Component/header';
import Health_tool from './Component/Health_tool';
import Asthuma from './Component/asthuma';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Pregnancy from './Component/pregnancy';
import BMI_Calculation from './Component/bmi_calculation';
import Calories from './Component/calories_calculation';
import Pilgrims from './Component/pilgrims';
import Anxiety from './Component/anxiety';
import EatingDisorder from './Component/eating-disorder';
import SleepDisorder from './Component/sleep_disorder';
import Depression from './Component/depression';
import IdealBodyWeight from './Component/ideal_weight';
import Nomophobia from './Component/nomophobia';
import Diabetes from './Component/diabetes';
import PregnancyDate from './Component/pregnancy_date';
import VisualTest from './Component/visual_test';
import About_us from './Component/about_us';
import Contact_us from './Component/contact_us';
import Sidebar from './Component/sidebar';
import Sample from './Component/sample';
import Heart_rate from './Component/heart_rate';
import Health_tool_card from './Component/health_tool_card';


// import Carousel_nav from './Component/carousel';

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        
        <Routes>
          <Route path="/" element={<Health_tool />} />
          <Route path="/asthuma" element={<Asthuma />} />
          <Route path="/pregnancy" element={<Pregnancy />} />
          <Route path="/bmi_calculation" element={<BMI_Calculation />} />
          <Route path="/calories_calculation" element={<Calories />} />
          <Route path="/pilgrims" element={<Pilgrims />} />
          <Route path="/anxiety" element={<Anxiety />} />
          <Route path="/eating-disorder" element={<EatingDisorder />} />
          <Route path="/sleep_disorder" element={<SleepDisorder />} />
          <Route path="/depression" element={<Depression />} />
          <Route path="/ideal_weight" element={<IdealBodyWeight />} />
          <Route path="/nomophobia" element={<Nomophobia />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/pregnancy_date" element={<PregnancyDate />} />
          <Route path="/visual_test" element={<VisualTest />} />
          <Route path="/heart_rate" element={<Heart_rate />} />
          <Route path="/Health_tool" element={<Health_tool />} />
          <Route path="/about_us" element={<About_us />} />
          <Route path="/contact_us" element={<Contact_us />} />
          <Route path="/health_tool_card" element={<Health_tool_card />} />
          {/* Other routes */}
        </Routes>
        {/* <Carousel_nav /> */}
      </Layout>
    </Router>
  );
}

function Layout({ children }) {
  const location = useLocation();
  const showSidebar = location.pathname !== "/" && location.pathname !== "/Health_tool" && location.pathname !== "/about_us" && location.pathname !== "/contact_us";

  return (
    <div className="app-container">
      {showSidebar && <Sidebar />} {/* Only render Sidebar if not on health-tool path */}
      <main>{children}</main>
    </div>
  );
}

export default App;
