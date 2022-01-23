import { useUserDataStore } from "../../../store/store";
import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";

const Template = () => {
    const template = useUserDataStore(state => state.templateNumber)
    let temp;

    const saveAppear = () => {
        const save =   document.querySelector('.save-changes')
        save.classList.remove('hide')
    }
    
    switch(template){
        case 0: 
        temp = <TemplateOne />
        break;

        case 1: 
        temp = <TemplateTwo />
        break;       
    }
    return(
        <div className="template" onInput={() => saveAppear()}>
          {temp}
        </div>
     )
}

export default Template;