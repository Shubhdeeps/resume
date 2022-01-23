
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../../layout/Layout";
import { useActiveStore, useUserDataStore } from "../../../store/store";

const res1 = '/res1.jpg'
const res2 = '/res2.jpg'
const res3 = '/res3.png'

const home = () => {

    const setActive = useActiveStore(State => State.setActive)
    setActive("home")

    const templateNumber = useUserDataStore(state => state.templateNumber)
    const primary = useUserDataStore(state => state.primary)
    const secondary = useUserDataStore(state => state.secondary)
    const font = useUserDataStore(state => state.text)
    const fontFamily = useUserDataStore(state => state.font)

    const route = useRouter()

    const handleClick = () => {
        route.push(`/templates`)
    }
    const themeHandleClick = () => {
        route.push(`/main/theme`)
    }
    const fontPush = () => {
        route.push(`/main/font`)
    }
    const arr = [res1, res2, res3]

    return(
        <Layout>
            <div className="home">
                Active template
                <Image src={arr[templateNumber]}
                width={250}
                height={350}
                />
                <div onClick={() => handleClick()} className="change-template">
                    <p>Change template</p>
                </div>
                <br />
                Active color theme
                <div className="home-colors" onClick={() => themeHandleClick()}>
                    <div style={{background: primary}}></div>
                    <div style={{background: secondary}}></div>
                    <div style={{background: font}}></div>
                </div>
                <br />
                    Active font
                <div className="active-font" onClick={() => fontPush()}>
                    {fontFamily.family.replace(fontFamily.family.substring(fontFamily.family.indexOf(","), fontFamily.family.length), "")}
                </div>
            </div>     
        </Layout>
    )
}

export default home;