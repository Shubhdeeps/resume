import Background from "../../../components/main/toolbar/Background";
import Layout from "../../../layout/Layout";
import { useActiveStore, useUserDataStore } from "../../../store/store";


const background = () => {
    
    const setActive = useActiveStore(state => state.setActive)
    setActive('background')
    const secondary = useUserDataStore(state => state.secondary)
    const primary = useUserDataStore(state => state.primary)

    const patterns = [
        {
            css: `
            background-color: ${secondary};
            ` 
         },
        {
            css: `
            background-color: ${primary};
            ` 
         },
        {
            css: `
            background-color: ${primary};
            background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, ${secondary} 10px ), repeating-linear-gradient( ${secondary}, ${primary} );` 
         },
        {
            css: `
            background-color: ${primary};
            background-image:  linear-gradient(135deg, ${primary} 25%, transparent 25%), linear-gradient(225deg, ${primary} 25%, transparent 25%), linear-gradient(45deg, ${primary} 25%, transparent 25%), linear-gradient(315deg, ${primary} 25%, ${secondary} 25%);
            background-position:  10px 0, 10px 0, 0 0, 0 0;
            background-size: 10px 10px;
            background-repeat: repeat;`
        },
        {
            css: `
            background-color: ${primary};
            background-image:  linear-gradient(135deg, ${primary} 25%, transparent 25%), linear-gradient(225deg, ${primary} 25%, transparent 25%), linear-gradient(45deg, ${primary} 25%, transparent 25%), linear-gradient(315deg, ${primary} 25%, ${secondary} 25%);
            background-position:  10px 0, 10px 0, 0 0, 0 0;
            background-size: 20px 20px;
            background-repeat: repeat;`
        },
        {
            css: `
            background-color: ${primary};
            background: linear-gradient(135deg, ${primary} 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(225deg, ${primary} 25%, transparent 25%) -10px 0/ 20px 20px, linear-gradient(315deg, ${primary} 25%, transparent 25%) 0px 0/ 20px 20px, linear-gradient(45deg, ${primary} 25%, ${secondary} 25%) 0px 0/ 20px 20px;`
        },
        {
            css: `
            background-color: ${primary};
            background-image: radial-gradient(circle at center center, ${primary}, ${secondary}), repeating-radial-gradient(circle at center center, #444cf7, #444cf7, 10px, transparent 20px, transparent 10px);
            background-blend-mode: multiply;`
        },
        {
            css: `
            background-color: ${primary};
            background: repeating-linear-gradient( 45deg, ${primary}, ${primary} 5px, ${secondary} 5px, ${secondary} 25px );`
        },
        {
            css: `
            background-color: ${primary};
            background-size: 10px 10px;
            background-image: repeating-linear-gradient(45deg, ${primary} 0, ${primary} 1px, ${secondary} 0, ${secondary} 50%);`
        },
        {
            css: `
            background-color: ${primary};
            background: radial-gradient(circle, transparent 20%, ${secondary} 20%, ${secondary} 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, ${secondary} 20%, ${secondary} 80%, transparent 80%, transparent) 25px 25px, linear-gradient(${primary} 2px, transparent 2px) 0 -1px, linear-gradient(90deg, ${primary} 2px, ${secondary} 2px) -1px 0;
            background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;`
        },
        {
            css: `
            background-color: ${primary};
            background-image: radial-gradient(${primary} 1.7000000000000002px, ${secondary} 1.7000000000000002px);
            background-size: 34px 34px;`
        },
        {
            css: `
            background-color: ${primary};
            background-image:  radial-gradient(${primary} 1.7000000000000002px, transparent 1.7000000000000002px), radial-gradient(${primary} 1.7000000000000002px, ${secondary} 1.7000000000000002px);
            background-size: 68px 68px;
            background-position: 0 0,34px 34px;`
        }
    ]

    
    return(
        <Layout>
            <div className="tool-container">
                {patterns.map((x, index) => (
                    <Background key={index} css={x.css} />
                ))}
            </div>
        </Layout>
    )

}

export default background;