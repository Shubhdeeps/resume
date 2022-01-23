import { usePesonalDataStore, useUserDataStore } from "../../../store/store";
import React from 'react'
import { useRouter } from "next/router";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ExperienceContent from "./components/ExperienceContent";
import EducationContent from "./components/EducationContent";
import SkillsContent from "./components/SkillsContent";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const TemplateOne = () => {

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
        <div className="template">
            <div className="top-header" style={{background: primary}}> 
            <div className="image-container-one" onClick={() => route.push('/main/photo')}>
                <img className="image-one" src={Image} alt='pfp'/>
            </div>
            </div>
            <div className="second-header" style={{background: primary}}>
                <div className="container-one"> 
                     <p contentEditable="true" className="name-one" id='resume-name'> {name} </p>
                        <div className="occupation-container-one" style={{background: primary}}> 
                            <p style={{color: secondary}} contentEditable="true" className="occupation-one">
                                {occupation}
                            </p>
                        </div>
                        <div className="about-container-one">
                            <p contentEditable="true"> 
                             {objective}
                            </p>
                        </div>          
                </div>
                <div className="contact-container-one" id="contact-container-one">
                    <p contentEditable="true"><LocationOnIcon />{contact.location}</p>
                    <p contentEditable="true"><PhoneAndroidIcon />{contact.phone}</p>
                    <p contentEditable="true"><EmailIcon />{contact.email}</p>
                    <p contentEditable="true"><LanguageIcon />{contact.web}</p>
                </div>
            </div>
            <div className="body-one-container">
                <div className="body-one">
                    <div className="experience-heading-one">
                        <div style={{background: primary}} className="heading-container-one">
                            <p contentEditable="true"> experience</p>
                        </div>
                        <div id='experience-body-one'>
                          {experience.map((x, index)=> {
                                return(<ExperienceContent key={index} x={x} />)
                          })  }
                        </div> 
                <div className="add-field-one" onClick={() => addExperience()}><AddCircleIcon /></div>
                <div className="add-field-one" onClick={() => removeExperiencField('experience-body-one')}><RemoveCircleIcon /></div>
                    </div>
                </div>
                    <div className="education-skill-container">
                        <div className="body-one-education">
                            <div id="education-body-one">
                                <div style={{background: primary}} className="heading-container-one">
                                <p contentEditable="true"> education</p>
                                </div> 
                              <div id='select-education'>  
                              {education.map((x, index) => {
                                  return(<EducationContent key={index} x={x} />)
                              })}
                              </div>
                            </div>
                                <div className="add-education-one" onClick={() => addEducation()}><AddCircleIcon /></div>
                                <div className="add-education-one" onClick={() => removeExperiencField("select-education")}> <RemoveCircleIcon /> </div>
                        </div>
                        <br />
                        <div className="body-one-skills">
                            <div style={{background: primary}} className="heading-container-one">
                                    <p contentEditable="true"> Skills</p>
                                </div>
                                    <ul contentEditable="true" id="skills-one" className="select-skills">
                                        {skills.map((x, index) => {
                                            return(
                                                <SkillsContent key={index} x={x} />
                                            )
                                        })}
                                    </ul>
                     </div>
                </div>     
            </div>
        </div>
    )
}

export default TemplateOne;