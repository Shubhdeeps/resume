import { usePesonalDataStore, useUserDataStore } from "../../../store/store";
import React from 'react'
import { useRouter } from "next/router";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import ExperienceContent from "./components/ExperienceContent";
import EducationContent from "./components/EducationContent";
import SkillsContent from "./components/SkillsContent";

const TemplateTwo = () => {

const primary = useUserDataStore(state => state.primary)
const secondary = useUserDataStore(state => state.secondary)
const Image = usePesonalDataStore(state => state.image)
const name = usePesonalDataStore(state => state.name)
const experience = usePesonalDataStore(state => state.experience)
const education = usePesonalDataStore(state => state.education)
const skills = usePesonalDataStore(state => state.skills)
const addExperience = usePesonalDataStore(state => state.addExperience)
const addEducation = usePesonalDataStore(state => state.addEducation)
const objective = usePesonalDataStore(state => state.objective)
const occupation = usePesonalDataStore(state => state.occupation)
const contact = usePesonalDataStore(state => state.contact)
const route = useRouter()

const removeExperiencField = (elementClass) => {
    const element = document.getElementById(elementClass)
    element.removeChild(element.lastChild);
}

    return(
        <div className="template-two">
                <div className="left-window" style={{background: primary}}>
                    <div className="svg-container">
                        <div className="svg-zero">
                            <svg width="400" height="400" viewBox="0 0 632 622" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M285.246 8.12878C370.701 -10.894 465.821 4.64217 528.732 59.6653C583.308 107.398 555.978 191.332 573.637 260.36C590.054 324.533 646.323 379.249 627.027 443.891C604.102 520.687 548.735 603.114 466.467 619.374C386.094 635.258 334.86 547.938 261.756 516.082C179.777 480.359 61.3795 500.295 19.5673 424.629C-24.6269 344.653 15.6329 242.188 66.4132 162.58C115.261 86.0027 194.042 28.4314 285.246 8.12878Z" fill={secondary}/>
                            </svg>
                        </div>
                        <div className="svg-one">
                            <svg width="300" height="300" viewBox="0 0 662 573" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M553.44 504.848C607.027 471.6 650.435 424.297 660.058 364.431C669.207 307.518 628.411 264.918 586.513 221.167C565.004 198.707 543.205 175.943 527.722 150.784C517.342 133.916 510.024 114.731 502.803 95.8032C488.807 59.1125 475.177 23.3852 440.326 7.35714C405.945 -8.45411 370.508 4.22283 334.068 17.2586C314.436 24.2814 294.513 31.4084 274.308 34.2411C242.862 38.6496 207.151 34.453 171.977 30.3196C104.798 22.4251 39.5791 14.761 9.78342 67.717C0.246462 84.6671 -1.70406 101.387 1.49043 118.006V573H553.44V504.848Z" fill={secondary}/>
                            </svg>
                        </div>
                        <div className="svg-two">
                            <svg width="300" height="300" viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M31.1279 600.946C-15.9369 541.655 5.7672 466.566 2.72104 395.408C0.654617 347.137 6.58357 304.708 16.4655 258.435C35.6333 168.682 -4.18887 31.0433 86.3263 3.92336C173.498 -22.1949 231.148 115.925 311.779 169.954C389.976 222.352 503.49 228.801 544.1 310.666C588.923 401.022 564.578 503.959 517.526 584.714C468.272 669.25 391.168 749.362 286.46 752.857C187.322 756.165 94.4018 680.657 31.1279 600.946Z" fill={secondary}/>
                            </svg>
                        </div>
                        <div className="svg-three">
                            <svg width="634" height="590" viewBox="0 0 634 590" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M77.8547 491.129C40.0866 449.742 -4.79058 400.392 1.32495 344.697C7.73201 286.347 102.924 267.429 108.831 209.027C115.837 139.761 -9.18533 71.983 34.3991 17.6938C76.8406 -35.1718 162.602 53.4331 230.257 57.777C266.689 60.1162 301.791 24.0339 335.898 37.0522C370.359 50.2058 367.169 111.491 402.092 123.365C473.507 147.646 576.187 76.9202 624.216 135.082C663.105 182.173 564.559 239.052 545.558 297.094C529.492 346.168 558.937 411.511 521.929 447.523C484.32 484.12 416.074 446.605 368.705 469.186C311.266 496.569 287.989 584.508 224.537 589.295C164.854 593.798 118.2 535.34 77.8547 491.129Z" fill={secondary}/>
                            </svg>
                        </div>
                    </div>  
                    <div className="header-two">
                        <br /><br />
                        <div> 
                            <img className="image-container-two" src={Image}  alt="pfp"/>
                        </div>
                        <br />
                        <div><br />
                            <p style={{color: secondary}} contentEditable="true" className="occupation-one occupation-two" >
                                {occupation}
                            </p>
                            <br /> <br /> 
                        <div id="contact-container-one" className="contact-container-two">    
                            <p contentEditable="true"><LocationOnIcon />{contact.location}</p>
                            <p contentEditable="true"><PhoneAndroidIcon />{contact.phone}</p>
                            <p contentEditable="true"><EmailIcon />{contact.email}</p>
                            <p contentEditable="true"><LanguageIcon />{contact.web}</p>
                        </div>    
                            <br /><br />
                            <h3 contentEditable="true">Objective</h3>
                            <div className="objective-two about-container-one">
                                <p contentEditable="true"> {objective} </p> 
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="right-window" style={{background: primary}}>
                </div>
                <div className="right-window-two">
                    <br />
                    <br />
                    <h1  contentEditable="true" id='resume-name'> {name} </h1>
                    <br />
                    <div className="experience-two">
                        <h3 contentEditable="true">experience</h3>
                        <div id='experience-body-one'>
                          {experience.map((x, index)=> {
                                return(<ExperienceContent key={index} x={x} />)
                          })  }
                        </div>
                        <div className="add-field-one" onClick={() => addExperience()}><AddCircleIcon /></div>
                        <div className="add-field-one" onClick={() => removeExperiencField('experience-body-one')}><RemoveCircleIcon /></div> 
                    </div>
                    <br />
                    <div className="education-two">
                        <h3 contentEditable="true">education</h3>
                              <div id='select-education'>  
                              {education.map((x, index) => {
                                  return(<EducationContent key={index} x={x} />)
                              })}
                              </div>
                              <div className="add-education-one" onClick={() => addEducation()}><AddCircleIcon /></div>
                              <div className="add-education-one" onClick={() => removeExperiencField("select-education")}> <RemoveCircleIcon /> </div>
                    </div>
                    <br />
                    <div className="skills-two">
                        <h3 contentEditable="true"> Skills </h3>
                        <ul contentEditable="true" className="select-skills">
                            {skills.map((x, index) => {
                                return(
                                    <SkillsContent key={index} x={x} />
                                )
                            })}
                        </ul>
                    </div>
                </div>
        </div>
    )
}



export default TemplateTwo;