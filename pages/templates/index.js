import Image from 'next/image'
import { useRouter } from 'next/router'
import { usePesonalDataStore, useUserDataStore } from '../../store/store'

const res1 = '/res1.jpg'
const res2 = '/res2.jpg'



const template = () => {
    
    const arr = [res1, res2]
    const route = useRouter()
    const setPrimary = useUserDataStore(state => state.setPrimary)
    const setSecondary = useUserDataStore(state => state.setSecondary)
    const setTextColor = useUserDataStore(state => state.setText)
    const setTemplateNumber = useUserDataStore(state => state.setTemplateNumber)
    const setImage = usePesonalDataStore(state => state.setImage)

    const handleClick = (index) => {
        setTemplateNumber(index)
        setTemplatedata(index)
        route.push(`/main/home`)
    }

    const setTemplatedata = (index) => {    
        switch(index){
            case 0: 
            setPrimary(`#DDC2C2`),
            setSecondary(`#FEF3F0`),
            setTextColor(`#1E150E`),
            setImage(`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`)
            break;
            case 1: 
            setPrimary(`#DDC2C2`),
            setSecondary(`#FF5252`),
            setTextColor(`#1E150E`),
            setImage(`https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`)
            break;
        }
    }


    return(
        <div className="template-container">
            <h3> Select a template...</h3>
            <div className="templates-scrollable">
                <div className='template-child'>
                {arr.map((x, ind) => {
                   
                    return(
                       <div key={ind} className='image-container-template'> 
                        <Image  
                        id="img-template"
                        onClick={() => handleClick(ind)}
                        src={x} 
                        width={450}
                        height={700}
                        />
                        </ div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}





export default template;