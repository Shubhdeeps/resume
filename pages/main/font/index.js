import Font from "../../../components/main/toolbar/Font";
import Layout from "../../../layout/Layout";
import { useActiveStore } from "../../../store/store";


const fontData = [
   { family: `'Amatic SC', cursive;`, name: `Anatic Sc`},
{family: `'Bebas Neue', cursive;`, name:  `Bebas Neue`},
{family: `'Comfortaa', cursive;`, name:  `Comfortaa` },
{family: `'Kaushan Script', cursive;`, name: `Kaushan Sc`},
{family: `'Luxurious Roman', cursive;`, name: `Luxurious Roman`},
{family: `'Orbitron', sans-serif;`, name: `Orbitron`},
{family: `'Roboto', sans-serif;`, name: `Roboto`},
{family: `'Roboto Condensed', sans-serif;`, name: `Roboto Condensed`},
{family: `'Roboto Mono', monospace;`, name: `Roboto Mono`},
{family: `'Ruluko', sans-serif;`, name: `Ruluko`},
{family: `'Syncopate', sans-serif;`, name: `Syncopate`},
{family: `'Bad Script', cursive;`, name: `Bad Script`},
{family: `'Special Elite', cursive;`, name: `Special ELite`},
{family: `'Mea Culpa', cursive;`, name: `Mea Culpa`},
{family: `'Pacifico', cursive;`, name: `Pacifico`},

]

const font = () => {

    const setActive = useActiveStore(state => state.setActive)
    setActive('font')

    return(
        <Layout>
            <div className="tool-container">
               {fontData.map(x => (<Font name={x.name} family={x.family}/>)
               )}
            </div>
        </Layout>
    )

}

export default font;