
import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Appbarst from '../components/main/Appbarst'
import Border from '../components/resume/body/Border';
import { usePesonalDataStore } from '../store/store';


const Layout = ({ children }) => {
  const setName = usePesonalDataStore(state => state.setName)
  const updateExperience = usePesonalDataStore(state => state.updateExperience)
  const updateEducation = usePesonalDataStore(state => state.updateEducation)
  const updateSkills = usePesonalDataStore(state => state.updateSkills)
  const skillsData = usePesonalDataStore(state => state.skills)
  const setObjective = usePesonalDataStore(state => state.setObjective)
  const setOccupation = usePesonalDataStore(state => state.setOccupation)
  const setContact = usePesonalDataStore(state => state.setContact)
  

  const saveList = () => {
    const name = document.querySelector('#resume-name')
    const experienceList = document.querySelector('#experience-body-one').childNodes
    const educationList = document.querySelector('#select-education').childNodes
    const skills = document.querySelector('.select-skills').childNodes
    const objec = document.querySelector('.about-container-one').firstChild
    const occupation = document.querySelector('.occupation-one').innerText
    const contact = document.querySelector('#contact-container-one').childNodes


    const contactObj = {
      location: contact[0].innerText,
      phone: contact[1].innerText,
      email: contact[2].innerText,
      web: contact[3].innerText
    }

  setContact(contactObj)
    const number = skills.length - skillsData.length
    skills.forEach((x, index) => {
      let elem = { name: x.innerText }
      updateSkills(elem , index)
    })

    for(let i =0; i< number; i++){
      const doc =  document.querySelector('.select-skills')
      doc.removeChild(doc.lastChild);
    }

    educationList.forEach((element, index) => {
      let education = {
        name: element.children[0].innerText,
        school: element.children[2].innerText,
        year: element.children[4].innerText
     }
     updateEducation(education, index)
    });
    
    experienceList.forEach((element, index) => {
      let experience = {
        head: element.children[0].children[0].innerText,
        company: element.children[0].children[1].innerText,
        year: element.children[1].innerText,
        body: element.children[2].innerText
      }
      updateExperience(experience, index)
    });

    setName(name.innerText)
    setObjective(objec.innerText)
    setOccupation(occupation)
  }

  const saveChanges = () => {
    const save =   document.querySelector('.save-changes')
    save.className += ' hide'
    saveList();
  }

  return (
    <Box sx={{ display: 'flex' }}>
        <Appbarst />
        <Grid 
          container
          className="main" id='main'>
              <Grid
              item lg={12}
              >  </Grid>
              <Grid item lg={0.5}></Grid>
              <Grid 
              item lg={2}
              className="toolbar">
                {children}
              </Grid>
              <Grid item lg={0.5}></Grid>
              <Grid lg={8.5}
              item 
              className="resume-container">
                <div className='save-changes hide' onClick={() => saveChanges()}>Save Changes</div>
                <div className='space '>
                </div>
                <div className='main-container'>
                <Border /> 
                </div> 
                <div className='space'></div>   
              </Grid>
              <Grid item lg={0.5}></Grid>             
         </Grid>   
    </Box>
  );
}

export default Layout