import Layout from "../../../layout/Layout";
import { useActiveStore } from "../../../store/store";



const personal = () => {

    const setActive = useActiveStore(state => state.setActive)
    setActive('personal')
    
    return(
        <Layout>
        <h3>
            personal
        </h3>
        </Layout>
    )

}

export default personal;