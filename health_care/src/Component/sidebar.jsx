import React from "react";
import { NavLink } from 'react-router-dom';
import '../css/sidebar.css';
import asthuma from '../assets/img/sidebar-1.png';
import BMI from '../assets/img/sidebar-2.png';
import calories from '../assets/img/sidebar-3.png';
import time_pregnant from '../assets/img/sidebar-4.png';
import anxiety from '../assets/img/sidebar-5.png';
import eating_disorder from '../assets/img/sidebar-6.png';
import sleeping_disorder from '../assets/img/sidebar-7.png';
import depression from '../assets/img/sidebar-8.png';
import IBM from '../assets/img/sidebar-9.png';
import nomophobia from '../assets/img/sidebar-10.png';
import diabetes from '../assets/img/sidebar-11.png';
import due_pregnancy from '../assets/img/sidebar-12.png';
import visual from '../assets/img/sidebar-13.png';
import pilgrims from '../assets/img/sidebar-14.png';
import asthumaActive from '../assets/img/sidebar-arrow.png';

function Sidebar() {
    return (
        <>
            <section>
                <aside className="sidebar">
                {/* <div className="sidebar-header">
                    <img src="images/logo.png" alt="logo" />
                    <h2>CodingLab</h2>
                </div> */}
                <ul className="sidebar-links">
                    <h4>
                        <span>Health Tools </span>
                        {/* <div className="menu-separator"></div> */}
                    </h4>
                    <li>
                        <NavLink 
                            to="/asthuma" 
                            className={({ isActive }) => (isActive ? 'active-link' : '')}
                        >
                            {({ isActive }) => (
                                <>
                                    <img 
                                        src={isActive ? asthumaActive : asthuma} 
                                        alt="Asthma Icon" 
                                        className="icon-image" 
                                    />
                                    Asthma Control Test
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bmi_calculation"  className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : BMI} alt="" className="icon-image"/>Body Mass Index (BMI) Calculator
                            </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/calories_calculation"  className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : calories} alt="" className="icon-image"/>Calorie Calculate
                            </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pilgrims"  className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : pilgrims} alt="" className="icon-image"/>Checklist Of Pilgrims’ Health Preparations
                            </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pregnancy" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : time_pregnant} alt="" className="icon-image"/>Best Time To Get Pregnant
                            </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/anxiety" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : anxiety} alt="" className="icon-image"/>Do you suffer from anxiety?
                            </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/eating-disorder" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : eating_disorder} alt="" className="icon-image"/>Eating Disorder Test
                            </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sleep_disorder" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : sleeping_disorder} alt="" className="icon-image"/>Find out if you have a Sleep disorder?
                            </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/depression" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : depression} alt="" className="icon-image"/>Find out if you have depression
                            </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ideal_weight" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : IBM} alt="" className="icon-image"/>Ideal Body Weight (IBW) Calculator
                            </>)}
                            </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nomophobia" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : nomophobia} alt="" className="icon-image"/>Nomophobia
                            </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/diabetes" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : diabetes} alt="" className="icon-image"/>Prediabetes Risk Test
                            </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pregnancy_date" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : due_pregnancy} alt="" className="icon-image"/>Pregnancy Due Date Calculator
                            </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/visual_test" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            {({ isActive }) => (<>
                                <img src={isActive ? asthumaActive : visual} alt="" className="icon-image"/>Visual Acuity Test
                            </>)}
                        </NavLink>
                    </li>
                    

                    
                </ul>
                {/* <div className="user-account">
                    <div className="user-profile">
                        <img src="images/profile-img.jpg" alt="Profile Image" />
                        <div className="user-detail">
                            <h3>Eva Murphy</h3>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </div> */}
            </aside>
            </section>
        </>
        
        
    );
}

export default Sidebar;
