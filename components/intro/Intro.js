import { Container } from "@mui/material"
import { useRouter } from "next/router"
import Lottie from "react-lottie";
import resume from '../../lottie/resume2.json'

const Intro = () => {
    const route = useRouter()

    const handleClick = (path) => {
      route.push(`/templates`)
    }
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: resume,
      };

    return(
        <Container>
            <div className="intro-container">
                <h3>Resume Builder</h3>
                <h4>Create an awesome looking resume now with our free resume builder.</h4>
                <div className="get-started" onClick={() => handleClick()}>Get started</div>
                <div className="lottie-container">
                <Lottie 
                options={defaultOptions}
                height={500}
                width={500}
                />
                </div>
            </div>
        </Container>
    )
}

export default Intro