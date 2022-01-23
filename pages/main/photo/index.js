import Layout from "../../../layout/Layout";
import imageToBase64 from 'image-to-base64/browser';
import { useActiveStore, usePesonalDataStore } from "../../../store/store";

const photo = () => {
     const setActive = useActiveStore(State => State.setActive)
      setActive("photo")

    const setImage = usePesonalDataStore(state => state.setImage);

    const handleChange = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
          if(reader.readyState === 2){
            setImage( reader.result )
          }
        }
        reader.readAsDataURL(e.target.files[0])
      } 
    

    return(
        <Layout>
           <div className="image-container">
                <input  type="file" accept='image/*' onChange={(e) => handleChange(e)} />
            </div>
            <div className="space-two"></div> 
        </Layout>
    )

}

export default photo;