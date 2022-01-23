import create from 'zustand'
import { persist } from 'zustand/middleware'

const activeStore = (set) => ({
    active: "home",
    setActive: (status) =>
    set(() => ({ active: status  
    }))
})

let userData = (set) => ({
    font: {
        family: "'Comfortaa', cursive;",
    },
    fontUrl: "https://fonts.googleapis.com/css2?family=Amatic+SC&family=Bad+Script&family=Bebas+Neue&family=Comfortaa:wght@300&family=Kaushan+Script&family=Luxurious+Roman&family=Mea+Culpa&family=Orbitron&family=Pacifico&family=Roboto+Condensed&family=Roboto+Mono:wght@200&family=Roboto:wght@300&family=Ruluko&family=Special+Elite&family=Syncopate&display=swap",
    primary: 'red',
    secondary: 'green',
    text: 'white',
    css: {},
    imagePosition: {
        x: 10, y: 10
    },
    printRef: '',
    template: '',
    templateNumber: 0,
    


    setFont: (fonts) => set(() => ( {font: {family: fonts}} )),
    setPrimary: (color) => set(() => ( {primary: color} )),
    setSecondary: (color) => set(() => ( {secondary: color} )),
    setText: (color) => set(() => ( {text: color} )),
    setCss: (css) => set(() => ( {css: css} )),
    setImagePosition: (position) => set(() => ({imagePosition: position }) ),
    setPrintRef: (ref) => set(() => ( {printRef: ref})),
    addTemplate: (newTemp) => set(() => ( {template: newTemp})),
    setTemplateNumber: (temp) => set(() => ({templateNumber: temp})),

})

let personalData = (set) => ({
    image: {},
    name: 'Name Lastname',
    objective: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    occupation: "Graphic designer",
    contact: {
        location: 'Melbourne, Australia',
        phone: '+61 21343 12344',
        email: 'johnsmith@gmail.com',
        web: 'www.johhnsmit.com'
    },
    experience: [{
        head: "SENIOR JOURNALIST,",
        company: "Microsoft",
        year: "07 2015 - 05 2019",
        body: "A Ui/Ux designer at Microsoft"
    }],
    education: [{
        name: 'Software Development',
        school: 'PT University',
        year: '2015 - 2018'
    }],
    skills: [{name: "Painting"}],

    setImage: (image) => set(() => ( {image: image})),
    setName: (name) => set(() => ( {name: name} )),
    setContact: (contact) => set(() => ( {contact: contact} )),
    setOccupation: (occupation) => set(() => ( {occupation: occupation} )),
    setObjective: (objective) => set(() => ( {objective: objective} )),
    addExperience: () => set((state) => ({ experience: [...state.experience, state.experience[0] ]} )),
    updateExperience: (exp, index) => set((state) => (state.experience[index] = exp)),
    addEducation: () => set((state) => ({ education: [...state.education, state.education[0] ]} )),
    updateEducation: (education, index) => set((state) => (state.education[index] = education)),
    updateSkills: (skills, index) => set((state) => (state.skills[index] = skills)),
})

// personalData = persist(personalData, { name: 'user_settings' })

// add persist method for the activeStore
//add persist method for the personal details
export const useActiveStore = create(activeStore)
export const useUserDataStore = create(userData)
export const usePesonalDataStore = create(personalData)
