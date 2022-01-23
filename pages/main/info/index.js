import Layout from "../../../layout/Layout";
import { useActiveStore } from "../../../store/store";



const info = () => {

    const setActive = useActiveStore(state => state.setActive)
    setActive('info')
    
    return(
        <Layout>
           
        </Layout>
    )

}

export default info;